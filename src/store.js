import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    group: false,
    guestCount: 1,
    reunion: {
      registrant: {  
        firstName: '',
        lastName: '',
        badgeName: '',
        units: [],
        datesInCountry: [],
        events: {},
        contactInfo: {
          address:['',''],
          city: '',
          state: '',
          zip: '',
          phone: {
            home: '',
            cell: ''
          },
          email: ''
        }
      },
      guests: [
        {  
          firstName: '',
          lastName: '',
          badgeName: '',
          events: {}
        }
      ]      
    },
    events: [
      { name: 'Transportation & Misc', amt: 12 },
      { name: 'Golf Scramble', amt: 65 },
      { name: 'Poolside Cookout', amt: 30 },
      { name: 'Regimental Dinner', amt: 50 }
    ]
    
  },
  mutations: {
    SET_GROUP (state, payload) {
      state.group = payload || false
    },
    SET_GUESTCOUNT (state, payload) {
      state.guestCount = payload || 1
    },
    SET_GUESTS (state, payload)  {
      state.guests = payload || []
    }
  },
  actions: {}
});
