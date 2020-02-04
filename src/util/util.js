export default {
  buildMailer: (fd) => {
    mailer = {
      lastName: fd.veteran.lastName,
      firstName: fd.veteran.firstName,
      badgeName: fd.veteran.badgeName,
      units: unitString(fd.veterans.units),
      
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      homePhone: '',
      cellPhone: '',
      emailAddress: '',

      reunionRegQty: '',
      reunionRegBox: '',
      reunionRegAmount: '',

      transMiscQty: '',
      transMiscBox: '',
      transMiscAmount: '',

      golfScrambleQty: '',
      golfScrambleBox: '',
      golfScrambleAmount: '',
      
      poolsideCookoutQty: '',
      poolsideCookoutBox: '',
      poolsideCookoutAmount: '',
      
      dinnerQty: '',
      dinnerBox: '',
      dinnerAmount: '',
      
      volContributionQty: '',
      volContributionBox: '',
      volContributionAmount: '',
      
      totalAmount: '',

      guestBadgeName: '',
      guestName: '',
      regimentalDinner: '',
      transportationEtc: '',
      dates: '',
      poolsideCookout: '',
      golfScramble: '',

      otherGuests: [
        {
          guestBadgeName: '',
          guestName: '',
          regimentalDinner: '',
          transportationEtc: '',
          dates: '',
          poolsideCookout: '',
          golfScramble: ''  
        }
      ]

  }
}

function unitString (d) {
  let o = ''
  for (const i in d) {
    o = o + d[i].join(' ')
  }
  return o
}