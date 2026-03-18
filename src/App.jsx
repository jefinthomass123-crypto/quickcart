import Header from './components/header';
import ProductList from './components/ProductList';
import { products } from './data/products';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <ProductList products={products} />
    </div>
  );
}

export default App;