<template lang="pug">
.grid-container
  .header
    TopNavigationBar
  .breadcrumb
    Breadcrumb(:currentPage="currentPage")
  .menu
    LeftMenu(:currentPage="currentPage")
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

const pageNames = {
  '/': 'Company Data',
  '/CompanyData': 'Company Data',
  '/CompanyPage': 'Company Page',
  '/CompanyTable': 'Company Table',
};

export default {
  name: 'App',
  components: {
    TopNavigationBar,
    LeftMenu,
    Breadcrumb,
    Footer,
  },
  data() {
    return {
      currentPage: '',
    };
  },
  mounted() {
    this.currentPage = pageNames[this.$router.currentRoute.path];
  },
  updated() {
    this.currentPage = pageNames[this.$router.currentRoute.path];
  },
};
</script>

<style lang="scss">
.header {
  grid-area: header;
}
.breadcrumb {
  grid-area: breadcrumb;
  padding-left: 90px;
}
.menu {
  grid-area: menu;
  padding-left: 90px;
}
.main {
  grid-area: main;
  padding-right: 20%;
  padding-left: 20px;
}
.footer {
  padding-top: 100px;
  left: 0;
  bottom: 0;
  width: 100%;
  grid-area: footer;
}
.grid-container {
  display: grid;
  grid-template-areas: 'header header header header header header'
    'breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb'
    'menu main main main main main'
    'footer footer footer footer footer footer';
}
</style>
