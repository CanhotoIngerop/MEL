import SimilarBCF_ButtonComponent from './SimilarBCF_Button.vue';
import icon from '../assets/icon.svg';

export default {
  name: 'SimilarBCF_ButtonPlugin', // The name of the plugin
  component: SimilarBCF_ButtonComponent,
  addToWindows: ['3d',],
  button: {
    position: 'left', // Add an icon in the left or right panel. Value can be 'left' or 'right'
    content: 'simple',  // How the viewer show the plugin content. Value can be 'panel', 'simple' or 'free'
    keepOpen: false, // If true, the window won't be closed if user click somewhere else.
    tooltip: 'SimilarBCF_ButtonPlugin.tooltip', // Can be an i18n path or a string shown in all languages
    icon: {
      imgUri: "https://imgs.search.brave.com/9Go2zoZ6m7xfW4UZlP3v4tdqcYU-K2Jc8fVF-s0iuwA/rs:fit:800:800:1/g:ce/aHR0cDovL2NsaXBh/cnQtbGlicmFyeS5j/b20vZGF0YV9pbWFn/ZXMvMzc0OTc2LnBu/Zw",
    },
  },
  i18n: {
    en: {
      tooltip: 'Copy from BCF'
    },
    fr: {
      tooltip: "Copie à partir d'un BCF"
    },
  },
};
