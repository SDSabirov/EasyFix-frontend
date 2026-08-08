// One-off asset optimizer: converts heavy PNG/JPG under app/assets to WebP
// (max 1600px wide, q78) and recompresses oversized WebP in place.
// Originals are kept on disk; source references must be updated separately.
import { readdir, stat } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import sharp from 'sharp'

const ROOT = new URL('../app/assets/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const MAX_WIDTH = 1600
const CONVERT_THRESHOLD = 30 * 1024
const REENCODE_THRESHOLD = 150 * 1024

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else yield full
  }
}

const converted = []
let saved = 0

for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase()
  const size = (await stat(file)).size

  if (['.png', '.jpg', '.jpeg'].includes(ext) && size >= CONVERT_THRESHOLD) {
    const target = file.slice(0, -ext.length) + '.webp'
    try {
      await stat(target)
      console.log(`skip (webp exists): ${basename(file)}`)
      continue
    } catch {}
    const img = sharp(file)
    const meta = await img.metadata()
    const pipeline = meta.width > MAX_WIDTH ? img.resize({ width: MAX_WIDTH }) : img
    const info = await pipeline.webp({ quality: 78, effort: 5 }).toFile(target)
    saved += size - info.size
    converted.push({ from: basename(file), to: basename(target) })
    console.log(`${basename(file)} (${(size / 1024) | 0}KB) -> ${basename(target)} (${(info.size / 1024) | 0}KB)`)
  } else if (ext === '.webp' && size >= REENCODE_THRESHOLD) {
    // Work via buffers: sharp holding the input file handle open breaks
    // in-place writes on Windows.
    const { readFile, writeFile } = await import('node:fs/promises')
    const src = await readFile(file)
    const img = sharp(src)
    const meta = await img.metadata()
    const pipeline = meta.width > MAX_WIDTH ? img.resize({ width: MAX_WIDTH }) : img
    const out = await pipeline.webp({ quality: 75, effort: 5 }).toBuffer()
    if (out.length < size * 0.9) {
      await writeFile(file, out)
      saved += size - out.length
      console.log(`re-encoded ${basename(file)}: ${(size / 1024) | 0}KB -> ${(out.length / 1024) | 0}KB`)
    } else {
      console.log(`kept (no win): ${basename(file)}`)
    }
  }
}

console.log(`\nConverted ${converted.length} files, total saved ~${(saved / 1024 / 1024).toFixed(1)}MB`)
console.log('RENAMES_JSON=' + JSON.stringify(converted))
