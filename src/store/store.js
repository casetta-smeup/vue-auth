import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as actions from "./actions";

export default new Vuex.Store({
  state: {
    user: {
      username: "",
      role: ""
    },
    loading: false
  },

  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },

    setUsername(state, username) {
      state.user.username = username;
    },

    setRole(state, role) {
      state.user.role = role;
    }
  },

  actions,

  getters: {
    userRole: state => state.user.role
  }
});
