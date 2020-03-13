<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        47<sup>th</sup> Infantry Regiment Association - 2020 Reunion
      </v-toolbar-title>
      <v-spacer />
      <div>
        <v-icon class="mr-1">
          mdi-view-list
        </v-icon>
        <span class="ul pointer" @click="showEvents=!showEvents">View Schedule of Events</span><br>
        <v-icon class="mr-1">
          mdi-account-group
        </v-icon>
        <span class="ul pointer" @click="showAttendance=true">View "Who's Going"</span>
      </div>
    </v-app-bar>

    <v-content :class="{nopad: !changed}" class="floaty">
      <v-row class="warning" justify="center">
        <v-col cols="6" class="text-center">
          <div class="headline">
            Your information has not been saved
          </div>
        </v-col>
        <!--v-col cols="1">
          <v-btn class="primary" @click="save()">
            Save
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn class="accent" @click="load()">
            Reset
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn class="accent" @click="genPDF()">
            PDF
          </v-btn>
        </v-col -->
      </v-row>
    </v-content>

    <v-content :class="{dblpad: changed}">
      <v-overlay v-if="showEvents" opacity="1">
        <schedule class="schedule" :show="showEvents" @hide="showEvents=false" max-height="90vh" />
      </v-overlay>
      <v-row justify="center">
        <v-col cols="4">
          <veteran />
        </v-col>
        <v-col cols="4">
          <events />
          <contribution class="mt-2" />
          <badge class="mt-2" />
        </v-col>
        <v-col cols="2">
          <user-menu :changed="changed" :loadingPDF="loadingPDF" @reset="reset()" @save="save()" @genpdf="genPDF()" />
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
    
    <pdf-view :pdf="pdf" v-on:close="pdf=null" />

    <v-overlay opacity="0.90" :value="showAttendance">
      <attendance v-on:close="showAttendance=false" class="fullView" />
    </v-overlay>

  </v-app>
</template>

<style>
.ul{
  text-decoration: underline;
}
.nopad { 
  padding: 0!important; 
}
.dblpad { 
  padding-top: 128px!important; 
}
.floaty {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index:3;
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
iframe.pdfview,
.fullView {
  height: calc(100vh - 52px);
  border: 0px;
  flex: 1;
}
</style>

<script>
import { mapState } from 'vuex'
import _  from 'lodash'
import pdfgen from './util/pdfgen'
import { veteran, events, guest, total, schedule, badge, userMenu, pdfView, attendance, contribution } from './components';


export default {
  name: 'App',
  components: {
    veteran,
    events,
    guest,
    total,
    schedule,
    badge, 
    userMenu,
    pdfView,
    attendance,
    contribution
  },
  data: () => ({
    showOverlay: false,
    showLoading: false,
    showEvents: false,
    showAttendance: false,
    changed: false,
    member_nbr: 0,
    _TEST_DATA_: {},
    pdf: null,
    loadingPDF: false
  }),
  methods: {
    ...pdfgen,
    async save () { 
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
        await this.$api.records.save(record)
        this.showLoading = false
        this.showOverlay = false
        this.changed = false
      } catch (err) {
        if(err) console.log(err)
      }
    },
    async reset () {
      this.showOverlay = true
      this.showLoading = true
      const record = await this.$api.records.get(this.member_nbr)
      if (record && record.veteran && record.guests) {
        this.$store.commit('LOAD_RECORD', record)
      }
      sessionStorage.record = JSON.stringify(record)
      this.showLoading = false
      this.showOverlay = false
      this.changed = false
    }
  },
  async mounted () {
    if (this.$cookies.get('member_nbr')) {
      this.member_nbr = this.$cookies.get('member_nbr')
      this.token = await this.$api.auth.login(this.member_nbr)
      const user = await this.$api.auth.getUser(this.member_nbr)
      this.veteran.firstName = user.firstName
      this.veteran.lastName = user.lastName
      this.reset()
    } else {
      if(process.env.NODE_ENV !== 'development')
        window.location.replace('https://47inf.org/login.php?mode=registration')
      else
        console.log('redirect!')
    }
  },
  computed: {
    ...mapState(['veteran','guests'])
  },
  watch: {
    veteran: {
      handler: function (v1, v2) { this.changed = true },
      deep: true
    },
    guests: {
      handler: function (v1, v2) { this.changed = true },
      deep: true
    }
  }
}
</script>
