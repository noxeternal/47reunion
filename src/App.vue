<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline" @click="dumpStore()">
        47<sup>th</sup> Infantry Regiment Association
      </v-toolbar-title>
      <v-spacer />
      <div>
        <!-- <span>Reunion Registration</span><span>April 22-26, 2020</span><br> -->
        <v-icon class="mr-1">
          mdi-view-list
        </v-icon>
        <span class="ul pointer" @click="showEvents=!showEvents">View Schedule of Events</span><br>
        <v-icon class="mr-1">
          mdi-account-group
        </v-icon>
        <span class="ul pointer" @click="showAttendance=!showAttendance">View "Who's Going"</span>
      </div>
    </v-app-bar>

    <v-content>
      <v-overlay v-if="showEvents" opacity="1">
        <schedule class="schedule" :show="showEvents" @hide="showEvents=false" max-height="90vh" />
      </v-overlay>
      <v-row v-if="changed" class="warning" justify="center">
        <v-col cols="6" class="text-center">
          <div class="headline">
            This information has not been saved
          </div>
        </v-col>
        <v-col cols="1">
          <v-btn class="primary" @click="save()">
            Save
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn class="accent" @click="load()">
            Load
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4">
          <veteran />
        </v-col>
        <v-col cols="4">
          <events />
          <badge class="mt-2" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <guest />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <total />
        </v-col>
      </v-row>
    </v-content>
    <v-overlay opacity="0.90" :value="showOverlay">
      <v-progress-circular v-if="showLoading" indeterminate :width="15" :size="150" color="accent" />
    </v-overlay>
  </v-app>
</template>

<style>
.ul{
  text-decoration: underline;
}
.pointer {
  cursor: pointer;
}
.tight{
  margin: 0!important;
}
.schedule {
  max-height: 90vh;
}
.v-card__title {
  padding: 5px 10px 3px;
}
.amt {
  font-size: 16px;
}
.total {
  text-align: right;
  min-width: 60px;
}
.v-messages {
  display: none !important;
}
.v-text-field__details {
  display: none;
}

</style>

<script>
import veteran from './components/veteran';
import events from './components/events';
import guest from './components/guest';
import total from './components/total';
import schedule from './components/schedule';
import badge from './components/badge';

export default {
  name: 'App',
  components: {
    veteran,
    events,
    guest,
    total,
    schedule,
    badge
  },
  data: () => ({
    showOverlay: false,
    showLoading: false,
    showEvents: false,
    changed: true,
    member_nbr: 0,
    _TEST_DATA_: {}
  }),
  methods: {
    dumpStore () {console.log({veteran: this.$store.state.veteran, guests: this.$store.state.guests})},
    showAttendance () {},
    save () { 
      this.showOverlay = true
      this.showLoading = true
      const record = {
        memberID: this.member_nbr,
        veteran: this.$store.state.veteran,
        guests: this.$store.state.guests
      }
      this._TEST_DATA_ = record
      
      // TODO: redo try/catch for async/await
      try {
        this.$api.records.save(record)
      } catch (err) {
        if(err) console.log(err)
      }
      setTimeout(() => { this.showLoading = false }, 1000)
      setTimeout(() => { this.showOverlay = false }, 1000)
    },
    async load () {
      const record = await this.$api.records.get(this.member_nbr)
      if (record.veteran && record.guests) {
        this.$store.commit('LOAD_RECORD', record)
      } else {

      }

    }
  },
  created () {
  },
  async mounted () {
    if (this.$cookies.get('member_nbr')) {
      this.member_nbr = this.$cookies.get('member_nbr')
      this.token = await this.$api.auth.login(this.member_nbr)
      const record = await this.$api.records.get(this.member_nbr)
      this.$store.commit('LOAD_RECORD', record)
    }
  }
};
</script>
