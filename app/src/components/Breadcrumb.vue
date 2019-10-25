<template lang='pug'>
  h4.location HOME / {{ currentPage }}
</template>
<script>
export default {
  props: {
    currentPage: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped lang='scss'>
.location{
  text-transform: uppercase;
  font-size: 12px;
  color: #999999;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
</style>
