import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "../user/components/homepage/Home";
import Account from "../user/components/account/Account";
import General from "../user/components/account/General";
import Contact from "../user/components/account/Contact";
import Password from "../user/components/account/Password";
import Payment from "../user/components/cart/Payment";
import Cart from "../user/components/cart/Cart";
import Address from "../user/components/cart/Address";
import Chatuser from "../user/components/chat/Chatuser";
import Chatroom from "../user/components/chat/Chatroom";
import Bill from "../user/components/order/Bill";
import Dashboard from "../admin/Dashboard";
import Post from "../admin/components/post/Post";
import AddAdmin from "../admin/components/addAdmin/AddAdmin";
import Message from "../admin/components/messages/Message";
import Categories from "../user/components/categories/Categories";

/* ========= Phukeo ========= */


import Login from '../user/components/login_register/Login';
import Register from "../user/components/login_register/Register";
import Order from "../user/components/order/Order";
import Product_search from "../user/components/products/Product_search";
import ProductDetails from "../user/components/products/ProductDetails";
import MenagerUser from "../admin/components/menagerUser/MenagerUser";
import OrderPage from "../admin/components/orderPage/OrderPage";
import OrderBill from "../admin/components/orderPage/OrderBill"
import LoginAdmin from "../admin/components/registeradmin/LoginAdmin"
import MenagerAdmin from "../admin/components/menagerAdmin/MenagerAdmin";


const Links = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/humascot-taca" Component={Home}/>
                <Route exact path="/humascot-taca/account/" Component={Account}/>
                <Route exact path="/humascot-taca/account/general/" Component={General}/>
                <Route exact path="/humascot-taca/account/contact/" Component={Contact}/>
                <Route exact path="/humascot-taca/account/password/" Component={Password}/>
                <Route exact path="/humascot-taca/cart/payment/" Component={Payment}/>
       
                <Route exact path="/humascot-taca/cart/address/" Component={Address}/>
                <Route exact path="/humascot-taca/chatuser/" Component={Chatuser}/>
                <Route exact path="/humascot-taca/chatuser/chatroom/" Component={Chatroom}/>
                <Route exact path="/humascot-taca/order" Component={Order}/>
                <Route exact path="/humascot-taca/order/bill" Component={Bill}/>
                <Route exact path="/humascot-taca/categories" Component={Categories}/>

                {/* Admin routes */}
                <Route exact path="/humascot-taca/admin/dashboard" Component={Dashboard}/>
                <Route exact path="/humascot-taca/admin/post" Component={Post}/>
                <Route exact path="/humascot-taca/admin/addadmin" Component={AddAdmin}/>
                <Route exact path="/humascot-taca/admin/message" Component={Message}/>

                {/*==== phukeo ==== */}
                <Route exact path="/humascot-taca/product_search/" Component={Product_search}/>
                <Route exact path="/humascot-taca/product_search/productdetails/" Component={ProductDetails}/>
                <Route exact path="/humascot-taca/login/" Component={Login}/>
                <Route exact path="/humascot-taca/register/" Component={Register}/>
                <Route exact path="/humascot-taca/cart/" Component={Cart}/>

                 {/* Admin routes */}
                 <Route exact path="/humascot-taca/admin/menageruser" Component={MenagerUser}/>
                 <Route exact path="/humascot-taca/admin/orderpage" Component={OrderPage}/>
                 <Route exact path="/humascot-taca/admin/orderbill" Component={OrderBill}/>
                 <Route exact path="/humascot-taca/admin/menageradmin" Component={MenagerAdmin}/>
                 <Route exact path="/humascot-taca/admin" Component={LoginAdmin}/>

            </Routes>
        </Router>
    );
};

export default Links;