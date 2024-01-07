import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/home';
import {Product , ProductDetails ,NotFound ,ProductForm} from './products';
import Mynav from './component/mynav';
import Cart from './products/cart';

function App() {
  return (
    
    <div>
    <Mynav></Mynav>
   
    
    <Routes>

       <Route path='/' element={<Home/>}></Route>
    <Route path='/products' element={<Product/>}></Route>
    <Route path='/products/:id' element={<ProductDetails/>}></Route>
    <Route path='/products/:id/edit' element={<ProductForm/>}></Route>
    <Route path='/products/cart' element={<Cart/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>

    </Routes>
    </div>
    


  );
}

export default App;
