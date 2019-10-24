<template lang='pug'>
.field
  a.name {{ name }}
  div
  input(:placeholder="placeholder" :type="type")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
};
</script>

<style scoped lang='scss'>
input {
  padding: 12px 15px;
  margin: 6px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text] {
  width: 40%;
}
input[type=text] {
  width: 40%;
}
.name {
  text-transform: uppercase;
  font-size: 12px;
  color: #999999;
}
.field {
  margin: 15px 0;
}
</style>
