import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    veteran: {
      memberId: 0,
      events: [],
      sum: 25,
      firstName: "",
      lastName: "",
      homeTown: '',
      badgeName: "",
      units: {},
      other: '',
      dates: [{fromMonth:'Jan', fromYear: 65, toMonth: 'Jan', toYear: 65}],
      contribution: 0
    },
    guests: [],
    events: [
      // { name: "Reunion Registration", amt: 25 },
      { name: "Regimental Dinner", amt: 50, short: 'Dinner' },
      { name: "Poolside Cookout", amt: 30, short: 'Cookout' },
      { name: "Golf Scramble", amt: 65, short: 'Golf' },
      { name: "Transportation & Misc", amt: 15, short: 'Bus'}
    ],
    details: {
      Platoon: ['1st', '2nd', '3rd', '4th', 'Recon'],
      Company: ['HHC', 'A', 'B', 'C', 'D', 'E'],
      Batallion: ['2-47', '3-47', '4-47']
    },
  },
  mutations: {
    SET_VETERAN(state, payload) {
      state.veteran = Object.assign({}, payload) || { sum: 0 };
    },
    SET_GUEST(state, payload) {
      Vue.set(state.guests, payload.index, payload);
      // state.guests[payload.index] = payload || {}
    },
    SET_GUESTS(state, payload) {
      state.guests = Object.assign({}, payload) || { sum: 0 };
    },
    DEL_GUEST (state, payload) {
      const guestIndex = state.guests.indexOf(payload)
      Vue.delete(state.guests, guestIndex)
    },
    LOAD_RECORD (state, payload) {
      state.veteran = payload.veteran
      state.guests = payload.guests
    },
    UPDATE_CONTRIBUTION (state, payload) { 
      state.veteran.contribution = Number(payload).toFixed(2)
    }
  },
  actions: {
    async loadRegistration (context, registration) {
      // const data = await this.$api.getRegistration(memberId)
      context.commit('LOAD_RECORD', registration)
    },
    async saveRegistration (context, registration) {
      localStorage.registration = context.state
    }
  }
});
