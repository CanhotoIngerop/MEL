import AddallifcsComponent from './Addallifcs.vue';
import icon from '../assets/icon.svg';

export default {
  name: 'AddallifcsPlugin', // The name of the plugin
  component: AddallifcsComponent,
  addToWindows: ['3d',],
  button: {
    position: 'left', // Add an icon in the left or right panel. Value can be 'left' or 'right'
    content: 'free',  // How the viewer show the plugin content. Value can be 'panel', 'simple' or 'free'
    keepOpen: true, // If true, the window won't be closed if user click somewhere else.
    tooltip: 'AddallifcsPlugin.tooltip', // Can be an i18n path or a string shown in all languages
    icon: {
      imgUri: "https://github.com/CanhotoIngerop/MEL/blob/VDavin/src/plugins/addallifcs/assets/logo-ifc.png?raw=true",
    },
  },
  i18n: {
    en: {
      tooltip: 'Load all IFC'
    },
    fr: {
      tooltip: 'Charger tous les IFC'
    },
  },
};
