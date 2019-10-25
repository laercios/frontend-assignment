<template lang='pug'>
div
  modal(name="notes")
    .container-modal
      .close-modal(@click.stop="hide()")
        span x
      Field(
        name="Notes"
        placeholder="e.g. Good Tech Company"
        type="textarea"
        v-model="companyNotes"
      )
      button SAVE

  .container
    a
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien mauris,
      | mattis non posuere dictum, fermentum in justo. Mauris molestie erat vitae
      | sem dictum tincidunt. In hac habitasse platea dictumst. Quisque quis
      | vulputate lorem. Quisque pellentesque sodales dui, non molestie ex ornare non.
    Field(
      name="Company Name"
      placeholder="e.g. Your Company Name"
      type="text"
      v-model="companyName"
    )
    Field(
      name="Company Spend"
      placeholder="e.g. $150,000"
      type="text"
      v-model="companySpend"
    )
    Field(
      name="Company Spend Ability"
      placeholder="e.g. $150,000 - $330,000"
      type="text"
      v-model="companySpendAbility"
    )
    Field(
      name="Notes"
      placeholder="e.g. Good Tech Company"
      type="textarea"
      :show="show"
      v-model="companyNotes"
    )
</template>

<script>
import Field from './Field.vue';
import store from '../store';

export default {
  components: {
    Field,
  },
  data() {
    return {
      companyName: '',
      companySpend: '',
      companySpendAbility: '',
      companyNotes: '',
    };
  },
  updated() {
    store.dispatch('form/setCompanyName', this.companyName);
    store.dispatch('form/setCompanySpend', this.companySpend);
    store.dispatch('form/setCompanySpend', this.companySpendAbility);
    store.dispatch('form/setCompanyNotes', this.companyCompanyNotes);
  },
  methods: {
    show() {
      this.$modal.show('notes');
    },
    hide() {
      this.$modal.hide('notes');
    },
  },
};
</script>

<style scoped lang='scss'>
.container {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.close-modal {
  float: right;
  cursor:pointer;
}
button {
  float: right;
  text-transform: uppercase;
}
.container-modal {
 padding: 10px;
}
</style>
