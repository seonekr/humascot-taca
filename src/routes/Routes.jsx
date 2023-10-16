import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "../components/homepage/Home";
import Account from "../components/account/Account";
import General from "../components/account/General";
import Contact from "../components/account/Contact";
import Password from "../components/account/Password";
import Payment from "../components/cart/Payment";
import Cart from "../components/cart/Cart";
import Address from "../components/cart/Address";
import Chatuser from "../components/chat/Chatuser";
import Chatroom from "../components/chat/Chatroom";
import Order from "../components/order/Order";
import Bill from "../components/order/Bill";
import Dashboard from "../admin/Dashboard";
import Post from "../admin/components/post/Post";
import AddAdmin from "../admin/components/addAdmin/AddAdmin";

const UserLink = () => {
    return(
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

                {/* Admin routes */}
                <Route exact path="/humascot-taca/admin" Component={Dashboard}/>
                <Route exact path="/humascot-taca/admin/post" Component={Post}/>
                <Route exact path="/humascot-taca/admin/addadmin" Component={AddAdmin}/>
            </Routes>
        </Router>
    );
};

export default UserLink;