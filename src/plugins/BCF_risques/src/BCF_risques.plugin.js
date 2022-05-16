import BCF_risquesComponent from './BCF_risques.vue';

export default {
  name: 'BCF_risquesPlugin', // The name of the plugin
  component: BCF_risquesComponent,
  window: {
    name: 'BCF_risques',
    label: 'BCF_risquesPlugin.window_label',
    plugins: ['fullscreen'],
  },
  i18n: {
    en: {
      window_label: 'BCF_risques'
    },
    fr: {
      window_label: 'BCF_risques'
    },
  },
};
