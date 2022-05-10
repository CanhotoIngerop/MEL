import ButtonSelectAllComponent from './ButtonSelectAll.vue';
import icon from '../assets/icon.svg';
import {
  BIMDataIcon,
  BIMDataPaginatedList,
  BIMDataButton,
} from "@bimdata/design-system/components.js";

export default {
  name: 'ButtonSelectAllPlugin', // The name of the plugin
  component: ButtonSelectAllComponent,
  addToWindows: ['3d',],
  button: {
    position: 'left', // Add an icon in the left or right panel. Value can be 'left' or 'right'
    content: 'free',  // How the viewer show the plugin content. Value can be 'panel', 'simple' or 'free'
    keepOpen: false, // If true, the window won't be closed if user click somewhere else.
    tooltip: 'ButtonSelectAllPlugin.tooltip', // Can be an i18n path or a string shown in all languages
    
    icon: {
      imgUri: icon,
    },
  },
  i18n: {
    en: {
      tooltip: 'Ingérop Addons'
    },
    fr: {
      tooltip: 'Ajout Ingérop'
    },
  },
};
