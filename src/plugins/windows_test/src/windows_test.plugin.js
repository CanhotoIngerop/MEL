import Windows_testComponent from './Windows_test.vue';

export default {
  name: 'Windows_testPlugin', // The name of the plugin
  component: Windows_testComponent,
  window: {
    name: 'Windows_test',
    label: 'Windows_testPlugin.window_label',
    plugins: ['fullscreen'],
  },
  i18n: {
    en: {
      window_label: 'Windows_test'
    },
    fr: {
      window_label: 'Windows_test'
    },
  },
};
