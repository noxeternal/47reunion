<template>
  <v-card>
    <v-card-title class="secondary">
      <v-icon class="mr-2">
        mdi-wallet-giftcard
      </v-icon>
      Reunion Voluntary Contribution
    </v-card-title>
    <v-card-text class="pt-4">
      <v-text-field label="Refreshments and Snacks" prepend-icon="mdi-currency-usd" v-model="contributionView" @focus="editContribution" @blur="formatContribution" outlined dense class="right-input" />
    </v-card-text>
  </v-card>
</template>

<style scoped>
.right-input >>> input {
  text-align: right;
}
</style>

<script>
import { mapState } from 'vuex'
import { debounce } from 'lodash'
import utils from '../util/util'

export default {
  data: () => ({
    contributionView: ''
  }),
  methods: {
    ...utils,
    editContribution (event) {
      this.contributionView = this.veteran.contribution.toFixed(2)
      const timeout = window.setTimeout(this.selectOnFocus, 50, event)
      // event.target.select()
    },
    formatContribution () {
      this.veteran.contribution = Number(this.contributionView)
      this.contributionView = this.veteran.contribution.toFixed(2)
    }
  },
  computed: {
    ...mapState(['veteran']),
    contribution: {
      get: function () {
        return this.veteran.contribution
      },
      set: function (v) {
        this.veteran.contribution = v
      }
    }
  },
  mounted() {
    this.contributionView = this.contribution.toFixed(2)
  }
}
</script>