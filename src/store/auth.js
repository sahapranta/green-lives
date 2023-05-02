import { defineStore } from "pinia";
import { api } from "@/plugins/api";
import router from "@/router";

class Storage {
  constructor() {
    this.store = localStorage;
  }
  getItem(name) {
    let item = this.store.getItem(name);
    return item ? JSON.parse(item) : null;
  }
  setItem(name, data) {
    this.store.setItem(name, JSON.stringify(data));
  }
  remove(name) {
    this.store.removeItem(name);
  }
}

const localStore = new Storage();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: localStore.getItem("user"),
    returnUrl: null,
  }),
  actions: {
    async login() {
      try {
        const { data } = await api.post("auth/login", {
          username: "kminchelle",
          password: "0lelplR",
        });
        this.user = data;
        localStore.setItem("user", data);
        router.push(this.returnUrl || "/home");
      } catch (error) {
        console.log(error?.response?.data ?? error.message);
      }
    },
    async register() {
      this.login();
    },
    async logout() {
      this.user = null;
      localStore.remove("user");
      window.location = "/";
    },
  },
});
