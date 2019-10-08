<template>
  <v-card class="ma-2">
    <v-card-title><v-icon class="mr-2">mdi-account-edit</v-icon>Registrant Information</v-card-title>
    <v-card-text>
      <v-row>
        <v-text-field class="mx-2" label="First Name" outlined dense></v-text-field>
        <v-text-field class="mx-2" label="Last Name" outlined dense></v-text-field>
      </v-row>
      <v-row>
        <v-text-field class="mx-2" label="Name for Badge" outlined dense></v-text-field>
      </v-row>
      <v-row>
        <v-text-field class="mx-2" label="Units" outlined dense></v-text-field>
        <v-text-field class="mx-2" label="Dates in Country" outlined dense></v-text-field>
      </v-row>
    </v-card-text>
  </v-card>
</template>
