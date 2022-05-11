<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div>
    <input type="button" value="Test" @click="OnClick">
    <BIMDataPieSpinner />
  </div>
</template>

<script>
import {
  BIMDataPieSpinner,
  } from "@bimdata/design-system/dist/js/BIMDataComponents/";
export default {
  // https://vuejs.org/v2/guide/components.html
  name: "Control_Panel",
  components: {
    BIMDataPieSpinner,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    OnClick(){

    }
  },
};
</script>

<style lang="scss" scoped>
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>
