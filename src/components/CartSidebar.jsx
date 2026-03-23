import '../styles/CartSidebar.css';

function CartSidebar({
  cart,
  isOpen,
  onClose,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {
  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      
      <button onClick={onClose}>Close</button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>

            {/* ➖ ➕ */}
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>

            {/* Total */}
            <p>Total: ${item.price * item.quantity}</p>

            {/* Remove */}
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}

    </div>
  );
}

export default CartSidebar;