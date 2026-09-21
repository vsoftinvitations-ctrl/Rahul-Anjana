/**
 * Kerala Hindu Wedding Digital Invitation Data Configuration
 * Easily editable for multiple clients. Replace placeholders with client details.
 */

export const weddingData = {
  // Couple Information
  bride: {
    name: "Anjana Menon",
    malayalamName: "അഞ്ജന മേനോൻ",
    qualifications: "B.Tech, MS",
    image: "/assets/bride.jpg",
    bio: "Daughter of our beloved family, embarking on a sacred new chapter of life with grace and devotion.",
    parents: {
      father: "K. P. Radhakrishnan Menon",
      mother: "Geetha Radhakrishnan",
      houseName: "Sreevalsam Tharavadu",
      city: "Payyanur, Kannur, Kerala"
    }
  },
  groom: {
    name: "Rahul Nambiar",
    malayalamName: "രാഹുൽ നമ്പ്യാർ",
    qualifications: "M.Tech, Software Architect",
    image: null,
    bio: "Son of our esteemed family, blessed to begin this divine voyage of love, harmony, and togetherness.",
    parents: {
      father: "M. V. Balachandran Nambiar",
      mother: "Shailaja Balachandran",
      houseName: "Anugraha Illam",
      city: "Thiruvambady, Thrissur, Kerala"
    }
  },

  // Wedding Muhurtham & Event Details
  event: {
    muhurthamMalayalam: "വിവാഹം",
    dateDisplay: "Sunday, 15 February 2027",
    dateMalayalam: "2027 ഫെബ്രുവരി 15, ഞായറാഴ്ച",
    malayalamKollamEra: "1202 കുംഭം 3 (ഉത്രാടം നക്ഷത്രം)", // Traditional Kollam calendar
    timeDisplay: "10:30 AM",
    timeMalayalam: "രാവിലെ 10:30 ന്",
    muhurthamTimeWindow: "Muhurtham: 10:15 AM – 10:55 AM (മേട ലഗ്നത്തിൽ)",
    venueName: "Sree Krishna Kalyana Mandapam",
    venueAddress: "Temple Gate Road, Near Rajarajeshwara Temple",
    city: "Taliparamba, Kannur, Kerala",
    googleMapsUrl: "https://maps.google.com/?q=Taliparamba,+Kannur,+Kerala,+India",
    googleCalendarTitle: "Wedding of Rahul & Anjana",
    googleCalendarDescription: "You are cordially invited with family to celebrate the auspicious Kerala Hindu wedding of Rahul Nambiar & Anjana Menon.",
    // Target ISO date for the live countdown timer (YYYY-MM-DDTHH:mm:ss)
    targetCountdownDate: "2027-02-15T10:30:00"
  },

  // Sacred Ceremonies Timeline
  ceremonies: [
    {
      id: "ceremony-1",
      malayalamTitle: "നിശ്ചയം",
      englishTitle: "Engagement & Welcome",
      time: "10:00 AM",
      timeMalayalam: "രാവിലെ 10:00 ന്",
      description: "Auspicious arrival of families, exchange of bridal garland & elders' blessings.",
      icon: "ring"
    },
    {
      id: "ceremony-2",
      malayalamTitle: "വിവാഹം (താലികെട്ട്)",
      englishTitle: "Wedding Ceremony (Muhurtham)",
      time: "10:30 AM",
      timeMalayalam: "രാവിലെ 10:30 ന്",
      description: "Sacred Thalikettu, exchanging garlands (Varmala) around the glowing Nilavilakku and Sindoor daan.",
      icon: "lamp"
    },
    {
      id: "ceremony-3",
      malayalamTitle: "സദ്യ",
      englishTitle: "Traditional Wedding Feast",
      time: "12:30 PM",
      timeMalayalam: "ഉച്ചയ്ക്ക് 12:30 ന്",
      description: "Grand traditional Kerala vegetarian Sadya served on fresh plantain leaves.",
      icon: "leaf"
    }
  ],

  // Couple Photo Gallery
  galleryImages: [
    {
      src: "/assets/couple.jpg",
      alt: "Couple walking in temple corridor",
      caption: "A journey of eternal companionship"
    },
    {
      src: "/assets/details.jpg",
      alt: "Sacred traditional wedding offerings",
      caption: "Sacred rituals & auspicious beginnings"
    },
    {
      src: "/assets/bride.jpg",
      alt: "Bride in traditional Kasavu saree",
      caption: "The radiant bride adorned in Kerala Kasavu"
    }
  ],

  // Sacred Text & Blessings
  texts: {
    guruVandanam: "ശ്രീ ഗുരുഭ്യോ നമഃ",
    sanskritShloka: [
      "മംഗളം ഭഗവാൻ വിഷ്ണുഃ",
      "മംഗളം ഗരുഡധ്വജഃ",
      "മംഗളം പുണ്ഡരീകാക്ഷഃ",
      "മംഗളായ തനോ ഹരിഃ"
    ],
    elderBlessingsEng: "With the blessings of our elders\nand the grace of the divine",
    twoHeartsEng: "Two hearts,\none beautiful beginning.",
    greetingMalayalam: "വിവാഹ മംഗളാശംസകളോടെ",
    coupleIntroHeading: "Together with our families",
    coupleIntroTagline: "Two souls, one journey, and a lifetime of beautiful moments.",
    weddingTogethernessQuote: "A wedding is the sacred union of two souls and the joyful coming together of two families—bound by love, cherished traditions, and the blessing of a lifetime of togetherness.",
    invitationHeadingMalayalam: "വിവാഹത്തിലേക്ക് സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു",
    invitationSubtitleEng: "With joy in our hearts,\nwe invite you to celebrate our wedding.",
    familyHeading: "With the blessings of our families",
    countdownHeading: "Counting the moments...",
    locationHeadingMalayalam: "വരൂ...\nഈ മംഗള മുഹൂർത്തത്തിന് സാക്ഷികളാകൂ",
    finalBlessingMalayalam: "നിങ്ങളുടെ സാന്നിധ്യവും അനുഗ്രഹങ്ങളും\nഞങ്ങളുടെ പുതിയ ജീവിതത്തിന്റെ\nഏറ്റവും മനോഹരമായ തുടക്കമായിരിക്കും.",
    finalBlessingEnglish: "Your presence and blessings\nwill make our beginning even more beautiful.",
    withLove: "With Love"
  }
};
