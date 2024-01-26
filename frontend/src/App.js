import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navbar';
import { HomePage } from './pages/HomePage';
import { Product } from './customer/components/product/Product';
import { Footer } from './customer/components/footer/Footer';
import { ProductDetails } from './customer/components/productDetails/ProductDetails';
import { Cart } from './customer/components/cart/Cart';
import { Checkout } from './customer/components/checkout/Checkout';
import { Order } from './customer/components/order/Order';

function App() {
  return (
    <div>
      <Navigation/>
      <div>
        {/* <HomePage/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      <Order/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
