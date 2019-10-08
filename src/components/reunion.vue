<template>
  <v-card class="ma-2">
    <v-card-title class="secondary"><v-icon class="mr-2">mdi-check-bold</v-icon>Reunion Attendance</v-card-title>
    <v-card-text>
      <v-radio-group v-model="registration">
        <v-radio v-for="reg in reunion" :key="reg.name" :label="`${reg.name} - $${reg.amt.toFixed(2)}`" :value="reg.amt"></v-radio>
      </v-radio-group>
      <v-row v-if="group">
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
    registration: 25,
    guests: 1,
    reunion: [
      { name: 'Single Registration', amt: 25 },
      { name: 'Group Registration', amt: 40 }
    ]
  }),
  methods: {

  },
  watch: {
    registration: function (amt) {
      this.$store.commit('SET_GROUP', amt==40)
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
