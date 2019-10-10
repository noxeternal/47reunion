<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        47th <span class="text-uppercase">Infantry Regiment</span>
      </v-toolbar-title>
      <v-spacer />
      <span>Reunion Registration</span>
      <span class="mx-2">April 22-26, 2020</span>
    </v-app-bar>

    <v-content class="mx-4">
      <v-row justify="center">
        <v-col cols="4">
          <veteran class="fill-height" />
        </v-col>
        <v-col cols="4">
          <events class="fill-height" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <guest />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <total />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<style>
.v-card__title {
  max-height: 55px;
}
.amt {
  font-size: 16px;
}
.total {
  text-align: right;
  min-width: 60px;
}
.v-messages {
  display: none !important;
}
</style>

<script>
import veteran from './components/veteran';
import events from './components/events';
import guest from './components/guest';
import total from './components/total';

export default {
  name: 'App',
  components: {
    veteran,
    events,
    guest,
    total
  },
  data: () => ({
    //
  })
};
</script>
