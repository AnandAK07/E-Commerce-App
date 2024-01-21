import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navbar';
import { HomePage } from './pages/HomePage';
import { Product } from './customer/components/product/Product';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePage/>
        {/* <Product/> */}
      </div>
    </div>
  );
}

export default App;
