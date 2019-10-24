import './styles/main.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router'

new Vue({
  render: createElement => createElement(App),
  el: '#app',
  router,
});
