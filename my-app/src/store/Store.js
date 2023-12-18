import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';
import './css/main.css';
function Store (){
    return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/category/:categoryName' element={<Category/>} />
        <Route path='/products/:productId' element={<SingleProduct/>} />
      </Routes>
  
    );
}
export default Store 