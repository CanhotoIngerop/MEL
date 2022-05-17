<template>
  <div class="viewer">
    <div :id="viewerId"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import makeBIMDataViewer from "@bimdata/viewer";
import backgroundColor from "@/plugins/backgroundColor/src/backgroundColor.plugin.js";
import BimObjectPlugin from "@/plugins/bimobject/src/bimobject.plugin.js";
import bsdd from "@/plugins/bsdd/src/bsdd.plugin.js";
import GltfExtractorPlugin from "@/plugins/gltfExtractor/src/gltfExtractor.plugin.js";
import HolusionPlugin from "@/plugins/holusion/src/holusion.plugin.js";
import kroqiBcfService from "@/plugins/kroqiBcfService/src/kroqiBcfService.plugin.js";
import platformDemo from "@/plugins/platformDemo/src/platformDemo.plugin.js";
import SplitPlugin from "@/plugins/split/src/split.plugin.js";
import SvgExtractorPlugin from "@/plugins/svgExtractor/src/svgExtractor.plugin.js";
import BCF_risques from "@/plugins/BCF_risques/src/BCF_risques.plugin.js";
import GestionRisques from "@/plugins/GestionRisques/src/GestionRisques.plugin.js";
import addallifcs from "../plugins/addallifcs/src/addallifcs.plugin.js";
import VueGlobale from "@/plugins/vueGlobale/src/vueGlobale.plugin.js";

export default {
  data() {
    return {
      viewerId: "bimdataViewerId",
    };
  },
  computed: {
    ...mapGetters(["oidcAccessToken"]),
  },
  mounted() {
    const bimdataViewer = makeBIMDataViewer({
      locale: "fr",
      api: {
        cloudId: this.$route.query.cloudId,
        projectId: this.$route.query.projectId,
        ifcIds: [this.$route.query.ifcId],
        apiUrl: process.env.VUE_APP_BIMDATA_API_URL,
        accessToken: this.oidcAccessToken,
      },
      plugins: {
        bcfKroqiPremiumService: {
          kroqiDomain: "pfptnbdev.io",
          organization: "cstb",
          userIsAdmin: true,
          kroqiProjectId: "123456789",
          service: "BIMDATA",
        },
      },
    });

    bimdataViewer.registerPlugin(backgroundColor);
    bimdataViewer.registerPlugin(BimObjectPlugin);
    bimdataViewer.registerPlugin(bsdd);
    bimdataViewer.registerPlugin(GltfExtractorPlugin);
    bimdataViewer.registerPlugin(HolusionPlugin);
    bimdataViewer.registerPlugin(kroqiBcfService);
    bimdataViewer.registerPlugin(platformDemo);
    bimdataViewer.registerPlugin(SplitPlugin);
    bimdataViewer.registerPlugin(SvgExtractorPlugin);
    bimdataViewer.registerPlugin(BCF_risques);
    bimdataViewer.registerPlugin(GestionRisques);
    bimdataViewer.registerPlugin(addallifcs);
    bimdataViewer.registerPlugin(VueGlobale);

    bimdataViewer.mount(`#${this.viewerId}`);

    this.$watch(
      () => this.oidcAccessToken,
      token => {
        bimdataViewer.setAccessToken(token);
      }
    );
  },
};
</script>

<style scoped>
.viewer {
  height: 100vh;
  width: 100vw;
}
</style>
