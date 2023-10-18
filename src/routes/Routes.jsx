import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

/* ========= Phukeo ========= */
import Login from "../user/components/login_register/Login";
import Register from "../user/components/login_register/Register";
// import Chat from "../user/components/chat/Chat";
import Order from "../user/components/order/Order";
import Product_search from "../user/components/products/Product_search";
import ProductDetails from "../user/components/products/ProductDetails";
import MenagerUser from "../admin/components/menagerUser/MenagerUser";
import OrderPage from "../admin/components/orderPage/OrderPage";
import MenagerAdmin from "../admin/components/menagerAdmin/MenagerAdmin";
import OrderPaid from "../admin/components/orderPage/OrderPaid";

const Links = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/humascot-taca" Component={Home} />
        <Route exact path="/humascot-taca/account" Component={Account} />
        <Route
          exact
          path="/humascot-taca/account/general"
          Component={General}
        />
        <Route
          exact
          path="/humascot-taca/account/contact"
          Component={Contact}
        />
        <Route
          exact
          path="/humascot-taca/account/password"
          Component={Password}
        />
        <Route exact path="/humascot-taca/payment" Component={Payment} />
        <Route exact path="/humascot-taca/cart" Component={Cart} />
        <Route exact path="/humascot-taca/cart/address" Component={Address} />
        <Route exact path="/humascot-taca/chatuser" Component={Chatuser} />
        <Route
          exact
          path="/humascot-taca/chatuser/chatroom"
          Component={Chatroom}
        />
        <Route exact path="/humascot-taca/order" Component={Order} />
        <Route exact path="/humascot-taca/order/bill" Component={Bill} />

        {/* Admin routes */}
        <Route exact path="/humascot-taca/admin" Component={Dashboard} />
        <Route exact path="/humascot-taca/admin/post" Component={Post} />
        <Route
          exact
          path="/humascot-taca/admin/addadmin"
          Component={AddAdmin}
        />

        {/*==== phukeo ==== */}
        <Route
          exact
          path="/humascot-taca/product_search"
          Component={Product_search}
        />
        <Route
          exact
          path="/humascot-taca/product_search/productdetails"
          Component={ProductDetails}
        />
        <Route exact path="/humascot-taca/login" Component={Login} />
        <Route exact path="/humascot-taca/register" Component={Register} />

        {/* Admin routes */}
        <Route
          exact
          path="/humascot-taca/admin/menagerUser"
          Component={MenagerUser}
        />
        <Route
          exact
          path="/humascot-taca/admin/orderPage"
          Component={OrderPage}
        />
        <Route
          exact
          path="/humascot-taca/admin/menagerAdmin"
          Component={MenagerAdmin}
        />
        <Route
          exact
          path="/humascot-taca/admin/orderPaid"
          Component={OrderPaid}
        />
      </Routes>
    </Router>
  );
};

export default Links;
