import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import Header from '../components/header/Header';
import Cart from '../components/cart/Cart';
import Login from '../components/login_register/Login';
import Menu from "../components/menu/Menu";
import Register from '../components/login_register/Register'
import Chat from "../components/chat/Chat";
import Order from "../components/order/Order";
import Product_search from "../components/products/Product_search";
import ProductDetails from "../components/products/ProductDetails";
import MenagerUser from "../admin/user/components/menagerUser/MenagerUser";


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
            </Routes>
      </Router>
    )
}

export default Links;