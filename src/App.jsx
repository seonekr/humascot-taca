import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Chat from './components/chat/Chat';
import Header from "./components/header_menu/Header";
import Menu from "./components/header_menu/Menu";
import Login from './components/login_register/Login';
import Register from './components/login_register/Register'
import Product_search from "./components/products/Product_search";
import Cart from './components/cart/Cart'
import Order from "./components/order/Order";
import Product_buy from "./components/products/Product_buy";

function App() {

  return (
    <>
    <Router>
      <Routes >
        <Route path='/humascot-taca/header' element={<Header/>}/>
          <Route path='/humascot-taca/chat' element={<Chat/>}/>
          <Route path='/humascot-taca/' element={<Login/>}/>
          <Route path='/humascot-taca/menu' element={<Menu/>}/>
          <Route path='/humascot-taca/components/login_register/Register' element={<Register/>}/>
          <Route path='/humascot-taca/cart' element={<Cart/>}/>
          <Route path='/humascot-taca/order' element={<Order/>}/>
          <Route path='/humascot-taca/product_search' element={<Product_search/>}/>
          <Route path='/humascot-taca/product_buy' element={<Product_buy/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App 