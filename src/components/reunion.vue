<template>
  <v-card class="ma-2">
    <v-card-title><v-icon class="mr-2">mdi-check-bold</v-icon>Reunion Attendance</v-card-title>
    <v-card-text>
      <v-radio-group v-model="reunion">
        <v-radio v-for="reg in reunion" :key="reg.name" :label="`${reg.name} - $${reg.amt.toFixed(2)}`" :value="reg.amt"></v-radio>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    reunion: [
      { name: 'Single Registration', amt: 25 },
      { name: 'Group Registration', amt: 40 }
    ]
  })
}
</script>