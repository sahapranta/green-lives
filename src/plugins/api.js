import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
api.defaults.headers["Accept"] = "application/json";
api.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

if (localStorage.getItem("user")) {
  const user = JSON.parse(localStorage.getItem("user"));
  api.defaults.headers.common["Authorization"] = "Bearer " + user.token;
}
