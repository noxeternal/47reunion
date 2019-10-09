<template>
  <v-card class="ma-2">
    <v-card-title class="secondary">
      <v-icon class="mr-2">mdi-cash-usd</v-icon>Amount Due<v-spacer />
    </v-card-title>
    <v-card-text class="pt-2">
      <template>
        <v-row>
          <div class="ma-2">Veteran - {{ veteran.badgeName }} Total:</div>
          <v-spacer />
          <div class="amt ma-2 right-text">{{ veteran.sum.toFixed(2) }}</div>
        </v-row>
        <v-row v-for="guest in this.$store.state.guest" :key="guest.index">
          <div class="ma-2 right-text"> Guest - {{ guest.name }}</div>
          <v-spacer />
          <div class="amt ma-2 right-text"> {{ guest.sum.toFixed(2) }}</div>
        </v-row>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({

  }),
  computed: {
    ...mapState(['veteran','guest'])
  }
}
</script>