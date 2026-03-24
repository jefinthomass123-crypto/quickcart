import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import ProductList from '../components/ProductList.jsx';
import { products } from '../data/products.js';

function Category() {
  const { categoryName } = useParams();
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter(
    p => p.category === categoryName
  );

  return (
    <div>
      <h2>{categoryName}</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ProductList products={filteredProducts} addToCart={addToCart} />
      )}
    </div>
  );
}

export default Category;
