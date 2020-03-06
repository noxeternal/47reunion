<template>
  <v-dialog persistent value="registrations">
    <v-card>
        <v-simple-table :height="ih" :fixed-header="true">
          <thead>
            <tr>
              <th colspan="2" class="pt-2"><v-text-field label="Badge (Search)" v-model="search.badge" outlined dense/></th>
              <th class="pt-2"><v-text-field label="Name (Search)" v-model="search.name" outlined dense/></th>
              <th class="pt-2"><v-text-field label="Events (Search)" v-model="search.events" outlined dense/></th>
              <th width="1"><v-btn @click="close()" class="accent">Close</v-btn></th>
            </tr>
          </thead>
          <template v-for="(reg, i) in displayReg">
            <tr :key="i" class="veteran" v-if="reg.veteran.events.length">
              <td colspan="2">{{ reg.veteran.badgeName || `${reg.veteran.firstName} ${reg.veteran.lastName}` }}</td>
              <td>{{ `${reg.veteran.lastName}, ${reg.veteran.firstName}` }}</td>
              <td colspan="2">{{ reg.veteran.events }}</td>
            </tr>
            <template v-for="guest in reg.guests">
              <tr :key="guest.index" class="guests">
                <td></td>
                <td class="text-right">Guest:</td>
                <td>{{ guest.name }}</td>
                <td colspan="2">{{ guest.events }}</td>
              </tr>
            </template>
          </template>
        </v-simple-table>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>

<script>
export default {
  data: () => ({
    registrations: null,
    search: {
      badge: '',
      name: '',
      events: ''
    }
  }),
  methods: {
    close () { this.$emit('close') }
  },
  mounted: async function () {
    const registrations = await this.$api.records.whosGoing()
    
    registrations.forEach((reg, i) => {
      if (reg.veteran.events)
        registrations[i].veteran.events = reg.veteran.events.join(", ")
      if (reg.guests)
        reg.guests.forEach((guest, ii) => {
          if(guest.events)
            registrations[i].guests[ii].events = guest.events.join(", ")
        })
    })

    registrations.sort(function (a, b) {
      const sortA = a.veteran.lastName.toLowerCase()
      const sortB = b.veteran.lastName.toLowerCase()
      if (sortA < sortB) return -1
      if (sortA > sortB) return 1
      return 0
    })
    this.registrations = registrations
  },
  computed: {
    ih () { return (window.innerHeight*.9) },
    displayReg() {
      if(!this.registrations) return null

      const o = []
      this.registrations.forEach(function (reg, i) {
        const v = reg.veteran
        if (
          (this.search.badge == '' || v.badgeName.toLowerCase().includes(this.search.badge.toLowerCase())) &&
          (this.search.name == '' || (v.firstName.toLowerCase().includes(this.search.name.toLowerCase()) || v.lastName.toLowerCase().includes(this.search.name.toLowerCase()))) &&
          (this.search.events == '' || v.events.toLowerCase().includes(this.search.events.toLowerCase())) 
        ) {
          o.push(reg)
        }        
      }, this)

      return o
    }
  }
}
</script>