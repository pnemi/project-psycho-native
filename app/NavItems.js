import NewGame from "../components/NewGame";
import Presets from "../components/Presets";
import Rules from "../components/Rules";
import Roles from "../components/Roles";

export default NavItems = [
  {
    key: "new-game",
    viewTitle: "Nová hra",
    navTitle: "Nová hra",
    icon: {
      ios: "ios-home",
      ios_outline: "ios-home-outline",
      android: "md-home"
    },
    component: NewGame,
    selected: true
  },
  {
    key: "presets",
    viewTitle: "Předvolby",
    navTitle: "Předvolby",
    icon: {
      ios: "ios-options",
      ios_outline: "ios-options-outline",
      android: "md-options"
    },
    component: Presets,
    selected: false
  },
  {
    key: "roles",
    viewTitle: "Popis rolí",
    navTitle: "Popis rolí",
    icon: {
      ios: "ios-man",
      ios_outline: "ios-man-outline",
      android: "md-man"
    },
    component: Rules,
    selected: false
  },
  {
    key: "rules",
    viewTitle: "Pravidla",
    navTitle: "Pravidla",
    icon: {
      ios: "ios-information-circle",
      ios_outline: "ios-information-circle-outline",
      android: "md-information-circle"
    },
    component: Rules,
    selected: false
  }
];
