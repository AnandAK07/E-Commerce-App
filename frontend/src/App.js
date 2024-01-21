import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navbar';
import { HomePage } from './pages/HomePage';
import { Product } from './customer/components/product/Product';
import { Footer } from './customer/components/footer/Footer';
import { ProductDetails } from './customer/components/productDetails/ProductDetails';

function App() {
  return (
    <div>
      <Navigation/>
      <div>
        {/* <HomePage/> */}
      </div>
      <Product/>
      {/* <ProductDetails/> */}
      <Footer/>
    </div>
  );
}

export default App;
