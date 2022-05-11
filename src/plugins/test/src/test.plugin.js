import TestComponent from './Test.vue';
import icon from '../assets/icon.svg';

export default {
  name: 'TestPlugin', // The name of the plugin
  component: TestComponent,
  addToWindows: ['3d',],
  button: {
    position: 'left', // Add an icon in the left or right panel. Value can be 'left' or 'right'
    content: 'simple',  // How the viewer show the plugin content. Value can be 'panel', 'simple' or 'free'
    keepOpen: true, // If true, the window won't be closed if user click somewhere else.
    tooltip: 'TestPlugin.tooltip', // Can be an i18n path or a string shown in all languages
    icon: {
      imgUri: icon,
    },
  },
  i18n: {
    en: {
      tooltip: 'Test is awesome!'
    },
    fr: {
      tooltip: 'Test est génial !'
    },
  },
};
