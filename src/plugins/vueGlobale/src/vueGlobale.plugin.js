import VueGlobaleComponent from './VueGlobale.vue';

export default {
  name: 'VueGlobalePlugin', // The name of the plugin
  component: VueGlobaleComponent,
  window: {
    name: 'VueGlobale',
    label: 'VueGlobalePlugin.window_label',
    plugins: ['fullscreen'],
  },
  i18n: {
    en: {
      window_label: 'VueGlobale'
    },
    fr: {
      window_label: 'VueGlobale'
    },
  },
};
