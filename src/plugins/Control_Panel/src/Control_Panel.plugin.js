import Control_PanelComponent from './Control_Panel.vue';
import icon from '../assets/icon.svg';

export default {
  name: 'Control_PanelPlugin', // The name of the plugin
  component: Control_PanelComponent,
  addToWindows: ['3d',],
  button: {
    position: 'left', // Add an icon in the left or right panel. Value can be 'left' or 'right'
    content: 'panel',  // How the viewer show the plugin content. Value can be 'panel', 'simple' or 'free'
    keepOpen: true, // If true, the window won't be closed if user click somewhere else.
    tooltip: 'Control_PanelPlugin.tooltip', // Can be an i18n path or a string shown in all languages
    icon: {
      imgUri: "https://imgs.search.brave.com/LIIK3TawOwdGRV7YT1RUDBtVsqgUFlMkY8Ac943Is3Y/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tYXhj/ZG4uaWNvbnM4LmNv/bS9TaGFyZS9pY29u/L0R1c2tfV2lyZWQv/UHJvZ3JhbW1pbmcv/Y29udHJvbF9wYW5l/bDE2MDAucG5n",
    },
  },
  i18n: {
    en: {
      tooltip: 'Control Panel'
    },
    fr: {
      tooltip: 'Tableau de bord'
    },
  },
};
