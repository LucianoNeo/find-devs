import axios from "axios";

export const api = axios.create({
  baseURL: "finddevsapi.up.railway.app",
});
