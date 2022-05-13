<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div>

    <apexcharts width="45%" type="bar" style="display : inline-block;" :options="chartOptionsBar" :series="seriesBar"></apexcharts>
    <apexcharts width="45%" type="pie" style="display : inline-block; margin-left: 5%;" :options="chartOptionsPie" :series="seriesPie"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  // https://vuejs.org/v2/guide/components.html
  name: "gestionRisques",
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      chartOptionsBar: {
        chart: {
          id: 'basic-bar'
        },
        labels: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      },
      chartOptionsPie: {
        chart: {
          id: 'basic-pie'
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
      },
      seriesBar: [{
        name: 'series-bar',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
      seriesPie: [44, 55, 13, 43, 22]      
    };
  },
  created() { },
  methods: {},
};
</script>

<style lang="scss" scoped>
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>
