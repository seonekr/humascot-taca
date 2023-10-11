import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./component/homepage/Home";
import Account from "./component/account/Account";
import General from "./component/account/General";
import Contact from "./component/account/Contact";
import Password from "./component/account/Password";
import Payment from "./component/cart/Payment";
import Cart from "./component/cart/Cart";
import Address from "./component/cart/Address";
import Chatuser from "./component/chat/Chatuser";
import Chatroom from "./component/chat/Chatroom";
import Chat from './components/chat/Chat';
import Header from "./components/header_menu/Header";
import Menu from "./components/header_menu/Menu";
import Login from './components/login_register/Login';
import Register from './components/login_register/Register'
import Product_search from "./components/products/Product_search";
import Order from "./components/order/Order";
import Product_buy from "./components/products/Product_buy";
function App() {
  return (
    <div id="font">
      <Router>
        <Routes >
          <Route exact path="/humascot-taca" Component={Home}/>
          <Route exact path="/humascot-taca/account/" Component={Account}/>
          <Route exact path="/humascot-taca/account/general/" Component={General}/>
          <Route exact path="/humascot-taca/account/contact/" Component={Contact}/>
          <Route exact path="/humascot-taca/account/password/" Component={Password}/>
          <Route exact path="/humascot-taca/payment/" Component={Payment}/>
          <Route exact path="/humascot-taca/cart/" Component={Cart}/>
          <Route exact path="/humascot-taca/cart/address/" Component={Address}/>
          <Route exact path="/humascot-taca/chatuser/" Component={Chatuser}/>
          <Route exact path="/humascot-taca/chatuser/chatroom/" Component={Chatroom}/>
          <Route path='/humascot-taca/chat' element={Chat}/>
          <Route path='/humascot-taca/' element={Login}/>
          <Route path='/humascot-taca/menu' element={Menu}/>
          <Route path='/humascot-taca/components/login_register/Register' element={Register}/>
          <Route path='/humascot-taca/order' element={Order}/>
          <Route path='/humascot-taca/product_search' element={Product_search}/>
          <Route path='/humascot-taca/product_buy' element={Product_buy}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App 