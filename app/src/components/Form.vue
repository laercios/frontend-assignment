<template lang='pug'>
div
  modal(name="notes")
    .container-modal
      .close-modal(@click.stop="hide()")
        span x
      Field(
        name="Additional Notes"
        placeholder="e.g. Good Tech Company"
        type="textarea"
        v-model="companyNotes"
        :error="companyNotesError"
        @blur="blur('companyNotes')"
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
      :error="companyNameError"
      @blur="blur('companyName')"
    )
    Field(
      name="Company Spend"
      placeholder="e.g. $150,000"
      type="text"
      v-model="companySpend"
      :error="companySpendError"
      @blur="blur('companySpend')"
    )
    Field(
      name="Company Spend Ability"
      placeholder="e.g. $150,000 - $330,000"
      type="text"
      v-model="companySpendAbility"
      :error="companySpendAbilityError"
      @blur="blur('companySpendAbility')"
    )
    Field(
      name="Notes"
      placeholder="e.g. Good Tech Company"
      type="textarea"
      :show="show"
      v-model="companyNotes"
      :error="companyNotesError"
      @blur="blur('companyNotes')"
    )
</template>

<script>
import Field from './Field.vue';
import store from '../store';
import {
  requiredValidation,
  minimumValidation,
  spendAbilityValidation,
} from '../utils/Validation';
import {
  currencyFormatter,
  dualCurrencyFormatter,
} from '../utils/Formatter';

export default {
  components: {
    Field,
  },
  data() {
    return {
      companyName: '',
      companyNameError: '',
      companySpend: '',
      companySpendError: '',
      companySpendAbility: '',
      companySpendAbilityError: '',
      companyNotes: '',
      companyNotesError: '',
    };
  },
  methods: {
    show() {
      this.$modal.show('notes');
    },
    hide() {
      this.$modal.hide('notes');
    },
    blur(field) {
      if (field === 'companyName') {
        this.companyNameError = requiredValidation(
          this.companyName,
          'Company Name',
        );
        if (this.companyNameError === '') {
          store.dispatch('form/setCompanyName', this.companyName);
        }
      } else if (field === 'companySpend') {
        this.companySpendError = requiredValidation(
          this.companySpend,
          'Company Spend',
        );
        if (this.companySpendError === '') {
          this.companySpendError = minimumValidation(
            this.companySpend,
            0,
            'Company Spend',
          );
          if (this.companySpendError === '') {
            this.companySpend = currencyFormatter(this.companySpend);
            store.dispatch('form/setCompanySpend', this.companySpend);
          }
        }
      } else if (field === 'companySpendAbility') {
        this.companySpendAbilityError = requiredValidation(this.companySpendAbility, 'Company Spend Ability');
        if (this.companySpendAbilityError === '') {
          this.companySpendAbilityError = spendAbilityValidation(this.companySpendAbility);
          if (this.companySpendAbilityError === '') {
            this.companySpendAbility = dualCurrencyFormatter(this.companySpendAbility);
            store.dispatch(
              'form/setCompanySpendAbility',
              this.companySpendAbility,
            );
          }
        }
      } else if (field === 'companyCompanyNotes') {
        this.companySpendNotesError = requiredValidation(
          this.companySpendNotes,
          'Company Notes',
        );
        if (this.companySpendNotesError === '') {
          store.dispatch(
            'form/setCompanySpendNotes',
            this.companySpendNotes,
          );
        }
      }
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
