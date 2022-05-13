import Bcf_buttonComponent from './Bcf_button.vue';
import icon from '../assets/icon.svg';

export default {
  name: 'Bcf_buttonPlugin', // The name of the plugin
  component: Bcf_buttonComponent,
  addToWindows: ['3d',],
  button: {
    position: 'left', // Add an icon in the left or right panel. Value can be 'left' or 'right'
    content: 'simple',  // How the viewer show the plugin content. Value can be 'panel', 'simple' or 'free'
    keepOpen: false, // If true, the window won't be closed if user click somewhere else.
    tooltip: 'Bcf_buttonPlugin.tooltip', // Can be an i18n path or a string shown in all languages
    icon: {
      imgUri: icon,
    },
  },
  i18n: {
    en: {
      tooltip: 'Bcf_button is awesome!'
    },
    fr: {
      tooltip: 'Bcf_button est génial !'
    },
  },
};
