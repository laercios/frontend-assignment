/* eslint-disable */
import { requiredValidation } from './Validation.js';

describe('./Validation.js', () => {
  test('requiredValidation is not correctly', () => {
    const messageValidation = requiredValidation('', 'FieldName');
    expect(messageValidation).toBe('FieldName is required');
  });
  test('requiredValidation is correctly', () => {
    const messageValidation = requiredValidation('Company Name', 'FieldName');
    expect(messageValidation).toBe('');
  });
});
