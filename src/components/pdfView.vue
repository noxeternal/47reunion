<template>
  <v-dialog persistent>
    <v-card class="pdf-view">
      <v-card-actions class="accent">
        <v-spacer />
        <v-btn class="warning" @click="pdf = null">Close</v-btn>
        <v-spacer />
      </v-card-actions>
      <v-card-text style="padding: 0">
        <v-layout row>
          <iframe class="pdfview" :src="pdf" />
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
.pdf-view {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
</style>

<script>
export default {
  name: 'App',
  props: ['pdf'],
  methods: {
    close () { this.$emit('close') }
  }
}
</script>