import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en", // set locale
  messages: { en: {}, fr: {} }, // set locale messages
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount("#app");


/*
window.onload = function()
{
  $viewer.state.loadIfcs($viewer.state.objects);
  $viewer.
} 
*/


/*
window.onload = function()
{
  var coiin = document.getElementsByClassName("bimdata-tooltip");

  //alert(coiin[1].append("Coiiiin"))
  coiin[5].addEventListener('mouseover', function handle(){
    coiin[5].innerHTML = '<div class="bimdata-tooltip__content" data-v-4d16179f><button data-v-7af18892="" color="default" type="button" class="bimdata-btn bimdata-btn__icon bimdata-btn__fill bimdata-btn__fill--default" data-v-4d16179f="" style="min-width: 45px; min-height: 45px;"><svg data-v-364a838f="" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="100%" fill="currentColor" color="default" class="" data-v-7af18892="" style="width: 22px; min-width: 22px; height: 22px; min-height: 22px; margin: 0px; transform: rotate(0deg);"><path data-v-364a838f="" fill-rule="evenodd" clip-rule="evenodd" d="M15.5638 14.574C15.5651 14.6276 15.5665 14.6846 15.5665 14.7468C16.1967 14.6326 16.7553 14.4489 17.1707 14.0071C17.1964 13.9797 17.2227 13.9522 17.2492 13.9244C17.547 13.6121 17.8733 13.27 17.7701 12.7976C17.7252 12.5932 17.6806 12.3886 17.6359 12.1841C17.321 10.7405 17.0058 9.29526 16.5932 7.87892C16.2429 6.67372 15.7432 5.50726 15.2475 4.34989L15.2288 4.3062C14.988 3.74418 14.6627 3.19308 14.2702 2.72539C13.2993 1.56907 12.0408 0.82782 10.6002 0.374527C9.04977 -0.114015 7.49483 -0.117987 5.94735 0.323886C4.56153 0.720082 3.34682 1.42906 2.33457 2.47119C0.939797 3.90852 0.175259 5.62587 0.0255348 7.6143C-0.0615141 8.7731 0.0698054 9.91452 0.484158 11.0023C0.641925 11.4171 0.841186 11.816 1.04895 12.2319C1.14382 12.4219 1.24047 12.6153 1.33575 12.8155C1.36603 12.769 1.38858 12.7368 1.40523 12.7131C1.43016 12.6776 1.4419 12.6609 1.44667 12.6427C1.7496 11.5509 2.38182 10.6389 3.023 9.73032C3.07453 9.65753 3.12878 9.58579 3.18307 9.51399C3.32692 9.32376 3.47108 9.13312 3.56569 8.92154C3.66341 8.70179 3.73641 8.47108 3.80938 8.24044C3.88463 8.00264 3.95985 7.7649 4.06212 7.53933C5.06044 5.34436 6.79247 4.03612 9.12737 3.54608C10.1555 3.33061 11.137 3.53864 11.9303 4.31167C13.2107 5.55884 14.1369 7.03291 14.7696 8.69614C15.4551 10.4989 15.7719 12.3547 15.5685 14.2841C15.5589 14.3755 15.5612 14.4679 15.5638 14.574ZM14.2089 1.78922C15.1446 1.71773 15.9977 1.79865 16.8249 2.01959C17.9162 2.31202 18.923 2.79064 19.8228 3.49614C20.7192 4.19917 21.4484 5.03674 21.9891 6.03021C22.7158 7.36576 23.067 8.81054 22.9894 10.3228C22.9108 11.8679 22.4482 13.3077 21.5578 14.5966C20.7854 15.7157 19.8129 16.6138 18.6086 17.2424C17.764 17.6832 16.8821 18.0139 15.9007 18.0382C14.2885 18.0785 12.7152 17.8317 11.1597 17.4554C9.97487 17.1694 8.79946 16.8427 7.62654 16.51C7.5413 16.4859 7.45527 16.4624 7.36895 16.4388C6.88459 16.3064 6.39117 16.1714 5.97659 15.9177C5.65675 15.7216 5.41301 15.2793 5.29811 14.898C5.11804 14.3012 5.1449 13.6697 5.45131 13.0396C5.54177 13.0994 5.63077 13.1586 5.71889 13.2172L5.71898 13.2172C5.90314 13.3397 6.08343 13.4596 6.26509 13.5768C7.41613 14.3205 8.65919 14.8473 9.9878 15.1859C11.7949 15.6477 13.613 15.6635 15.4435 15.3632C16.6344 15.1676 17.6093 14.677 18.1803 13.5336C18.5743 12.7452 18.7076 11.9141 18.7419 11.0561C18.8265 8.92969 18.0261 7.1622 16.5418 5.66629C16.3766 5.49955 16.2784 5.25672 16.186 5.02798L16.1603 4.96475C15.6922 3.82432 15.1252 2.74545 14.2089 1.78922ZM11.9724 5.19575C10.8024 5.68777 9.76084 6.32576 8.81872 7.13056C7.40206 8.34199 6.26396 9.76542 5.4835 11.4604C5.24424 11.9807 5.0393 12.5179 4.8468 13.0576C4.37724 14.3768 4.68713 15.552 5.64716 16.5216C7.65077 18.5448 10.0543 19.1803 12.8165 18.4514C12.9692 18.4107 13.1413 18.4083 13.299 18.4291C14.3978 18.5756 15.4976 18.663 16.6039 18.5274C16.6573 18.5208 16.7106 18.5126 16.7647 18.5044L16.7648 18.5043C16.9417 18.4773 17.1276 18.4488 17.3585 18.4678C17.2774 18.5942 17.1981 18.7217 17.1187 18.8492L17.1185 18.8495C16.9422 19.1329 16.7658 19.4163 16.571 19.6867C15.7369 20.8435 14.6371 21.6945 13.3482 22.2729C11.6933 23.0147 9.95384 23.1894 8.17854 22.7947C6.54699 22.4323 5.13431 21.6558 3.98875 20.429C2.73425 19.085 1.98961 17.5027 1.7991 15.6686C1.67623 14.4865 1.69712 13.2964 2.19703 12.2126C2.5895 11.3611 3.11528 10.5558 3.67736 9.80017C4.80452 8.28539 6.13264 6.94289 7.50702 5.64954C7.91734 5.26388 8.34354 4.89555 8.76981 4.52717L8.7703 4.52674C8.89318 4.42055 9.01606 4.31436 9.13856 4.20774C9.20571 4.14866 9.29724 4.09206 9.3833 4.08313C10.4572 3.96844 11.265 4.18193 11.9724 5.19575Z"></path></svg></button></div>';
    coiin[5].innerHTML += '<span class="bimdata-tooltip__text bimdata-tooltip--left bimdata-tooltip--primary bimdata-tooltip--arrow" data-v-4d16179f="" style="right: -68px; top: 8.5px;" >BCF - Annotation</span>';
    });
}
*/
//var coiin = document.getElementsByClassName("button.bimdata-btn bimdata-btn__icon bimdata-btn__fill bimdata-btn__fill--default");
//alert(coiin.length);

