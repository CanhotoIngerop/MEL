<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div></div>
</template>

<script>
import getClient from "../../../api/api";

export default { 
  // https://vuejs.org/v2/guide/components.html
  name: "addallifcs",
  data() {
    return {
    };
  },
  async onOpen()
  {
    
    var tempViewer = this.$viewer;
    
    var cloud = this.$viewer.api.cloudId;
    var proj  = this.$viewer.api.projectId;

    const ifcs = await new this.$viewer.api.apiClient.IfcApi().getIfcs(cloud, proj);

    console.log(ifcs[0].id);

    let tab = [];
    
    ifcs.forEach(element => {
      tab.push(element.id);
    });

    this.$viewer.state.loadIfcs(tab);

    this.$close();

  },
  onClose()
  {

  },
  created() {},
  methods: {
    addAllIfcs()
    {
      //alert($viewer.state.objects);
      const allIfcs = this.state.ifcs;
      alert(allIfcs);
      //$viewer.state.loadIfcs($viewer.state.objects);
    }
  },
};
</script>

<style lang="scss" scoped>
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>