import NewGame from "../components/NewGame";
import Presets from "../components/Presets";
import Rules from "../components/Rules";
import Roles from "../components/Roles";

export default NavItems = [
  {
    key: "new-game",
    viewTitle: "Nová hra",
    navTitle: "Nová hra",
    component: NewGame,
    selected: true
  },
  {
    key: "presets",
    viewTitle: "Předvolby",
    navTitle: "Předvolby",
    component: Presets,
    selected: false
  },
  {
    key: "rules",
    viewTitle: "Pravidla",
    navTitle: "Pravidla",
    component: Rules,
    selected: false
  },
  {
    key: "roles",
    viewTitle: "Popis rolí",
    navTitle: "Popis rolí",
    component: Rules,
    selected: false
  }
];
