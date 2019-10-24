<template lang='pug'>
  h4.location HOME / {{ pageName }}
</template>
<script>
export default {
  props: {
    pageName: {
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
