
import { HashRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import AllProducts from './AllProducts';
import Navigation from './Navigation';
import AddOrEditProduct from './AddOrEditProduct';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import { PageNotFound } from './PageNotFound';

function App() {

  return (
    <div className="App">
     <HashRouter>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" Component={AllProducts}/>
          <Route exact path="/AddOrEditProduct" Component={AddOrEditProduct}/>
          <Route exact path='/cart' Component={Cart}/>
          <Route exact path='/productDetails/:id' Component={ProductDetails}/>
          <Route path='*' Component={PageNotFound}/>
        </Routes>
      </div>
     </HashRouter>
    </div>
  );
}

export default App;
