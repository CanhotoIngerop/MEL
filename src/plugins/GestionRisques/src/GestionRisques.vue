<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div class="vueGlobale-plugin">
    <div class="vueGlobale-plugin__header flex items-center">
      <span class="p-12">Vue Globale</span>
    </div>
    <ul>
      <li>
        <button @click="activateTab('localisation')">LOCALISATION</button>

        <button @click="activateTab('globale')">VUE GLOBALE</button>
        <button @click="activateTab('perso')">VUE PERSONELLE</button>
      </li>
    </ul>

    
    <div id="tabCtrl">
      <div class="mainDiv" id="localisation">
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

      <div id="globale">
        <div>
          <div id="chart"></div>
          <div id="chart_two"></div>
          <div id="chart_three"></div>
          <p id="chart_two_total">55</p>
        </div>
      </div>

      <div id="perso">
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
      </div>

    </div>
  </div>


</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import Calendar from 'v-calendar/lib/components/calendar.umd';
import DatePicker from 'v-calendar/lib/components/date-picker.umd';

export default {
  
  // https://vuejs.org/v2/guide/components.html
  name: "vueGlobale",
  components: {
    apexcharts: VueApexCharts,
    Calendar,
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
      masks: {
        weekdays: 'WWW',
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: "Contrôle",
            class: "event",
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: "Visite",
            class: "event",
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Visite",
            class: "event",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: "Contrôle",
            class: "event",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: "Contrôle",
            class: "event",
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Visite",
            class: "event",
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: "Réunion",
            class: "event",
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Réunion",
            class: "event",
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: "Réunion",
            class: "event",
          },
          dates: new Date(year, month, 25),
        },
      ],
      BCF_Low: 0,
      BCF_Medium: 0,
      BCF_High: 0,
      
    };
  },
  created() {
    this.getNiveau();
  },
  mounted(){
    CreateDiagram();
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
    },
    activateTab(pageId) {
      var tabCtrl = document.getElementById('tabCtrl');
      var pageToActivate = document.getElementById(pageId);
      for (var i = 0; i < tabCtrl.childNodes.length; i++) {
        var node = tabCtrl.childNodes[i];
        if (node.nodeType == 1) { /* Element */
          node.style.display = (node == pageToActivate) ? 'block' : 'none';
        }
      }
    },  
    CreateDiagram(){
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
      var chart_two = new ApexCharts(document.querySelector("#chart_two"), options_two);
      chart_two.render();
      var chart_three = new ApexCharts(document.querySelector("#chart_three"), options_three);
      chart_three.render();
    },  
  }
};

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
.vueGlobale-plugin {
  height: 100%;
  background-color: var(--color-white);

  &__header {
    min-height: 44px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
}


$day-border: 1px solid #b8c2cc;
$day-border-highlight: 1px solid #b8c2cc;
$day-width: 90px;
$day-height: 90px;
$weekday-bg: #f8fafc;
$weekday-border: 1px solid #eaeaea;
.scrollbar {
  width: 0px;
}
.scrollbar-track {
  display: none;
}

.event{
  background: blue;
  color: white;
  width: 100px;
  height: 50px;
}
</style>