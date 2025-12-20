import axios from "axios";

// Get API base URL from environment variable or use local development as fallback
const baseURL = process.env.NUXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    'X-CSRFToken': 'csrftoken'
  },
});

export default instance;