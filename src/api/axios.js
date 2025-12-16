import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // withCredentials: true, // Commented out - uncomment if you need to send cookies/auth headers
  headers: {
    "Content-Type": "application/json",
  },
});
