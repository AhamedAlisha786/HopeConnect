import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/auth",
});

export const registerOrphanage = (data) =>
  API.post("/register", data);

export const loginOrphanage = (data) =>
  API.post("/login", data);
