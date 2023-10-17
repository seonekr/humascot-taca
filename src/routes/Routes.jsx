
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header_menu/Header";
import Menu from "../components/header_menu/Menu";
import ProductDetails from "../components/products/ProductDetails";
import Cart from '../user/components/cart/Cart';
import Login from '../user/components/login_register/Login';
import Register from '../user/components/login_register/Register'
import Chat from "../user/components/chat/Chat";
import Order from "../user/components/order/Order";
import Product_search from "../user/components/products/Product_search";
import ProductDetails from "../user/components/products/ProductDetails";
import MenagerUser from "../admin/components/menagerUser/MenagerUser"
import OrderPage from "../admin/components/orderPage/OrderPage"
import MenagerAdmin from "../admin/components/menagerAdmin/MenagerAdmin"
import OrderPaid from "../admin/components/orderPage/OrderPaid";

const Links = () => {
    return(
        <Router>
            <Routes >
                <Route  exact  path='/humascot-taca/header' Component={Header}/>
                <Route  exact  path='/humascot-taca/chat' Component={Chat}/>
                <Route  exact  path='/humascot-taca' Component={Login}/>
                <Route  exact  path='/humascot-taca/menu' Component={Menu}/>
                <Route  exact  path='/humascot-taca/register' Component={Register}/>
                <Route  exact  path='/humascot-taca/cart' Component={Cart}/>
                <Route  exact  path='/humascot-taca/order' Component={Order}/>
                <Route  exact  path='/humascot-taca/product_search' Component={Product_search}/>
                <Route  exact  path='/humascot-taca/productDetails' Component={ProductDetails}/>
                <Route  exact  path='/humascot-taca/menagerUser' Component={MenagerUser}/>
                <Route  exact  path='/humascot-taca/orderPage' Component={OrderPage}/>
                <Route  exact  path='/humascot-taca/orderPaid' Component={OrderPaid}/>
                <Route  exact  path='/humascot-taca/menagerAdmin' Component={MenagerAdmin}/>
            </Routes>
      </Router>
    )
}


export default Links;