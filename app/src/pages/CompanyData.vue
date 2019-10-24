<template lang="pug">
.grid-container
  .header
    TopNavigationBar
  .breadcrumb
    Breadcrumb(pageName="Company Data")
  .menu
    LeftMenu
  .main
    Form
  .footer
    Footer
</template>

<script>
import TopNavigationBar from '../components/TopNavigationBar.vue';
import Form from '../components/Form.vue';
import LeftMenu from '../components/LeftMenu.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'App',
  components: {
    TopNavigationBar,
    Form,
    LeftMenu,
    Breadcrumb,
    Footer,
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
