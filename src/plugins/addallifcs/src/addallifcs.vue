<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div></div>
</template>

<script>
export default {
  // https://vuejs.org/v2/guide/components.html
  name: "addallifcs",
  data() {
    return {
    };
  },
  async onOpen()
  {
    return Promise.all(
      [this.addAllIfcs()]
    )
  },
  created() {},
  methods: {
    addAllIfcs()
    {
      $viewer.state.loadIfcs($viewer.state.objects);
    }
  },
};
</script>

<style lang="scss" scoped>
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>