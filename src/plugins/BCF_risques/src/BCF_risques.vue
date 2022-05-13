<template>
  <!-- https://vuejs.org/v2/guide/syntax.html -->
  <div>
    <div id="Title">
      <p id="Title-content">LEGEND</p>
    </div>
    <table id="BCFTable">
      <tr>
        <td id="BCF-1">
          <img src="https://i.imgur.com/6kdEt7W.png" />
          <p id="BCF-1-Name">1. Problème</p>
          <p id="BCF-1-DateTitle">Crée le</p>
          <p id="BCF-1-Date">18/12/2001</p>
          <p id="BCF-1-TypeTitle">Type</p>
          <p id="BCF-1-Type">Non précisé</p>
          <p id="BCF-1-PriorityTitle">Priorité</p>
          <p id="BCF-1-Priority">Non précisé</p>
          <p id="BCF-Status">Ouvert</p>
          <p id="BCF-1-AssignTitle">Assigné à</p>
          <p id="BCF-1-Mail">maximejay@ingerop.com</p>
        </td>
        <td><p>test</p></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<style>

#Title{
  position: absolute;
  top: 5%;
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
  position: absolute;
  table-layout: fixed;
  width: 100%;
  top: 5vh;
}

#BCFTable tr, #BCFTable td{
  border: 1px solid black;
}

#BCFTable p{
  color: white;
  position: absolute;
  display: flex;
  font-size: 80%;
}

img{
  width: 40%;
  display: flex;
}

#BCF-1{
  background-color: grey;
}

#BCF-1-Name{
  top: -0.5vh;
  left: 15%;
}

#BCF-1-DateTitle{
  left: 15%;
  top: 1vh;
}

#BCF-1-Date{
  left: 14%;
  top: 2vh;
}

#BCF-1-TypeTitle{
  left: 27.5%;
  top: 1vh;
}

#BCF-1-Type{
  left: 25.5%;
  top: 2vh;
}

#BCF-1-PriorityTitle{
  left: 15.5%;
  top: 4vh;
}

#BCF-1-Priority{
  left: 14.5%;
  top: 5vh;
}

#BCF-Status{
  left: 27%;
  top: 4.5vh;
  background-color: black;
  border-radius: 30px;
  border: 1px solid black;
  border-width: 1px 3px;
}

#BCF-1-AssignTitle{
  left: 19.5%;
  top: 6.5vh;
}

#BCF-1-Mail{
  left: 16%;
  top: 7.5vh;
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
    CreateTitle();
    CreateBCFList();
  },
  methods: {},
};

function CreateTitle(){
  console.log("coucou");
}

function CreateBCFList(){
  console.log("coucou2");
}

</script>

<style lang="scss" scoped>
/* https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles */
</style>
