import { defineStore } from "pinia";

export const cookieStore = defineStore('cookie', {
  state: () => {
    return {
      useCookie: localStorage.getItem('cookie')
    }
  },
  getters: {
    isAceptCookie: (state) => {
      return state.useCookie
    }
  },
  actions: {
    UserAceptCookie() {
      localStorage.setItem('cookie', true)

      this.useCookie = localStorage.getItem('cookie')
    }
  }
})