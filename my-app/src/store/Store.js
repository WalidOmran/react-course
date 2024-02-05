import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Cart from './pages/Cart'
import Login from './pages/Login';
import Register from './pages/Register';
import Faq from './pages/Faq';
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';
import './css/main.css';
function Store (){
    return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/' element={<Faq/>}/> */}
        <Route path='/store/cart' element={<Cart/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/store/category/:categoryName' element={<Category/>} />
        <Route path='/store/products/:productId' element={<SingleProduct/>} />
      </Routes>
  
    );
}
export default Store 