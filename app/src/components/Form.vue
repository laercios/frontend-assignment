<template lang='pug'>
.container
  Field(
    name="Company Name"
    placeholder="e.g. Your Company Name"
    type="text"
  )
  Field(
    name="Company Spend"
    placeholder="e.g. $150,000"
    type="text"
  )
  Field(
    name="Company Spend Ability"
    placeholder="e.g. $150,000 - $330,000"
    type="text"
  )
  Field(
    name="Notes"
    placeholder="e.g. Good Tech Company"
    type="textarea"
  )
</template>

<script>
import Field from './Field.vue';

export default {
  components: {
    Field,
  },
};
</script>

<style scoped lang='scss'>
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
