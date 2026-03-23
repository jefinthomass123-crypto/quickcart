function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">

        {/* LEFT SIDE */}
        <div className="header-left">
          <h1 className="header-title">🛒 QuickCart</h1>
          <p className="header-subtitle">
            Your one-stop shop for everything
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="cart-icon" onClick={onCartClick}>
          🛒
          <span className="cart-count">{cartCount}</span>
        </div>

      </div>
    </header>
  );
}

export default Header;