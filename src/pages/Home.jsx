import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import ProductList from '../components/ProductList.jsx';
import { products } from '../data/products.js';

function Home() {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = products.filter(p => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || p.category === category)
    );
  });

  return (
    <div>
      <input
        type='text'
        placeholder='Search products...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
        <option value="Home">Home</option>
      </select>

      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
}

export default Home;
