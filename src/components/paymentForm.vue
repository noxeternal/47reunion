<template>
  <div>
    The payment feature is not yet online. Please check back soon.<br>
    <v-btn class="accent" @click="$emit('hideForm')">Close</v-btn>
    <!-- <iframe src="http://dev.vm:3100" class="payment-form" scrolling="no" /> -->
  </div>
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
