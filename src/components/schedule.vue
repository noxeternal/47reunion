<template>
  <v-card @click="$emit('hide')" class="overflow">
    <v-card-title>
      Schedule of Events: April 21-26, 2020
      <v-spacer />
      <v-btn icon @click="$emit('hide')">
        <v-icon color="red">
          mdi-close-box
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <table>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Event</th>
          <th>Location</th>
        </tr>
        <tr v-for="(item, index) in schedule" :key="index">
          <td>{{ item.day }} {{ item.date }}</td>
          <td class="text-center">
            {{ item.time }}
          </td>
          <td>
            <div v-for="(event, index2) in item.event" :key="index2">
              {{ event }}
            </div>
          </td>
          <td class="text-right">
            {{ item.location }}
          </td>
        </tr>
      </table>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.overflow {
  overflow: scroll;
}
table {
  border-collapse: collapse;
}
th {
  font-weight: bold;
  font-size: 16px
}
td {
  padding: 5px;
  border-bottom: 1px solid;
  vertical-align: text-top;
}
</style>

<script>
export default {
  data: () => ({
    schedule: [
      {
        day: 'Tues',
        date: '21 April',
        time: 'All Day',
        event: ['Advanced Party Arrives'],
        location: 'Columbus Marriott'
      },{
        day: 'Wed',
        date: '22 April',
        time: 'All Day',
        event: ['Registration'],
        location: 'Columbus Marriott'
      },{
        day: '',
        date: '',
        time: 'Open',
        event: [
          'Enjoy Downtown Columbus',
          '(River Walk Stores, Shops, and Dining)'
        ],
        location: 'Columbus, GA'
      },{
        day: '',
        date: '',
        time: 'Evening',
        event: [
          'Open Mixer (Vets, Ad\'s)',
          '50/50 Raffle'
        ],
        location: 'Columbus Marriott'
      },{
        day: 'Thurs',
        date: '23 April',
        time: '0730',
        event: ['Scout Scramble Golf Tournament'],
        location: 'Fort Benning Golf Course'
      },{
        day: '',
        date: '',
        time: '0830',
        event: [
          'Lady\'s Day Enjoy Downtown Columbus',
          '(River Walk Stores, Shops, and Dining)'
        ],
        location: 'Columbus, GA'
      },{
        day: '',
        date: '',
        time: 'Evening',
        event: [
          'Open Mixer (Vets, Ad\'s)',
          '50/50 Raffle'
        ],
        location: 'Columbus Marriott'
      },{
        day: 'Fri',
        date: '24 April',
        time: '0700',
        event: ['Bus leaves for Parade Field at the NIM'],
        location: 'National Infantry Museum'
      },{
        day: '',
        date: '',
        time: '0900',
        event: ['Graduation Ceremony 3rd Bn 47th'],
        location: 'NIM Parade Field'
      },{
        day: '',
        date: '',
        time: '1030',
        event: [
          'Ceremony at the Vietnam Wall Roll Call on Passed Brothers',
          'Cambodian Incursion 50 Year Anniversary Recognition'
        ],
        location: 'Vietnam Wall Ceremony'
      },{
        day: '',
        date: '',
        time: '1130',
        event: [
          'Buses to Consolidated Dining Facility',
          'Enjoy lunch with the troops'
        ],
        location: 'Fort Benning'
      },{
        day: '',
        date: '',
        time: '1300',
        event: ['Weapons Display'],
        location: 'Fort Benning'
      },{
        day: '',
        date: '',
        time: '1500',
        event: ['Buses return to Columbus Marriott and The Hampton Inn'],
        location: 'Columbus Marriott'
      },{
        day: '',
        date: '',
        time: 'Evening',
        event: [
          'Open Mixer (Vets, Ad\'s)', 
          '50/50 Raffle'
        ],
        location: 'Columbus Marriott'
      },{
        day: 'Sat',
        date: '25 April',
        time: 'Morning',
        event: [
          'Enjoy Downtown Columbus',
          '(River Walk Stores, Shops, and Dining)'
        ],
        location: 'Columbus, GA'
      },{
        day: '',
        date: '',
        time: '0930',
        event: [
          'Regimental Meeting',
          'Agenda will be set by HCOR John Ionoff'
        ],
        location: 'Columbus Marriott'
      },{
        day: '',
        date: '',
        time: '1800',
        event: [
          '47th Infantry Regimental Association Dinner',
          'Guest Speaker MG Bill Matz 3rd of 47th',
          'HCOR & HCSM Change of Command',
        ],
        location: 'Columbus Marriott'
      },{
        day: 'Sun',
        date: '26 April',
        time: 'All Day',
        event: ['Checkout/Depart'],
        location: 'Columbus Marriott'
      }
    ]
  })
}
</script>