import "./header.css";
import {
  FaStore,
  FaMagnifyingGlass,
  FaCartShopping,
  FaRegUser,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../../../img/Logo1.png";

const Header = () => {

    const location = useLocation();

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/product_search/' },
        { label: 'Orders', path: '/order/'},
        { label: 'Contact', path: '/contacts/' },
        { label: 'Login', path: '/login/' },
    ];

    return (
        <>
            <section id="header">
                <div className="navbar">
                    <div className="headWithBox">
                        <ul className="headMenu">
                            <li><Link to="/"><img src={Logo1} alt="Logo" /></Link></li>
                            <div className="boxLiMenu">

                                <div className="linkLi">
                                    {menuItems.map((menuItem) => (
                                        <Link key={menuItem.label} to={menuItem.path} className={`link ${location.pathname === menuItem.path ? 'active' : ''}`}>
                                        {menuItem.icon}
                                        <p>{menuItem.label}</p>
                                        </Link>
                                    ))}
                                </div>
                                

                            </div>
                        </ul>
                        <ul className="ulHead_box">
                            <li><Link to="/product_search"><FaMagnifyingGlass className="head_colorr" /></Link></li>
                            <li><Link to="/cart"><FaCartShopping className="head_colorr" /></Link></li>
                            <li><Link to="/account"><FaRegUser className="head_colorr" /></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Header;