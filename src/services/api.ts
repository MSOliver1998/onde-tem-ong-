import axios from "axios";

export const api = axios.create({
  baseURL: "https://onde-tem-ong.onrender.com",
  timeout: 20000,
});
