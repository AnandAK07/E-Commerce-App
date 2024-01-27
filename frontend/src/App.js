
import './App.css';
import Navigation from './customer/components/navigation/Navbar';
import { HomePage } from './pages/HomePage';
import { Product } from './customer/components/product/Product';
import { Footer } from './customer/components/footer/Footer';
import { ProductDetails } from './customer/components/productDetails/ProductDetails';
import { Cart } from './customer/components/cart/Cart';
import { Checkout } from './customer/components/checkout/Checkout';
import { Order } from './customer/components/order/Order';
import { OrderDetails } from './customer/components/order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import { CustomerRouters } from './routes/CustomerRouters';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters />} />
      </Routes>
    </div>
  );
}

export default App;
