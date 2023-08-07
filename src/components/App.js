
import { HashRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import AllProducts from './AllProducts';
import Navigation from './Navigation';
import AddProduct from './AddProduct';
import Cart from './Cart';
import ProductDetails from './ProductDetails';

function App() {

  return (
    <div className="App">
     <HashRouter>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" Component={AllProducts}/>
          <Route exact path="/AddProduct" Component={AddProduct}/>
          <Route exact path='/cart' Component={Cart}/>
          <Route exact path='/productDetails/:id' Component={ProductDetails}/>
        </Routes>
      </div>
     </HashRouter>
    </div>
  );
}

export default App;
