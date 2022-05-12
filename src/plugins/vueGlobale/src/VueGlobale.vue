<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div class="vueGlobale-plugin">
    <div class="vueGlobale-plugin__header flex items-center">
      <span class="p-12">Vue Globale</span>
    </div>
    <ul>
      <li>
        <button @click="activateTab('localisation')">LOCALISATION</button>
        <button @click="activateTab('etat')">COPRS D'ETAT</button>
        <button>INDICE GRAVITE</button>
        <button>AMIANTE</button>
      </li>
      <li>
        <button>INSPECTION</button>
        <button>CR</button>
        <button>HISTORIQUE</button>
        <button @click="activateTab('calendrier')">CALENDRIER</button>
        <button>INTERVENTION</button>
      </li>
    </ul>

    <div id="tabCtrl">
      <div id="localisation" style="display: block;">
        localisation ici
      </div>

      <div id="etat" style="display: none;">
        Corps d'etat ici
      </div>

      <div id="calendrier" style="display: none;">
        Calendrier ici
      </div>
    </div>
  </div>

</template>

<script>

export default {
  // https://vuejs.org/v2/guide/components.html
  name: "vueGlobale",
  components: {
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    activateTab(pageId) {
      console.log(pageId);
      var tabCtrl = document.getElementById('tabCtrl');
      var pageToActivate = document.getElementById(pageId);
      for (var i = 0; i < tabCtrl.childNodes.length; i++) {
        var node = tabCtrl.childNodes[i];
        if (node.nodeType == 1) { /* Element */
          node.style.display = (node == pageToActivate) ? 'block' : 'none';
        }
      }
    }
  },
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
}


/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>
