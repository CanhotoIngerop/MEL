<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div>
    <div id="chart"></div>
    <div id="chart_two"></div>
    <div id="chart_three"></div>
    <p id="chart_two_total">55</p>
  </div>
</template>

<style>
#chart{
  position: absolute;
  top: 20%;
  left: 20%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

#chart_two{
  position: absolute;
  top: 20%;
  left: 70%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

#chart_three{
  position: absolute;
  top: 65%;
  left: 45%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

#chart_two_total{
  font-size: 40px;
  font-weight: bolder;
  position: absolute;
  top: 17%;
  left: 70%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
import ApexCharts from "apexcharts";
export default {
  // https://vuejs.org/v2/guide/components.html
  name: "windows_test",
  data() {
    return {
      BCF_Low: 0,
      BCF_Medium: 0,
      BCF_High: 0
    };
  },
  created() {
  },
  mounted(){
    CreateDiagram();
  },
  methods: {},
};

function CreateDiagram(){
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  var chart_two = new ApexCharts(document.querySelector("#chart_two"), options_two);
  chart_two.render();
  var chart_three = new ApexCharts(document.querySelector("#chart_three"), options_three);
  chart_three.render();
}

var options = {
          series: [44, 55, 13],
          chart: {
          width: 380,
          type: 'pie',
        },
        colors : ['#0010CD', '#CA00CD', '#00B8CD'],
        title: {
          text: "Type de gravité",
          align: "center",
          style: {
            fontSize: "20px"
          }
        },
        legend: {
              position: 'bottom'
            },
        labels: ['Haute', 'Moyenne', 'Faible'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }]
        };

var options_two = {
          series: [44, 55],
          chart: {
          type: 'donut',
          width: 380,
        },
        colors: ['#0008AB', '#A500AB'],
        title: {
          text: "Statut des risques (%)",
          align: "center",
          style: {
            fontSize: "20px"
          }
        },
        legend: {
              position: 'bottom'
            },
        labels: ['Traité', 'Ouvert'],
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10
          }
        },
        grid: {
          padding: {
            bottom: -80
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }]
        };

var options_three = {
          series: [44, 55, 41, 17, 15, 23, 32, 53, 52, 63, 42],
          chart: {
          type: 'donut',
          width: 500
        },
        colors: ['#0013FF', '#FFAA00', '#0F0062', '#C25200', '#FF00F7', '#00FFC5', '#5C005F', '#085D00', '#00FFF0', '#00FF55', '#0078FF'],
        legend: {
              position: 'bottom',
              width: 450
            },
        labels: ['Management de projet', 'Réglementaire', 'Voirie', 'Transport', 'Projets connexes', 'Environnement', 'Réseaux', 'Végétatation', 'Travaux', 'Nivellement', 'Signalisation'],
        title: {
          text: "Nombre de risques selon leur contexte",
          align: "center",
          style: {
            fontSize: "20px"
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }]
        };
</script>



<style lang="scss" scoped>
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>