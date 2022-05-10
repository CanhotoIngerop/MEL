import addallifcsComponent from './addallifcs.vue';

export default {
    name: "addallifcs",
    addToWindows: ["3d"],
    component: addallifcsComponent,
    button: {
      position: "left",
      content: "free",
      tooltip: "addallifcs, pour charger tous les ifcs d'un coup",
      keepOpen: true,
    }
  };