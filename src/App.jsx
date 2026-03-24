import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { CartContext } from './context/CartContext.jsx';

import Home from './pages/Home.jsx';
import CartPage from './pages/CartPage.jsx';
import Category from './pages/Category.jsx';

function App() {
  const { getTotalItems } = useContext(CartContext);

  return (
    <div>
      <h1>QuickCart 🚀</h1>

      <nav style={{margin:'10px'}}>
        <Link to="/" style={{marginRight:'10px'}}>Home</Link>
        <Link to="/cart" style={{marginRight:'10px'}}>Cart ({getTotalItems()})</Link>
        <Link to="/category/Electronics" style={{marginRight:'10px'}}>Electronics</Link>
        <Link to="/category/Home">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
