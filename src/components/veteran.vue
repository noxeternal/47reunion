<template>
  <div>
    <v-card>
      <v-card-title class="secondary">
        <v-icon class="mr-2">
          mdi-account-edit
        </v-icon>Veteran Information
        <v-spacer />
        <span class="caption">({{ veteran.memberId }})</span>
      </v-card-title>
      <v-card-text class="pt-4">
        <v-text-field label="First Name" v-model="veteran.firstName" outlined dense />
        <v-text-field label="Last Name" v-model="veteran.lastName" outlined dense />
        <v-text-field label="Home town" v-model="veteran.homeTown" outlined dense />
        <v-text-field label="Name for Badge" v-model="veteran.badgeName" outlined dense />
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title class="mt-2 secondary">
        <v-icon class="mr-2">
          mdi-account-details
        </v-icon>Details*
        <v-spacer />
        <div class="tinyText mb-1">
          *check all that apply
        </div>
      </v-card-title>
      <v-card-text class="pt-4">
        <template v-for="(option, index) in details">
          <v-row :key="index" class="font-weight-bold ul">
            {{ index }}
          </v-row>
          <v-row :key="index+'_'" justify="space-around">
            <v-checkbox multiple :disabled="!!veteran.other.length" class="tight" v-for="(o, i) in option" v-model="veteran.units[index]" :id="index+'-'+o" :name="index+'-'+o" :key="i" :value="o" :label="o" />
          </v-row>
        </template>
      
        <v-row class="ul font-weight-bold">
          Or other
        </v-row>
        <v-row>
          <v-text-field v-model="veteran.other" outlined dense />
        </v-row>
        <v-row class="font-weight-bold pt-2 ul">
          Dates in Country
        </v-row>

        <template v-for="(date, index) in veteran.dates">
          <v-row :key="index">
            <v-col cols="2" class="font-weight-bold text-right">
              From:
            </v-col>
            <v-col cols="4">
              <v-select :items="months" v-model="veteran.dates[index].fromMonth" label="Month" outlined dense />
            </v-col>
            <v-col cols="4">
              <v-select :items="years" v-model="veteran.dates[index].fromYear" label="Year" outlined dense />
            </v-col>
            <v-col cols="2">
              <v-icon v-if="veteran.dates.length>1" color="red" @click="dropDates(index)">
                mdi-trash-can
              </v-icon>
            </v-col>
          </v-row>
          <v-row :key="index+'_'">
            <v-col cols="2" class="font-weight-bold text-right">
              To:
            </v-col>
            <v-col cols="4">
              <v-select :items="months" v-model="veteran.dates[index].toMonth" label="Month" outlined dense />
            </v-col>
            <v-col cols="4">
              <v-select :items="years" v-model="veteran.dates[index].toYear" label="Year" outlined dense />
            </v-col>
          </v-row>
        </template>

        <v-flex class="text-center pointer" @click="addDates()">
          <v-icon small class="mb-1">
            mdi-plus-box
          </v-icon> Add another date range
        </v-flex>
      </v-card-text>
    </v-card>
  </div>
</template>

<style>
.tinyText {
  display: flex;
  align-self: flex-end;
  font-size: 12px;
  line-height: 1;
}
</style>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  data: () => ({}),
  methods: {
    addDates () { this.veteran.dates.push({fromMonth:'Jan', fromYear:'65', toMonth: 'Jan', toYear: '65'})},
    dropDates (i) { this.veteran.dates.pop() }
  },
  computed: {
    ...mapState(['veteran','details']),
    months: () => Array.from({length: 12}, (v, k) => moment(`${k + 1}/1/2020`).format('MMM')),
    years: () => Array.from({length: 8}, (v, k) => k + 65)
  },
  async mounted () {
    // const member_nbr = this.$cookies.get('member_nbr')
    // const user = await this.$api.auth.getUser(member_nbr)
    // this.veteran.firstName = user.firstName
    // this.veteran.lastName = user.lastName
  }

};
</script>
