/* eslint-disable */
import { currencyFormatter } from './Formatter.js';

describe('./Formatter.js', () => {
  test('currencyFormatter is correctly', () => {
    const valueFormated = currencyFormatter('1123');
    expect(valueFormated).toBe('$ 1,123.00');
  });
});
