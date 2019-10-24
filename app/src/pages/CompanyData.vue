<template lang="pug">
Form
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'CompanyData',
  components: {
    Form,
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
