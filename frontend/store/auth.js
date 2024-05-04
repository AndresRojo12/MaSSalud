import { defineStore } from 'pinia';
import { storeToken, getToken, removeToken } from '@/util/token.js';

export const useAuth = defineStore('auth', {
  state: () => {
    return {
      isAuthenticated: !!getToken(),
      userId: null
    };
  },

  actions: {
    login(token) {
      storeToken(token);
      this.isAuthenticated = true;
    },
    logout() {
      removeToken();
      this.isAuthenticated = false;
    },
  },
});
