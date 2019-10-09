<template>
  <v-card class="ma-2">
    <v-card-title class="secondary"><v-icon class="mr-2">mdi-check-bold</v-icon>Reunion</v-card-title>
    <v-card-text>
      <v-radio-group v-model="registration">
        <v-radio v-for="reg in reunion" :key="reg" :label="reg" :value="reg"></v-radio>
      </v-radio-group>
      <v-row v-if="false">
        <v-icon class="mr-2">mdi-account</v-icon>
        <v-text-field label="# of Guests" type="number" min="1" max="25" v-model.number="guests" />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import {mapState } from 'vuex'

export default {
  data: () => ({
    registration: 'Single Registration',
    guests: 1,
    reunion: [
      'Single Registration',
      'Group Registration'
    ]
  }),
  methods: {

  },
  watch: {
    registration: function (reg) {
      this.$store.commit('SET_GROUP', reg=='Group Registration')
    },
    guests: function (count) {
      this.$store.commit('SET_GUESTCOUNT', count)
    }
  },
  computed: {
    ...mapState(['group','guestCount'])
  }
}
</script>
