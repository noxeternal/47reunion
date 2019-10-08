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
        <guest v-if="registration == 40" />
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import veteran from "./components/veteran";
import guest from "./components/guest";
import reunion from "./components/reunion";

import { mapState } from 'Vuex'

export default {
  name: "App",
  components: {
    veteran,
    guest,
    reunion
  },
  data: () => ({
    //
  })
};
</script>
