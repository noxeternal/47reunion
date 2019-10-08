<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        47th <span class="text-uppercase">Infantry Regiment</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>Reunion Registration</span>
      <span class="mx-2">April 22-26, 2020</span>
    </v-app-bar>

    <v-content class="mx-4">
      <v-row>
        <veteran />
        <reunion />
        <events />
      </v-row>
      <v-row>
        <guest v-if="group" />
      </v-row>
    </v-content>
  </v-app>
</template>

<style>
.amt {
  font-size: 16px;
}
.v-messages {
  display: none!important;
}
</style>

<script>
import veteran from "./components/veteran";
import reunion from "./components/reunion";
import guest from "./components/guest";
import events from "./components/events";

import { mapState } from 'vuex'

export default {
  name: "App",
  components: {
    veteran,
    reunion,
    guest,
    events
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['group','guestCount'])
  }
};
</script>
