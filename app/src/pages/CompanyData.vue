<template lang="pug">
.grid-container
  .header
    TopNavigationBar
  .breadcrumb
    Breadcrumb
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
}
.menu {
  grid-area: menu;
}
.main {
  grid-area: main;
}
.right {
  grid-area: right;
}
.footer {
  grid-area: footer;
}
.grid-container {
  display: grid;
  grid-template-areas: 'header header header header header header'
    'breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb breadcrumb'
    'menu main main main main main'
    'footer footer footer footer footer footer';
  background-color: #2196F3;
  & > div {
    padding: 5px;
  }
}
</style>
