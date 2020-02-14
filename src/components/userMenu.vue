<template>
  <div>
    <v-card>
      <v-card-title class="accent text-center">
        <v-icon class="mr-2">
        mdi-menu</v-icon>
        Menu
      </v-card-title>
      <v-card-text class="text-center">
        <v-btn width="80%" :disabled="!changed" class="ma-3 warning" @click="save()">
          Save
        </v-btn>
        <v-btn width="80%" :disabled="!changed" class="ma-3 accent" @click="reset()">
          Reset
        </v-btn>
        <v-btn width="80%" class="ma-3 accent" :loading="loadingPDF" @click="genPDF()" >
          Print
        </v-btn>
        <v-btn width="80%" class="ma-3 accent" @click="makePayment()" >
          Pay
        </v-btn>
      </v-card-text>
    </v-card>

    <v-overlay opacity="0.90" :value="showPayment">
      <v-card>
        <v-card-text class="font-weight-bold">
          Payments are currently offline. Once the system is updated, all users who have registered will receive a notification email.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="showPayment=false" class="accent">Close</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: { 
    changed: Boolean,
    loadingPDF: Boolean
   },
  data: () => ({
    showPayment: false
  }),
  methods: {
    save () { this.$emit('save') },
    reset () { this.$emit('reset') },
    genPDF () { this.$emit('genpdf') },
    makePayment () { this.showPayment = true }
  }
}
</script>