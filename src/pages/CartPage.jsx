import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeItem, getTotalItems, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Page</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id}>
              {item.name} (x{item.quantity})
              <br />
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}

          <h3>Total Items: {getTotalItems()}</h3>
          <h2>Total Price: ₹{getTotalPrice()}</h2>
        </>
      )}
    </div>
  );
}

export default CartPage;
