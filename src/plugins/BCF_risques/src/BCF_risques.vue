<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div>
    <div id="Title">
      <p id="Title-content">3 Risques</p>
    </div>
    <table id="BCFTable">
    </table>
  </div>
</template>

<style>

#Title{
  position: relative;
  top: 3vh;
  left: 50%;
  margin-right: -50%;
  width: 100%;
  height: 10%;
  line-height: 0px;
  text-align: center;
  box-shadow: 0px 3px #ECECEC;
  border: 2px #00E4FF solid;
  background-color: #ECECEC;
  transform: translate(-50%, -50%);
}

#Title-content{
  font-size: 200%;
  font-weight: bolder;
}

#BCFTable{
  position: relative;
  table-layout: fixed;
  width: 100%;
}

#BCFTable tr, #BCFTable td{
  border: 1px solid black;
}

#BCFTable p{
  color: white;
  position: relative;
  display: flex;
  font-size: 80%;
}

table td {
    height: 115px;
    width: 33.3%;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
}

img{
  width: 43.5%;
  position: relative;
  display: flex;
}

</style>

<script>
import $ from "jquery";
export default {
  // https://vuejs.org/v2/guide/components.html
  name: "BCF_risques",
  data() {
    return {};
  },
  created() {},
  mounted(){
    HandleTable();
  },
  methods: {},
};

let First_BCF = ['https://i.imgur.com/6kdEt7W.png', 'Poutre', '18/12/2020', 'Non précisé', 'Non précisé', 'Ouvert', 'maxime.jay@ingerop.com'];
let Second_BCF = ['https://i.imgur.com/uOopNTO.png', 'Poutre', '15/05/2020', 'Non précisé', 'Haute', 'Fermé', 'marine@ingerop.com'];
let Third_BCF = ['https://i.imgur.com/QhfQDmC.png', 'Poutre', '15/08/2020', 'Non précisé', 'Moyenne', 'Ouvert', 'anthony@ingerop.com'];
let Thirdd_BCF = ['https://i.imgur.com/QhfQDmC.png', 'Poutre', '15/08/2020', 'Non précisé', 'Moyenne', 'Ouvert', 'anthony@ingerop.com'];


let List = [First_BCF, Second_BCF, Third_BCF, Thirdd_BCF];

function HandleTable(){
  var Table = document.querySelector("#BCFTable");
  var calc = Table.children;
  for(let i=0; i<List.length; i++){
    let trNumber = 0;
    let tdNumber = 0;
    let Number, Number2;
    for(let j=0; j<calc.length; j++){
      if(calc[j].children.length==3){
        trNumber++;
      }
      for(let k=0; k<calc[j].children.length; k++){
        tdNumber++;
      }
    }
    if(trNumber==calc.length){
      Number = +calc.length+1;
      Number2 = +tdNumber+1;
      $("#BCFTable").append("<tr id=\"l" + Number + "\"><td id=\"BCF-" + Number2 + "\"> </td></tr>");
      CreateBCF(List[i], tdNumber);
      HandleCSS(List[i][4], tdNumber, calc.length);
    }
    else{
      Number2 = +tdNumber+1;
      $("#l"+calc.length).append("<td id=\"BCF-" + Number2 + "\"> </td>");
      CreateBCF(List[i], tdNumber);
      HandleCSS(List[i][4], tdNumber, calc.length);
    }
  }
}

function CreateBCF(List_BCF, Number){
  Number = Number+1;
  $("#BCF-" + Number).append("<img src=\"" + List_BCF[0] + "\" />");
  $("#BCF-" + Number).append("<p id=\"BCF-" + Number + "-Name\">" + List_BCF[1] + "</p>");
  $("#BCF-" + Number).append("<p id=\"BCF-" + Number + "-DateTitle\">Crée le</p>");
  $("#BCF-" + Number).append("<p id=\"BCF-" + Number + "-Date\">" + List_BCF[2] + "</p>");
  $("#BCF-" + Number).append("<p id=\"BCF-" + Number + "-TypeTitle\">Type</p>");
  $("#BCF-" + Number).append("<p id=\"BCF-" + Number + "-Type\">" + List_BCF[3] + "</p>");
  $("#BCF-" + Number).append("<p id=\"BCF-" + Number + "-PriorityTitle\">Priorité</p>");
  $("#BCF-" + Number).append("<p id=\"BCF-" + Number + "-Priority\">" + List_BCF[4] + "</p>");
  $("#BCF-" + Number).append("<p id=\"BCF-" + Number + "-Status\">" + List_BCF[5] + "</p>");
  $("#BCF-" + Number).append("<p id=\"BCF-" + Number + "-AssignTitle\">Assigné à</p>");
  $("#BCF-" + Number).append("<p id=\"BCF-" + Number + "-Mail\">" + List_BCF[6] + "</p>");
}

function HandleCSS(Priority, Number, Number2){
  Number = Number + 1;
  Number2 = (Number2*3)-Number;
  if(Priority=="Haute"){
    $("#BCF-"+Number).css("background-color", "#FF0000");
    $("#BCF-"+Number+"-Status").css("top", "-21.7vh");
    $("#BCF-"+Number+"-Status").css("background-color", "#CB0000");
    $("#BCF-"+Number+"-Status").css("border-radius", "30px");
    $("#BCF-"+Number+"-Status").css("border", "1px solid #CB0000");
    $("#BCF-"+Number+"-Status").css("border-width", "1px 3px");
    $("#BCF-"+Number+"-Status").css("width", "40px");
  }
  if(Priority=="Moyenne"){
    $("#BCF-"+Number).css("background-color", "#FFB600");
    $("#BCF-"+Number+"-Status").css("top", "-21.7vh");
    $("#BCF-"+Number+"-Status").css("background-color", "#B78200");
    $("#BCF-"+Number+"-Status").css("border-radius", "30px");
    $("#BCF-"+Number+"-Status").css("border", "1px solid #B78200");
    $("#BCF-"+Number+"-Status").css("border-width", "1px 3px");
    $("#BCF-"+Number+"-Status").css("width", "40px");
  }
  if(Priority=="Non précisé"){
    $("#BCF-"+Number).css("background-color", "#BABABA");
    $("#BCF-"+Number+"-Status").css("top", "-21.7vh");
    $("#BCF-"+Number+"-Status").css("background-color", "black");
    $("#BCF-"+Number+"-Status").css("border-radius", "30px");
    $("#BCF-"+Number+"-Status").css("border", "1px solid black");
    $("#BCF-"+Number+"-Status").css("border-width", "1px 3px");
    $("#BCF-"+Number+"-Status").css("width", "40px");
  }
  if(Number2==2){
    //BCF-1
    $("#BCF-"+Number+"-Status").css("left", "77%");
    $("#BCF-"+Number+"-Name").css("top", "-11.5vh");
    $("#BCF-"+Number+"-Name").css("left", "47%");
    $("#BCF-"+Number+"-DateTitle").css("top", "-11.5vh");
    $("#BCF-"+Number+"-DateTitle").css("left", "47%");
    $("#BCF-"+Number+"-Date").css("top", "-12.6vh");
    $("#BCF-"+Number+"-Date").css("left", "44%");
    $("#BCF-"+Number+"-TypeTitle").css("top", "-16vh");
    $("#BCF-"+Number+"-TypeTitle").css("left", "80%");
    $("#BCF-"+Number+"-Type").css("top", "-17vh");
    $("#BCF-"+Number+"-Type").css("left", "75%");
    $("#BCF-"+Number+"-PriorityTitle").css("top", "-17.2vh");
    $("#BCF-"+Number+"-PriorityTitle").css("left", "47%");
    $("#BCF-"+Number+"-Priority").css("top", "-18.6vh");
    $("#BCF-"+Number+"-Priority").css("left", "46%");
    $("#BCF-"+Number+"-AssignTitle").css("top", "-21.5vh");
    $("#BCF-"+Number+"-AssignTitle").css("left", "60%");
    $("#BCF-"+Number+"-Mail").css("top", "-22.8vh");
    $("#BCF-"+Number+"-Mail").css("left", "49%");
  }
  if(Number2==1){
    //BCF-2
    $("#BCF-"+Number+"-Status").css("left", "77%");
    $("#BCF-"+Number+"-Name").css("top", "-11.5vh");
    $("#BCF-"+Number+"-Name").css("left", "47%");
    $("#BCF-"+Number+"-DateTitle").css("top", "-11.5vh");
    $("#BCF-"+Number+"-DateTitle").css("left", "47%");
    $("#BCF-"+Number+"-Date").css("top", "-12.6vh");
    $("#BCF-"+Number+"-Date").css("left", "44%");
    $("#BCF-"+Number+"-TypeTitle").css("top", "-16vh");
    $("#BCF-"+Number+"-TypeTitle").css("left", "80%");
    $("#BCF-"+Number+"-Type").css("top", "-17vh");
    $("#BCF-"+Number+"-Type").css("left", "75%");
    $("#BCF-"+Number+"-PriorityTitle").css("top", "-17.2vh");
    $("#BCF-"+Number+"-PriorityTitle").css("left", "47%");
    $("#BCF-"+Number+"-Priority").css("top", "-18.6vh");
    $("#BCF-"+Number+"-Priority").css("left", "46%");
    $("#BCF-"+Number+"-AssignTitle").css("top", "-21.5vh");
    $("#BCF-"+Number+"-AssignTitle").css("left", "60%");
    $("#BCF-"+Number+"-Mail").css("top", "-22.8vh");
    $("#BCF-"+Number+"-Mail").css("left", "49%");
  }
  if(Number2==0){
    //BCF-3
    $("#BCF-"+Number+"-Status").css("left", "77%");
    $("#BCF-"+Number+"-Name").css("top", "-11.5vh");
    $("#BCF-"+Number+"-Name").css("left", "47%");
    $("#BCF-"+Number+"-DateTitle").css("top", "-11.5vh");
    $("#BCF-"+Number+"-DateTitle").css("left", "47%");
    $("#BCF-"+Number+"-Date").css("top", "-12.6vh");
    $("#BCF-"+Number+"-Date").css("left", "44%");
    $("#BCF-"+Number+"-TypeTitle").css("top", "-16vh");
    $("#BCF-"+Number+"-TypeTitle").css("left", "80%");
    $("#BCF-"+Number+"-Type").css("top", "-17vh");
    $("#BCF-"+Number+"-Type").css("left", "75%");
    $("#BCF-"+Number+"-PriorityTitle").css("top", "-17.2vh");
    $("#BCF-"+Number+"-PriorityTitle").css("left", "47%");
    $("#BCF-"+Number+"-Priority").css("top", "-18.6vh");
    $("#BCF-"+Number+"-Priority").css("left", "46%");
    $("#BCF-"+Number+"-AssignTitle").css("top", "-21.5vh");
    $("#BCF-"+Number+"-AssignTitle").css("left", "60%");
    $("#BCF-"+Number+"-Mail").css("top", "-22.8vh");
    $("#BCF-"+Number+"-Mail").css("left", "49%");
  }
}

</script>

<style lang="scss" scoped>
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>
