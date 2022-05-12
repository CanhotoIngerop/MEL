import addallifcsComponent from './addallifcs.vue';
import icon from "../assets/logo-ifc.png"

export default {
    name: "addallifcs",
    addToWindows: ["3d"],
    component: addallifcsComponent,
    button: {
      position: "left",
      content: "free",
      tooltip: "Pour charger tous les ifcs d'un coup",
      keepOpen: false,
      icon: {
        imgUri: icon,
      }
    }
  };