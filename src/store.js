import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    veteran: {
      events: [],
      sum: 25,
      firstName: "Michael",
      lastName: "Rice",
      badgeName: "Mikee",
      units: "n/a",
      dates: "n/a"
    },
    guest: [],
    events: [
      // { name: "Reunion Registration", amt: 25 },
      { name: "Transportation & Misc", amt: 15 },
      { name: "Golf Scramble", amt: 65 },
      { name: "Poolside Cookout", amt: 30 },
      { name: "Regimental Dinner", amt: 50 }
    ]
  },
  mutations: {
    SET_VETERAN(state, payload) {
      state.veteran = Object.assign({}, payload) || { sum: 0 };
    },
    SET_GUEST(state, payload) {
      Vue.set(state.guest, payload.index, payload);
      // state.guest[payload.index] = payload || {}
    },
    DEL_GUEST (state, payload) {
      const guestIndex = state.guest.indexOf(payload)
      Vue.delete(state.guest, guestIndex)
    }
  },
  actions: {}
});
