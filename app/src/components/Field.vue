<template lang='pug'>
.field
  a.name {{ name }}
  div(v-if="type === 'textarea'")
    textarea.input(
      :placeholder="placeholder"
      @click="show()"
      :value="value"
    )
    .error-message(v-if="error") {{error}}
  div(v-else)
    input.input(
      :placeholder="placeholder"
      :type="type"
      :value="value"
      :class="error ? 'error-border-field' : ''"
      @input="updateValue($event.target.value)"
      @blur="emitBlur"
    )
    .error-message(v-if="error") {{error}}
</template>

<script>

export default {
  props: {
    name: {
      required: true,
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
    show: {
      type: Function,
      default: () => {},
    },
    blur: {
      type: Function,
      default: () => {},
    },
    value: {
      required: true,
      type: String,
    },
    error: {
      required: false,
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
    emitBlur(value) {
      this.$emit('blur', value);
    },
  },
};
</script>

<style scoped lang='scss'>
.input {
  padding: 12px 15px;
  margin: 6px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-sizing: border-box;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
input[type=text] {
  width: 40%;
}
input.error-border-field {
  border: 1px solid red;
}
textarea {
  width: 98%;
  height: 170px;
}
.name {
  text-transform: uppercase;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 12px;
  color: #999999;
}
.field {
  margin: 15px 0;
}
.error-message {
  height: 20px;
  font-size: 12px;
  margin-top: 4px;
  text-align: left;
  padding-left: 4px;
  color: red;
  text-transform: capitalize;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
</style>
