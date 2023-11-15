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
import Contacts from "../user/components/contact/Contact";
import Bill from "../user/components/order/Bill";
import Dashboard from "../admin/Dashboard";
import Post from "../admin/components/post/Post";
import Categories from "../user/components/categories/Categories";

/* ========= Phukeo ========= */
import Login from '../user/components/login_register/Login';
import Register from "../user/components/login_register/Register";
import Order from "../user/components/order/Order";
import Product_search from "../user/components/products/Product_search";
import ProductDetails from "../user/components/products/ProductDetails";
import OrderPage from "../admin/components/orderPage/OrderPage";
import OrderBill from "../admin/components/orderPage/OrderBill";
import Admins from "../admin/components/menagerAdmin/Admins";
import Product from "../admin/components/products/Product";
import Dialog from "../admin/components/menagerUser/Dialog";

// ===============================
import Users from "../admin/components/menagerUser/users";
import User from "../admin/components/menagerUser/User";
import Admin from "../admin/components/menagerAdmin/admin";
import AddAdmin from "../admin/components/menagerAdmin/AddAdmin";


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
                <Route exact path="/contacts/" Component={Contacts}/>
                <Route exact path="/order/" Component={Order}/>
                <Route exact path="/order/bill/" Component={Bill}/>
                <Route exact path="/categories/" Component={Categories}/>
                <Route exact path="/cart/successfulBuy/" Component={SuccessfulBuy}/>

                {/*==== phukeo ==== */}
                <Route exact path="/product_search" Component={Product_search}/>
                <Route exact path="/product_search/productdetails" Component={ProductDetails}/>
                <Route exact path="/login" Component={Login}/>
                <Route exact path="/register" Component={Register}/>
                <Route exact path="/cart" Component={Cart}/>

                {/* Admin routes */}
                <Route exact path="/dashboard/" Component={Dashboard}/>
                <Route exact path="/post/" Component={Post}/>
                <Route exact path="/users/" Component={Users}/>
                <Route exact path="/orderpage/" Component={OrderPage}/>
                <Route exact path="/orderbill/" Component={OrderBill}/>
                <Route exact path="/product/" Component={Product}/>
                <Route exact path="/dialog/" Component={Dialog}/>
                <Route exact path="/users/user/" Component={User}/>
                <Route exact path="/admins/" Component={Admins}/>
                <Route exact path="/admins/admin/" Component={Admin}/>
                <Route exact path="/addadmin/" Component={AddAdmin}/>
            </Routes>
        </Router>
    );
};

export default Links;