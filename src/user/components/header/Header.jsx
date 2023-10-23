import "./header.css";
import { FaStore, FaMagnifyingGlass, FaCartShopping, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Banner from "./Banner";
import Logo1 from '../../../../public/Logo1.png';


const Header = () => {
    return (
       
            <section id="header">
                <div className="navbar">

                    <div className="headWithBox">
                        <ul className="headMenu">
                            <li><Link to="/humascot-taca"><img src={Logo1} alt="Logo" /></Link></li>
                            <div className="boxLiMenu">
                                <li><Link to="/humascot-taca" className="linkLi active">Home</Link></li>
                                <li><Link to="/humascot-taca/product_search" className="linkLi">Shop</Link></li>
                                <li><Link to="/humascot-taca/order" className="linkLi">Order</Link></li>
                                <li><Link to="/humascot-taca/chatuser" className="linkLi">Chat</Link></li>
                                <li><Link to="/humascot-taca" className="linkLi">Login</Link></li>
                            </div>
                        </ul>
                        <ul className="ulHead_box">
                            <li><Link to="/humascot-taca"><FaMagnifyingGlass className="head_colorr" /></Link></li>
                            <li><Link to="/humascot-taca/cart"><FaCartShopping className="head_colorr" /></Link></li>
                            <li><Link to="/humascot-taca/login"><FaRegUser className="head_colorr" /></Link></li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <ul>
                        <li><Link to="/humascot-taca"><FaStore/></Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/humascot-taca"><FaMagnifyingGlass/></Link></li>
                        <li><Link to="/humascot-taca/cart"><FaCartShopping/></Link></li>
                        <li><Link to="/humascot-taca/login"><FaRegUser/></Link></li>
                    </ul>
                </div>

            </section>

    )
};

export default Header;