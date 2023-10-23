import "./header.css";
import { FaStore, FaMagnifyingGlass, FaCartShopping, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Logo1 from '../../../../public/Logo1.png';


const Header = () => {
    return (
        <>
            <section id="header">
                <div className="navbar">
                    <div className="headWithBox">
                        <ul className="headMenu">
                            <li><Link to="/humascot-taca"><img src={Logo1} alt="Logo" /></Link></li>
                            <li><Link to="/humascot-taca" className="linkLi active">Home</Link></li>
                            <li><Link to="/humascot-taca" className="linkLi">Shop</Link></li>
                            <li><Link to="/humascot-taca" className="linkLi">Order</Link></li>
                            <li><Link to="/humascot-taca" className="linkLi">Chat</Link></li>
                        </ul>
                        <ul className="ulHead_box">
                            <li><Link to="/humascot-taca"><FaMagnifyingGlass className="head_colorr" /></Link></li>
                            <li><Link to="/humascot-taca/cart"><FaCartShopping className="head_colorr" /></Link></li>
                            <li><Link to="/humascot-taca/login"><FaRegUser className="head_colorr" /></Link></li>
                            <li><Link to="/humascot-taca/login" className="btnLogoin">Login</Link></li>
                        </ul> 
                    </div>
                </div>
            </section>

            <section id="banner">
                <div>
                    <Banner />
                </div>
            </section>
        </>
    )
};

export default Header;