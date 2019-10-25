export const requiredMessage = fieldName => `${fieldName} is required`;
export const minMessage = (fieldName, min) => `${fieldName} must be bigger than ${min}`;
export const maxMessage = (fieldName, max) => `${fieldName} mustn't be bigger than ${max}`;

export const requiredValidation = (value, fieldName) => {
  if (value && value.length !== 0) {
    return '';
  }
  return requiredMessage(fieldName);
};

export const minimumValidation = (value, min, fieldName) => {
  if (value && value.replace(',', '').replace('$', '') > min) {
    return '';
  }
  return minMessage(fieldName, min);
};

export const maximumValidation = (value, max, fieldName) => {
  if (value && value.replace(',', '').replace('$', '') < max) {
    return '';
  }
  return maxMessage(fieldName, max);
};

export const spendAbilityValidation = (value) => {
  const values = value.replace(',', '').replace('.', '').split('-');
  if (values.length < 2 || values.length > 2) {
    return 'Company Spend Ability must have 2 values ​​separated by -';
  } if (parseFloat(values[0]) > parseFloat(values[1])) {
    return 'First value must be less than the second';
  }
  return '';
};
