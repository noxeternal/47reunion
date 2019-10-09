<template>
  <v-card class="ma-2">
    <v-card-title class="secondary"><v-icon class="mr-2">mdi-account-edit</v-icon>Registrant Information</v-card-title>
    <v-card-text class="pt-2">
      <v-row>
        <v-text-field class="mx-2" label="First Name" v-model="veteran.firstName" outlined dense></v-text-field>
        <v-text-field class="mx-2" label="Last Name" v-model="veteran.lastName" outlined dense></v-text-field>
      </v-row>
      <v-row>
        <v-text-field class="mx-2" label="Name for Badge" v-model="veteran.badgeName" outlined dense></v-text-field>
      </v-row>
      <v-row>
        <v-text-field class="mx-2" label="Units" v-model="veteran.units" outlined dense></v-text-field>
        <v-text-field class="mx-2" label="Dates in Country" v-model="veteran.dates" outlined dense></v-text-field>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
  }),
  computed: {
    ...mapState(['veteran'])
  }
};
</script>
