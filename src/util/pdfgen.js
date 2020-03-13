import Axios from "axios"
import config from './config.json'

export default {
  async genPDF () {
    this.loadingPDF = true
    const records = [{
      form: this.buildMailer(this.$store.state)
    }]
    const { data } = await this.$axios.post('https://pdf.47inf.org', {
      config,
      records
    },{
      responseType: 'blob'
    })
    this.pdf = URL.createObjectURL(data)
    this.loadingPDF = false
  },
  buildMailer (fd) {
    const data = {
      lastName: fd.veteran.lastName,
      firstName: fd.veteran.firstName,
      badgeName: fd.veteran.badgeName,
      units: Object.values(fd.veteran.units).join(' '),
      dates: fd.veteran.dates.map(d => `${d.fromMonth} ${d.fromYear} - ${d.toMonth} ${d.toYear}`).join(', '),
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      homePhone: '',
      cellPhone: '',
      emailAddress: '',
      ...genEventData('reunionReg', 'Reunion Registration', fd),
      ...genEventData('transMisc', 'Transportation & Misc', fd),
      ...genEventData('golfScramble', 'Golf Scramble', fd),
      ...genEventData('poolsideCookout', 'Poolside Cookout', fd),
      ...genEventData('dinner', 'Regimental Dinner', fd),
      volContributionQty: '',
      volContributionBox: '',
      volContributionAmount: '',
      ...genGuest(fd.guests[0]),
      otherGuests: fd.guests.slice(1).map(genGuest)
    }
    
    data.totalAmount = data.reunionRegAmount + data.transMiscAmount + data.golfScrambleAmount + data.poolsideCookoutAmount + data.dinnerAmount
    return data
  }
}

function genGuest(guest = { events: [] }) {
  return {
    guestBadgeName: guest.badge || '',
    guestName: guest.name || '',
    reunionReg: guest.events.includes('Reunion Registration') ? 'X' : '',
    transMisc: guest.events.includes('Transportation & Misc') ? 'X' : '',
    golfScramble: guest.events.includes('Golf Scramble') ? 'X' : '',
    poolsideCookout: guest.events.includes('Poolside Cookout') ? 'X' : '',
    regimentalDinner: guest.events.includes('Regimental Dinner') ? 'X' : '',
  }
}

function genEventData (pre, event, { events, veteran: vet, guests }) {
  const vetAttending = vet.events.includes(event)
  const qty = guests.filter(g => g.events.includes(event) || pre === 'reunionReg').length
  const box = vetAttending || pre === 'reunionReg'
  const evt = events.find(e => e.name === event) || { amt: 25 }
  const amount = evt.amt * (qty + (box ? 1 : 0))
  return {
    pre: box ? 'X' : '',
    [pre + 'Qty']: qty + '',
    [pre + 'Box']: box ? 'X' : '',
    [pre + 'Amount']: amount,
  }
} 

