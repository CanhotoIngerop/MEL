import GestionRisquesComponent from './GestionRisques.vue';

export default {
  name: 'GestionRisquesPlugin', // The name of the plugin
  component: GestionRisquesComponent,
  window: {
    name: 'GestionRisques',
    label: 'GestionRisquesPlugin.window_label',
    plugins: ['fullscreen'],
  },
  i18n: {
    en: {
      window_label: 'GestionRisques'
    },
    fr: {
      window_label: 'GestionRisques'
    },
  },
};
