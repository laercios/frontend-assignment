import './styles/main.scss';
import Vue from 'vue';
import VModal from 'vue-js-modal';
import App from './App.vue';
import router from './router';

Vue.use(VModal);

new Vue({// eslint-disable-line no-new
  el: '#app',
  render: createElement => createElement(App),
  router,
});
