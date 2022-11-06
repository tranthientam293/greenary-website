const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (number) => {
  return CURRENCY_FORMAT.format(number);
};

export default formatCurrency;
