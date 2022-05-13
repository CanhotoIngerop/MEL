import Suivi_Maintenance_MELComponent from './Suivi_Maintenance_MEL.vue';

export default {
  name: 'Suivi_Maintenance_MELPlugin', // The name of the plugin
  component: Suivi_Maintenance_MELComponent,
  window: {
    name: 'Suivi_Maintenance_MEL',
    label: 'Suivi_Maintenance_MELPlugin.window_label',
    plugins: ['fullscreen'],
  },
  i18n: {
    en: {
      window_label: 'Suivi_Maintenance_MEL'
    },
    fr: {
      window_label: 'Suivi_Maintenance_MEL'
    },
  },
};
