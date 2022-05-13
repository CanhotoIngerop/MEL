<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div style="padding-top: 10px">
    <h1 class="text-center">Gestion des risques</h1>
    <div id="flex-container">
      <apexcharts class="flex-item" type="bar" :options="chartOptionsBar" :series="seriesBar"></apexcharts>
      <apexcharts class="flex-item" type="pie" :options="chartOptionsPie" :series="seriesPie"></apexcharts>
    </div>
    <div id="flex-container" class="text-center">
      <div id="calendrier" class="flex-item">
        <Calendar is-expanded :attributes='attrs'></Calendar>
      </div>
      <div class="flex-item" style="border: 3px green solid;">
        BCF
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  // https://vuejs.org/v2/guide/components.html
  name: "gestionRisques",
  components: {
    Calendar,
    apexcharts: VueApexCharts,
  },
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    return {
      chartOptionsBar: {
        chart: {
          id: 'basic-bar'
        },
        title: {
          text: 'Nombre de risques selon leur contexte',
          align: 'center'
        },
        labels: ['Management de projet', 'Réglementaire', 'Voirie', 'Transport', 'Projets connexes', 'Environnement', 'Réseaux', 'Végétation', 'Travaux', 'Nivellement', 'Signalisation']
      },
      seriesBar: [{
        name: 'series-bar',
        data: [44, 55, 41, 17, 15, 23, 32, 53, 52, 63, 42]
      }],
      chartOptionsPie: {
        chart: {
          id: 'basic-pie'
        },
        title: {
          text: 'Taux de gravité',
          align: 'center'
        },
        labels: ['Haute', 'Moyenne', 'Faible']
      },
      seriesPie: [44, 55, 13],
      attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#ff8080',
            // Other properties are available too, like `height` & `borderRadius`
          },
          dates: new Date()
        }
      ],
    };
  },
  created() { },
  methods: {},
};
</script>

<style lang="scss" scoped>
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
#flex-container {
  display: flex;
  flex-direction: row;
}

#flex-container>.flex-item {
  flex: 1;
}

#flex-container>.raw-item {
  width: 5rem;
}
</style>
