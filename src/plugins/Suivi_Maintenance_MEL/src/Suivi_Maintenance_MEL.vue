<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div class="mainDiv">
    <div class="BarDiv">
      <apexcharts class="BarGraph" height="350" type="bar" :options="chartOptionsBar" :series="seriesBarNonConform"></apexcharts>
      <apexcharts class="BarGraph" height="350" type="bar" :options="chartOptionsBar" :series="seriesBarDesord"></apexcharts>
    </div>
    <div class="PieDiv" style="display:flex; flex-direction: row; justify-content: center; align-items: center">
      <apexcharts class="PieGraph" style="width:50%;" type="pie" :options="chartOptions" :series="series"></apexcharts>
      <apexcharts class="PieGraph" style="width:50%;" type="pie" :options="chartOptions" :series="series"></apexcharts>
    
    <button @click="getNiveau">
      Show All</button>
    </div>
    
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  // https://vuejs.org/v2/guide/components.html
  name: "Suivi_Maintenance_MEL",
  components:{
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      series: [44, 55],
      chartOptions: {
        title:{
          text: 'Part des objets présentant une non-conformité',
        },
        chart: {
          margin:40,
          width: 380,
          type: 'pie',
        },
        labels: ['Non-conformité', 'Conformité'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      seriesBarNonConform: [
        {
          name: 'Velux',
          data: [44, 55, 41, 64, 22]
        },
        {
          name: 'Volux',
          data: [53, 32, 33, 52, 13]
        },
        {
          name: 'Valux',
          data: [74, 514, 54, 231, 82]
        }
      ],
      seriesBarDesord: [
        {
          name: 'Velux',
          data: [44, 55, 41, 64, 22]
        },
        {
          name: 'Volux',
          data: [53, 32, 33, 52, 13]
        },
        {
          name: 'Valux',
          data: [74, 514, 54, 231, 82]
        }
      ],

      chartOptionsBar: {
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#666']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [],
        },
      },
    }
  },
  
  created() {
    this.getNiveau();
  },
  methods: {
     getNiveau(){
      const loadedIfcs = this.$viewer.state.ifcs;
      var niveaux = [];
      
      loadedIfcs.forEach(ifcelement => {
        const apiClient = new this.$viewer.api.apiClient.IfcApi();
        const storeys = apiClient.getStoreys(this.$viewer.api.cloudId,ifcelement.id,this.$viewer.api.projectId);
        storeys.then((value) => {
          value.forEach(element => {
            if(!niveaux.includes(element.name))
              niveaux.push(element.name);
          });
          this.chartOptionsBar = {
            xaxis:{
              categories: niveaux
            }
          }
        })
      });
    }
  },
};
</script>

<style lang="scss" scoped>
  .BarDiv{
    margin: 0 0 0 0;
  }
  .BarGraph {
    margin: 0px 60px 0 20px;
  }
  .PieGraph{
    margin: 0px 60px 0 20px;
  }

  .PieDiv{
    margin: 40px 0 0 0;
  }

  .mainDiv{
    background-color: rgb(245, 245, 245 );
    margin: 0px;
  }
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>
