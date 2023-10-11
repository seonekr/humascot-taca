import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "../homepage/Home";
import Account from "../account/Account";
import General from "../account/General";
import Contact from "../account/Contact";
import Password from "../account/Password";
import Payment from "../cart/Payment";
import Cart from "../cart/Cart";
import Address from "../cart/Address";
import Chatuser from "../chat/Chatuser";
import Chatroom from "../chat/Chatroom";
import Order from "../order/Order";
import Bill from "../order/Bill";
const Links = () => {
    return(
        <>
        <Router>
            <Routes>
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
        </>
    );
};

export default Links;