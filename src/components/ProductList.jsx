import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className='products'>
      {products.map(p => (
        <div key={p.id} className='product-card'>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
