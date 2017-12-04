const Team = require('./Team').Team;

exports.ROLES = {
  // Pátrací Team
  director: {
    name: {
      cs: "Ředitel psychiatrické léčebny",
      en: "Psychiatric Hospital Director"
    },
    team: Team.INVESTIGATION
  },
  nurse: {
    name: {
      cs: "Staniční sestra",
      en: "Head Nurse"
    },
    team: Team.INVESTIGATION
  },
  detective: {
    name: {
      cs: "Detektiv – Vedoucí pátrání",
      en: "Detective – Head of Investigation"
    },
    team: Team.INVESTIGATION
  },
  // Team Psycho
  psycho: {
    name: {
      cs: "Psycho",
      en: "Psycho"
    },
    team: Team.PSYCHO
  },
  // Ostatní uprchlí pacienti
  addict: {
    name: {
      cs: "Drogově závislý",
      en: "Drug Addict"
    },
    team: Team.OTHER
  },
  pathologist: {
    name: {
      cs: "Patolog",
      en: "Pathologist"
    },
    team: Team.OTHER
  },
  anesthesiologist: {
    name: {
      cs: "Šílený anesteziolog",
      en: "Crazy Anesthesiologist"
    },
    team: Team.OTHER
  },
  // Civilisté
  doctor: {
    name: {
      cs: "Doktor",
      en: "Doctor"
    },
    team: Team.CIVILIAN
  },
  survivor: {
    name: {
      cs: "Přeživší",
      en: "Survivor"
    },
    team: Team.CIVILIAN
  },
  necro: {
    name: {
      cs: "Člověk trpící nekrofobii",
      en: "Person Suffering From Necrofobia"
    },
    team: Team.CIVILIAN
  },
  // Neutrální
  bomber: {
    name: {
      cs: "Atentátník",
      en: "Suicide Bomber"
    },
    team: Team.NEUTRAL
  },
  dealer: {
    name: {
      cs: "Obchodník na černém trhu",
      en: "Black Market Dealer"
    },
    team: Team.NEUTRAL
  }
};
