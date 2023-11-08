import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "../user/components/homepage/Home";
import Account from "../user/components/account/Account";
import General from "../user/components/account/General";
import Contact from "../user/components/account/Contact";
import Password from "../user/components/account/Password";
import Payment from "../user/components/cart/Payment";
import SuccessfulBuy from "../user/components/cart/SuccessfulBuy";
import Cart from "../user/components/cart/Cart";
import Address from "../user/components/cart/Address";
import Chatuser from "../user/components/contact/Chatuser";
import Chatroom from "../user/components/contact/Chatroom";
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
import OrderBill from "../admin/components/orderPage/OrderBill";
import MenagerAdmin from "../admin/components/menagerAdmin/MenagerAdmin";
import Product from "../admin/components/products/Product";
import EditAdmin from "../admin/components/addAdmin/EditAdmin";
import AddUser from "../admin/components/addUser/AddUser";
import EditUser from "../admin/components/addUser/EditUser"


const Links = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/account/" Component={Account}/>
                <Route exact path="/account/general/" Component={General}/>
                <Route exact path="/account/contact/" Component={Contact}/>
                <Route exact path="/account/password/" Component={Password}/>
                <Route exact path="/cart/payment/" Component={Payment}/>
                <Route exact path="/cart/address/" Component={Address}/>
                <Route exact path="/chatuser/" Component={Chatuser}/>
                <Route exact path="/chatuser/chatroom/" Component={Chatroom}/>
                <Route exact path="/order/" Component={Order}/>
                <Route exact path="/order/bill/" Component={Bill}/>
                <Route exact path="/categories/" Component={Categories}/>
                <Route exact path="/cart/successfulBuy/" Component={SuccessfulBuy}/>

                {/* Admin routes */}
                <Route exact path="/dashboard/" Component={Dashboard}/>
                <Route exact path="/post/" Component={Post}/>
                <Route exact path="/addadmin/" Component={AddAdmin}/>
                <Route exact path="/message/" Component={Message}/>


                {/*==== phukeo ==== */}

                <Route exact path="/product_search" Component={Product_search}/>
                <Route exact path="/product_search/productdetails" Component={ProductDetails}/>
                <Route exact path="/login" Component={Login}/>
                <Route exact path="/register" Component={Register}/>
                <Route exact path="/cart" Component={Cart}/>

                 {/* Admin routes */}
                 <Route exact path="/menageruser/" Component={MenagerUser}/>
                 <Route exact path="/orderpage/" Component={OrderPage}/>
                 <Route exact path="/orderbill/" Component={OrderBill}/>
                 <Route exact path="/menageradmin/" Component={MenagerAdmin}/>
                 <Route exact path="/product/" Component={Product}/>
                 <Route exact path="/editadmin/" Component={EditAdmin}/>
                 <Route exact path="/adduser/" Component={AddUser}/>
                 <Route exact path="/edituser/" Component={EditUser}/>
            </Routes>
        </Router>
    );
};

export default Links;