<template lang="pug">
.grid-container
  .header
    TopNavigationBar
  .breadcrumb
    Breadcrumb(pageName="Company Data")
  .menu
    LeftMenu
  .main
    router-view(name='default')
  .footer
    Footer

</template>

<script>
import TopNavigationBar from './components/TopNavigationBar.vue';
import LeftMenu from './components/LeftMenu.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    TopNavigationBar,
    LeftMenu,
    Breadcrumb,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
