<template>
  <v-card>
    <v-card-title class="secondary">
      <v-icon class="mr-2">mdi-format-list-checks</v-icon>
      Events
      <v-spacer />
      <v-btn icon @click="selectAll()" title="Select All"><v-icon small>mdi-checkbox-multiple-marked</v-icon></v-btn>
      <v-btn icon @click="selectNone()" title="Select None"><v-icon small>mdi-checkbox-multiple-blank</v-icon></v-btn>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-checkbox label="Reunion Registration" readonly :value="true" v-model="boolT" class=" my-1"></v-checkbox>
        <v-spacer />
        <span class="amt ma-2">$25.00</span>
      </v-row>
      <v-row v-for="(event, index) in events" :key="index">
        <v-checkbox multiple @change="saveVeteran()" :label="event.name" v-model="veteran.events" :value="event.name" class="my-1"></v-checkbox>
        <v-spacer />
        <span class="amt ma-2">${{ event.amt.toFixed(2) }}</span>
      </v-row>
      <v-row justify="end">
        <span class="amt ma-2 green--text total">Due for Events: </span>
        <div class="amt ma-2 green--text total text-right">
          ${{ veteran.sum.toFixed(2) }}
        </div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    boolT: true
  }),
  methods: {
    selectAll() {
      this.veteran.events = this.events.map(event => event.name);
      this.saveVeteran();
    },
    selectNone() {
      this.veteran.events = [];
      this.saveVeteran();
    },
    saveVeteran() {
      let sum = 25;
      this.events.forEach(
        v => (sum += this.veteran.events.indexOf(v.name) >= 0 ? v.amt : 0)
      );
      this.veteran.sum = sum;

      this.$store.commit('SET_VETERAN', this.veteran);
      return sum;
    }
  },
  computed: {
    ...mapState(['veteran', 'group', 'guestCount', 'events'])
  }
};
</script>
