<template>
  <v-card class="ma-2">
    <v-card-title class="secondary">
      <v-icon class="mr-2">mdi-account-plus</v-icon>
      Guest Information ({{ guest.length }})
      <v-spacer />
      <v-btn icon title="Add Guest" @click="addGuest()"
        ><v-icon>mdi-plus-box</v-icon></v-btn>
    </v-card-title>
    <v-card-text class="pt-2">
      <v-flex v-if="guest.length == 0" class="text-center">
        Please click
        <v-btn icon title="Add Guest" @click="addGuest()">
          <v-icon small>mdi-plus-box</v-icon>
        </v-btn>
        to add a guest
      </v-flex>
      <template v-else v-for="(guest, i) in guest">
        <hr v-if="i > 0" :key="`${i}0`" class="mb-3 green" />
        <v-row :key="`${i}1`" align="stretch">
          <v-btn icon title="Remove Guest" @click="delGuest(guest)"><v-icon>mdi-minus-box</v-icon></v-btn>
          <v-text-field class="mx-2" :label="`Guest ${parseInt(i) + 1} Name`" v-model="guest.name" outlined dense></v-text-field>
          <v-text-field class="mx-2" label="Name for Badge" v-model="guest.badge" outlined dense></v-text-field>
          <span class="amt ma-2 green--text total">Guest Total:</span>
          <div class="amt ma-2 green--text total right-text">
            ${{ guest.sum.toFixed(2) }}
          </div>
        </v-row>
        <v-row :key="`${i}2`">
          <v-checkbox label="Reunion Registration - $25.00" readonly :value="true" v-model="boolT" class=" my-1"></v-checkbox>
          <v-checkbox multiple @change="saveGuest(guest)" v-for="(event, index) in events" :key="index" :label="`${event.name} - $${event.amt.toFixed(2)}`" v-model="guest.events" :value="event.name" class="pl-3 ma-1"></v-checkbox>
        </v-row>
      </template>
    </v-card-text>
  </v-card>
</template>

<style></style>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    boolT: true
  }),
  methods: {
    addGuest() {
      const index = Math.random().toString(36);
      this.guest.push({ index, events: [], sum: 25 });
      this.saveGuest()
    },
    delGuest(guest) {
      const index = this.guest.indexOf(guest);
      if (index != -1) {
        this.guest.splice(index, 1);
        this.$store.commit('DEL_GUEST', guest)
      }
    },
    saveGuest(guest) {
      let sum = 25;
      if (guest) {
        this.events.forEach(
          v => (sum += guest.events.indexOf(v.name) >= 0 ? v.amt : 0)
        );
        guest.sum = sum;

        this.$store.commit('SET_GUEST', guest);
        return sum;
      }
    }
  },
  computed: {
    ...mapState(['guest', 'events'])
  }
};
</script>
