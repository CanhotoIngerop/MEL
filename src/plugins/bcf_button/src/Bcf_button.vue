<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div width="80px">

    <button @click="LoadALL">

      Show All

    </button>

  </div>
</template>

<script>
export default {
  // https://vuejs.org/v2/guide/components.html
  name: "bcf_button",
  data() {
    return {};
  },
  created() {
  },
  methods: {
     LoadALL(){

      var tempViewer = this.$viewer;

      console.log(tempViewer);

      const Bcf_Api = new tempViewer.api.apiClient.BcfApi().getFullTopics("369571");

      console.log(Bcf_Api);
  }
},
};

</script>

<style lang="scss" scoped>
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>
