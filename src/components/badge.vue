<template>
  <v-card>
    <v-card-title class="secondary">
      <v-icon class="mr-2">
        mdi-account-badge-horizontal
      </v-icon>
      Badge
    </v-card-title>
    <v-card-text>
      <v-sheet light elevation="2" class="fixSheet mt-2 align-center">
        <v-row>
          <v-col cols="3">
            <v-img src="img/47logo.png" contain max-height="55" class="ml-6" />
          </v-col>
          <v-col cols="6">
            <div class="text-center subtitle-1">
              47<sup>th</sup> Infantry Regiment
            </div>
            <div class="text-center subtitle-1">
              2022 Reunion
            </div>
          </v-col>
          <v-col cols="3">
            <v-img src="img/47logo.png" contain max-height="55" class="mr-6" />
          </v-col>
        </v-row>
        <div class="text-center">
          <div class="title font-weight-black">
            {{ veteran.badgeName || (`${veteran.firstName || '&nbsp;'} ${veteran.lastName || '&nbsp;'}`) }}
          </div>
          <div class="font-weight-black">
            {{ displayUnits || '&nbsp;' }}
          </div>
          <div class="font-weight-black mb-2">
            {{ displayDates }}
          </div>
          <div>{{ veteran.homeTown || '&nbsp;' }}</div>
          <div class="pb-2">
            {{ displayEvents || '&nbsp;' }}
          </div>
        </div>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.fixSheet {
  border-radius: 4px;
  max-width: 375px;
  margin: auto;
}
</style>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  methods: {},
  computed: {
    ...mapState(['veteran', 'events']),
    displayUnits () {
      if (!!this.veteran.other.length) {
        return this.veteran.other
      }
      const rval = []
      if (Object.keys(this.veteran.units).length) {
        Object.keys(this.veteran.units).reduce((s, k) => rval.push(...this.veteran.units[k]), [])
        return rval.join(' ')
      }

      return null;
    },
    displayDates () {
      const rval = this.veteran.dates.reduce((s, d) => `${s}${d.fromMonth} ${d.fromYear}-${d.toMonth} ${d.toYear}, `, '')
      return rval.substr(0, rval.length-2)
    },
    displayEvents () {
      const rval = []
      if (this.veteran.events.length) {
        this.events.forEach(e => {
          if (this.veteran.events.find(event => e.name == event )) {
            rval.push(e.short)
          }
        })
        return rval.join(', ')
      }
      
      return null;
    }
  }
}
</script>
