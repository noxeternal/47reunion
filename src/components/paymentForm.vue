<template>
  <v-card>
    <v-card-text class="text-center">
      <div>The payment feature is not yet online. Please check back soon.</div>
      <v-btn class="accent" @click="close()">Close</v-btn>
      <!-- <iframe src="http://dev.vm:3100" class="payment-form" scrolling="no" /> -->
    </v-card-text>
  </v-card>
</template>

<style>
.payment-form {
  border: 0;
  margin: 0;
  padding: 0;
  height: 480px;
  width: 435px;
  overflow: hidden;
}
</style>

<script>
export default {
  methods: {
    close () { this.$emit('close') }
  }
 }
</script>