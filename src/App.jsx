import Header from './components/header';
import ProductList from './components/ProductList';
import { products } from './data/products';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        {products && products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <p>No products available</p>
        )}
      </main>
    </div>
  );
}

export default App;