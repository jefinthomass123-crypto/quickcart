import '../styles/CartSidebar.css';

function CartSidebar({ cart, isOpen, onClose }) {
  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      
      <button onClick={onClose}>Close</button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default CartSidebar;