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
      <!--
      <div id="localisation" style="display: block;">
        localisation ici
      </div>
-->
      <div id="etat" style="display: none;">
        Corps d'etat ici
      </div>

      <div id="calendrier" style="display: none;">
        <div class="text-center section">
          <h2 class="h2">Calendrier</h2>
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
                <div class="flex-grow overflow-y-auto overflow-x-auto ">
                  <p
                    v-for="attr in attributes"
                    :key="attr.key"
                    class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                    :class="attr.customData.class"
                  >
                    {{ attr.customData.title }}
                  </p>
                </div>
              </div>
            </template>
          </Calendar>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  
  // https://vuejs.org/v2/guide/components.html
  name: "vueGlobale",
  components: {
    Calendar,
    apexcharts: VueApexCharts,
  },
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
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
    };
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
.custom-calendar.vc-container {
  border-radius: 0;
  width: 100%;
}

.event{
  background: blue;
  color: white;
  width: 100px;
  height: 50px;
}
</style>
