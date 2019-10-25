export const currencyFormatter = (value) => {
  let currency = value.replace(',', '').replace('$','');
  currency = parseFloat(currency);
  return `$ ${currency.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
};

export const dualCurrencyFormatter = (value) => {
  const values = value.split('-');
  return `${currencyFormatter(values[0])} -  ${currencyFormatter(values[1])}`;
};
