<template lang='pug'>
.container
  a.text 
    | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien mauris, 
    | mattis non posuere dictum, fermentum in justo. Mauris molestie erat vitae 
    | sem dictum tincidunt. In hac habitasse platea dictumst. Quisque quis 
    | vulputate lorem. Quisque pellentesque sodales dui, non molestie ex ornare non.
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
.text {
  width: 60%;
}
</style>
