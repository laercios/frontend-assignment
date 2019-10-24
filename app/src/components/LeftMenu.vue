<template lang='pug'>
.vertical-menu
  a.first.active Company Data
  a Company Table
  a.last Company Page
</template>

<script>
export default{};
</script>

<style scoped lang='scss'>
.vertical-menu {
  width: 200px;
  border-radius: 5px;
  text-transform: uppercase;
  border: 1px solid #ccc;
  font-size: 12px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;

  a {
    color: #323E75;
    display: block;
    padding: 12px;
    text-decoration: none;

    &:hover {
      background-color: #EEEEEE;
    }

    &.active {
      border-left: 3px solid #323E75;
      background-color: #EEEEEE;
    }

    &.first {
      border-top-left-radius: 5px;
    }
    &.last {
      border-bottom-left-radius: 5px;
    }
  }
}
</style>
