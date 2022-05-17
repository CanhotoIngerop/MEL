<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div class="vueGlobale-plugin">
    <ul>
      <li>
        <button @click="activateTab('globale')">VUE GLOBALE</button>
        <button @click="activateTab('perso')">VUE PERSONELLE</button>
      </li>
    </ul>

    
    <div id="tabCtrl" >
      <div id="globale" style="display: block;">
        <div style="padding-top: 100px">
          <div id="chart"></div>
          <div id="chart_two"></div>
          <div id="chart_three"></div>
          <p id="chart_two_total"></p>
        </div>
      </div>

      <div id="perso" style="display: none;">
        <div>
        <h1 class="text-center">Gestion des risques</h1>
        <div id="flex-container">
          <apexcharts class="flex-item" type="line" :options="chartOptionsLine" :series="seriesBar"></apexcharts>
          <apexcharts class="flex-item" type="pie" :options="chartOptionsPie" :series="seriesPie"></apexcharts>
        </div>
        <div id="flex-container" class="text-center">
          <div id="calendrier" class="flex-item">
            <Calendar
            class="custom-calendar max-w-full"
            :masks="masks"
            :attributes="attributes"
            disable-page-swipe
            is-expanded
          >
            <template v-slot:day-content="{ day, attributes }">
              <div class="vc-container flex flex-col h-full z-10 overflow-hidden">
                <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
                <div class="flex-grow overflow-y-auto overflow-x-auto">
                  <div
                    v-for="attr in attributes"
                    :key="attr.key"
                    class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                    :class="attr.customData.class"
                  >
                    {{ attr.customData.title }}
                  </div>
                </div>
              </div>
            </template>
          </Calendar>
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
import ApexCharts from 'apexcharts';

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

      chartOptionsLine: {
        chart: {
          id: 'basic-bar'
        },
        title: {
          text: 'Mes interventions au cours de l\'année',
          align: 'left'
        },
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      seriesBar: [{
        name: 'series-bar',
        data: [44, 55, 41, 17, 15, 23, 32, 53, 52, 63, 42, 23]
      }],
      chartOptionsPie: {
        chart: {
          id: 'basic-pie'
        },
        title: {
          text: 'Taux de gravité',
          align: 'center'
        },
        labels: ['Haute', 'Moyenne', 'Faible', '<span style="font-size: x-large;">Total : 112<span>'],
        colors: ['#FF3D1E', '#FF9100', '#7A7A7A'],
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
       
      BCF_Low: 0,
      BCF_Medium: 0,
      BCF_High: 0,

      attributes: [
        {
          key: 1,
          customData: {
            title: "rappel",
            class: "rappel",
            description: "Controle prévu le 16/05/2022",
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 2,
          customData: {
            title: "Contrôle",
            class: "urgent",
            description: "Visite sur le chantier de Ladoux",
          },
          dates: new Date(year, month, 16),
        },
        {
          key: 3,
          customData: {
            title: "conforme",
            class: "fait",
            description: "escalier mécanique conforme",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: "rappel",
            class: "rappel",
            description: "Controle prévu le 30/05/2022",
          },
          dates: new Date(year, month, 16),
        },
      ],
    };
  },
  created() {

  },
  mounted(){
    CreateDiagram();
  },
  methods: {
    activateTab(pageId) {
      var tabCtrl = document.getElementById('tabCtrl');
      var pageToActivate = document.getElementById(pageId);
      for (var i = 0; i < tabCtrl.childNodes.length; i++) {
        var node = tabCtrl.childNodes[i];
        if (node.nodeType == 1) { /* Element */
          node.style.display = (node == pageToActivate) ? 'block' : 'none';
        }
      }
    }
  }
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

::v-deep .custom-calendar {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 80px;
  --day-height: 60px;
  --weekday-bg: #f8fafc;
  --weekend-bg: #eff8ff;
  --weekday-border: 1px solid #eaeaea;
  
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    overflow-y: scroll;
    &.weekday-1,
    &.weekday-7 {
      background-color: var(--weekend-bg);
      & .day-label{
        background-color: var(--weekend-bg);
      }
    }
    .vc-container{
    border-radius: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
  }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
    
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }

  & .rappel{
    background-color: orange;
  }
  & .urgent{
    background-color: red;
  }
  & .fait{
    background-color: green;
    width: 100%;
  }
}

</style>