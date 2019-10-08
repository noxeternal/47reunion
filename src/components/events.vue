<template>
  <v-card class="ma-2" min-width="350px">
    <v-card-title class="secondary"><v-icon class="mr-2">mdi-format-list-checks</v-icon>Events</v-card-title>
    <v-card-text>
      <v-row v-for="(event, index) in events">
        <v-checkbox :key="index" :label="event.name" v-model="veteran[event.name]" :value="event.amt" class="my-1"></v-checkbox>
        <v-spacer />
        <span class="amt ma-2">${{ event.amt.toFixed(2) }}</span>
      </v-row>
      <v-row justify="end"><span class="amt ma-2">Due for Events: ${{ sum.toFixed(2) }}</span></v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    veteran: {}
  }),
  computed: {
    ...mapState(['group','guestCount','events']),
    sum: function () {
      let sum = 0
      if(this.events) {
        this.events.forEach(v => 
          sum += this.veteran[v.name]?v.amt:0
        )
      }

      return sum
    }
  }
}
</script>