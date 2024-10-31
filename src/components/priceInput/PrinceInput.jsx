import { useState } from 'react';
import useCurrencyFormatter from '../hooks/useCurrencyConverter';

const PriceInput = () => {
  const [price, setPrice] = useState(500);

  const formatToCurrency = useCurrencyFormatter();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPrice(value);
  };

  return (
    <input
      value={formatToCurrency(price)}
      onChange={handleChange}
      placeholder="Enter price"
      className="w-100 border-0 mb-2"
      type="text"
    />
  );
}

export default PriceInput;