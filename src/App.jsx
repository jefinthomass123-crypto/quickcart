import { useState } from "react";
import Header from './components/header';
import ProductList from './components/ProductList';
import { products } from './data/products';
import './styles/App.css';

function App() {

  // ✅ ADD THIS
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ ADD THIS
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="app">

      {/* ✅ PASS PROP */}
      <Header />

      <main className="main-content">
        {products && products.length > 0 ? (
          <ProductList products={products} addToCart={addToCart} />
        ) : (
          <p>No products available</p>
        )}
      </main>
    </div>
  );
}

export default App;