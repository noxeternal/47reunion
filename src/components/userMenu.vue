<template>
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
      <v-btn width="80%" class="ma-3 accent" @click="genPDF()">
        Print
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'App',
  props: { changed: Boolean },
  data: () => ({}),
  methods: {
    save () { this.$emit('save') },
    reset () { this.$emit('reset') },
    genPDF () { this.$emit('genpdf')}
  }
}
</script>