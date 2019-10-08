<template>
  <v-card class="ma-2">
    <v-card-title class="secondary">
      <v-icon class="mr-2">mdi-account-plus</v-icon>
      Guest Information
    </v-card-title>
    <v-card-text class="pt-2">
      <v-row v-for="i in guestCount" :key="i" align="stretch">
        <v-text-field class="mx-2" :label="`Guest ${i} Name`" v-model="thisGuest[i].name" outlined dense></v-text-field>
        <v-text-field class="mx-2" label="Name for Badge" outlined dense></v-text-field>
        <v-checkbox v-for="(event, index) in events" :key="index" :label="`${event.name} - $${event.amt.toFixed(2)}`" v-model="thisGuest[i][event.name]" class="ma-1"></v-checkbox>
        <span class="amt ma-2 green--text">Total Due: ${{ thisGuest[i].amt }}</span>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    thisGuest: [
      {name: '', badge: '', amt: 0},
      {name: '', badge: '', amt: 0},
      {name: '', badge: '', amt: 0}
    ]

  }),
  computed: {
    ...mapState(['group','guestCount','events'])
  }
}
</script>
