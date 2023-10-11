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
import Order from "./component/order/Order";
import Bill from "./component/order/Bill";
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
          <Route exact path="/humascot-taca/order" Component={Order}/>
          <Route exact path="/humascot-taca/order/bill" Component={Bill}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App 
