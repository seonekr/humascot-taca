
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Cart from "./component/cart/Cart";
import Chat from './components/chat/Chat';
import Menu from "./components/header_menu/Menu";
import Login from './components/login_register/Login';
import Register from './components/login_register/Register';
import Product_search from "./components/products/Product_search";
import Order from "./components/order/Order";
import Header from "./components/header_menu/Header";
// import ProductDetails from "./components/products/ProductDetails";

function App() {
  return (
    <>
    <Router>
      <Routes >
        <Route path='/humascot-taca/header' element={<Header/>}/>
          <Route path='/humascot-taca/chat' element={<Chat/>}/>
          <Route path='/humascot-taca' element={<Login/>}/>
          <Route path='/humascot-taca/menu' element={<Menu/>}/>
          <Route path='/humascot-taca/register' element={<Register/>}/>
          <Route path='/humascot-taca/cart' element={<Cart/>}/>
          <Route path='/humascot-taca/order' element={<Order/>}/>
          <Route path='/humascot-taca/product_search' element={<Product_search/>}/>
          {/* <Route path='/humascot-taca/productDetails' element={<ProductDetails/>}/> */}

      </Routes>
    </Router>
    </>

  )
}

export default App 