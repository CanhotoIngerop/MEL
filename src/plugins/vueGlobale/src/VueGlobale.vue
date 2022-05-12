<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div class="vueGlobale-plugin">
    <div class="vueGlobale-plugin__header flex items-center">
      <span class="p-12">Vue Globale</span>
    </div>
    <BIMDataTabs
      :tabs="[
        { id: 0, text: 'LOCALISATION', icon: 'ifc' },
        { id: 1, text: 'CORPS D\'ETAT', icon: 'bcf' },
        { id: 2, text: 'CALENDRIER', icon: 'user' },
      ]"
      width="100%"
      height="40px"
      tabSize="220px"
      :selected="0"
    >
      <template #tab="{ tab }">
        <span>{{ tab.text }}</span>
      </template>
    </BIMDataTabs>
  </div>
</template>

<script>
import BIMDataTabs from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataTabs.js";
export default {
  // https://vuejs.org/v2/guide/components.html
  name: "vueGlobale",
  components: {
    BIMDataTabs,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.vueGlobale-plugin {
  height: 100%;
  background-color: var(--color-white);

  &__header {
    min-height: 44px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }

  &__menubar button{
    min-height: 22px;
  }
}
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>
