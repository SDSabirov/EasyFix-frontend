module.exports = {
    apps: [
      {
        name: "ESY",
        port: "3007",
        exec_mode: "cluster",
        instances: "max",
        script: "./.output/server/index.mjs",
      },
    ],
  };