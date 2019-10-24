import './styles/main.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({// eslint-disable-line no-new
  el: '#app',
  render: createElement => createElement(App),
  router,
});
