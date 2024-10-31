const useCurrencyFormatter = () => {
  
  const formatToCurrency = (input) => {
    const number = Number(input) / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);
  };

  return formatToCurrency;
};

export default useCurrencyFormatter;