import 'Styles/main.scss';
import Vue from 'vue';
import Main from 'Components/Main.vue';

new Vue({
  render: createElement => createElement(Main),
  el: '#app'
});
