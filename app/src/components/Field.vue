<template lang='pug'>
div
  a {{ name }}
  div
  input(:placeholder="placeholder")
</template>

<script>
export default {
  props: ['name', 'placeholder']
};
</script>

<style scoped lang='scss'>
// .container
</style>
