<template>
  <v-card>
    <v-card-title class="secondary">
      <v-icon class="mr-2">
        mdi-account-plus
      </v-icon>
      Guest Information ({{ guests.length }})
      <!-- v-spacer />
      <v-btn icon title="Add Guest" @click="addGuest()">
        <v-icon>mdi-plus-box</v-icon>
      </v-btn -->
    </v-card-title>
    <v-card-text class="pt-2">
      <template v-if="guests.length > 0">
        <div :key="`${i}0`" v-for="(guest, i) in guests">
          <v-row :key="`${i}1`" align="stretch">
            <v-btn icon title="Remove Guest" @click="delGuest(guest)">
              <v-icon color="red">
                mdi-trash-can
              </v-icon>
            </v-btn>
            <v-text-field class="mx-2" :label="`Guest ${parseInt(i) + 1} Name`" v-model="guest.name" outlined dense />
            <v-text-field class="mx-2" label="Name for Badge" v-model="guest.badge" outlined dense />
            <span class="amt ma-2 green--text total">Guest Total:</span>
            <div class="amt ma-2 green--text total right-text">
              ${{ guest.sum.toFixed(2) }}
            </div>
          </v-row>
          <v-row justify="space-between" class="mr-2" :key="`${i}2`">
            <v-checkbox multiple @change="saveGuest(guest)" v-for="(event, index) in events" :key="index" :label="`${event.name}: $${event.amt}`" v-model="guest.events" :value="event.name" class="pl-3 ma-1" />
          </v-row>
          <hr :key="`${i}3`" class="mb-3 green">
        </div>
      </template>
      <v-flex class="text-center pointer" @click="addGuest()">
        Please click
        <v-btn icon title="Add Guest">
          <v-icon small>
            mdi-plus-box
          </v-icon>
        </v-btn>
        to add a guest
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<style></style>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
  }),
  methods: {
    addGuest() {
      const index = Math.random().toString(36);
      this.guests.push({ index, events: [], sum: 25 });
      this.saveGuest()
    },
    delGuest(guest) {
      const index = this.guests.indexOf(guest);
      if (index != -1) {
        this.guests.splice(index, 1);
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
    ...mapState(['guests', 'events'])
  }
};
</script>
