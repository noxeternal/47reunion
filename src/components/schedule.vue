<template>
  <v-card @click="$emit('hide')" class="overflow">
    <v-card-title>
      Schedule of Events
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
        date: '26 April',
        time: 'All Day',
        event: ['Advanced Party Arrives'],
        location: 'Columbus Marriott'
      },{
        day: 'Wed',
        date: '27 April',
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
          'Open Mixer (Vets, Guests, AD\'s)',
          '50/50 Raffle'
        ],
        location: 'Columbus Marriott'
      },{
        day: 'Thurs',
        date: '28 April',
        time: '0800',
        event: [
          'Bus trip to the National Infantry Museum and',
          'Ceremony at the Viet Nam Wall for our Roll Call'
        ],
        location: 'National Infantry Museum'
      },{
        day: '',
        date: '',
        time: '1200',
        event: [
          'Fort Benning and Lunch with the Troops is a',
          'work in progress. TBA! (Photo ID & wristband req\'d)'
        ],
        location: 'Fort Benning'
      },{
        day: '',
        date: '',
        time: 'Evening',
        event: [
          'Open Mixer (Vets, AD\'s)',
          '50/50 Raffle'
        ],
        location: 'Columbus Marriott'
      },{
        day: 'Fri',
        date: '29 April',
        time: 'Open',
        event: ['More sightseeing - Check out the Visitor\'s Center'],
        location: 'Columbus, GA'
      },{
        day: '',
        date: '',
        time: '0800',
        event: [
          'Scout Scramble Golf Tournament on the',
          'Fort Benning GOlf Course.'],
        location: 'Fort Benning'
      },{
        day: '',
        date: '',
        time: '1800',
        event: [
          'Pool Party - Enjoy Buffet, music, and dancing. (wristband req\'d)',
          '50/50 Raffle Auction'
        ],
        location: 'Columbus Marriott'
      },{
        day: 'Sat',
        date: '30 April',
        time: 'Open',
        event: ['Enjoy Columbus'],
        location: 'Columbus, GA'
      },{
        day: '',
        date: '',
        time: '1000',
        event: ['Regimental Meeting - All are encourged to attend.'],
        location: 'Columbus Marriott'
      },{
        day: '',
        date: '',
        time: '1800',
        event: ['Social Hour - Cash Bar'],
        location: 'Columbus Marriott'
      },{
        day: '',
        date: '',
        time: '1900',
        event: [
          'Regimental Dinner - Assigned Seating',
          'Guest Speaker MG David Zabecki'
        ],
        location: 'Ironworks Convention Center'
      },{
        day: 'Sun',
        date: '1 May',
        time: 'All Day',
        event: ['Checkout/Depart - Be Safe!'],
        location: 'Columbus Marriott'
      }
    ]
  })
}
</script>