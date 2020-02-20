<template>
  <div>
    <v-card>
      <v-card-title class="accent text-center">
        <v-icon class="mr-2">
          mdi-menu
        </v-icon>
        Menu
      </v-card-title>
      <v-card-text class="text-center">
        <v-btn width="80%" :disabled="!changed" class="ma-3 warning" @click="save()">
          Save
        </v-btn>
        <v-btn width="80%" :disabled="!changed" class="ma-3 accent" @click="reset()">
          Reset
        </v-btn>
        <v-btn width="80%" class="ma-3 accent" :loading="loadingPDF" @click="genPDF()">
          Print
        </v-btn>
        <v-btn width="80%" class="ma-3 accent" @click="makePayment()">
          Pay
        </v-btn>
      </v-card-text>
    </v-card>

    <v-overlay opacity="0.90" :value="showPayment">
      <payment-form @hideform="showPayment=false" />
    </v-overlay>
  </div>
</template>

<script>
import paymentForm from '@/components/paymentForm'

export default {
  name: 'App',
  components: {
    paymentForm
  },
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
    makePayment () { this.showPayment = true },
    handleMessage (s) { 
      switch (s.data)   {
        case 'closePayment':
          this.showPayment = false;
          break;
        default:
      }
    }
  },
  created () {
    window.addEventListener('message', this.handleMessage)
  },
  destroyed () {
    window.removeEventListener('message', this.handleMessage)
  }
}
</script>
