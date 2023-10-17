import "./header.css";
import { FaStore, FaMagnifyingGlass, FaCartShopping, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <section id="header">
                <div className="navbar">
                    <ul>
                        <li><Link to="/humascot-taca"><FaStore/></Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/humascot-taca"><FaMagnifyingGlass/></Link></li>
                        <li><Link to="/humascot-taca/cart"><FaCartShopping/></Link></li>
                        <li><Link to="/humascot-taca/account"><FaRegUser/></Link></li>
                    </ul>
                </div>
            </section>
            <section id="banner">
                <div>
                    <Banner/>
                </div>
            </section>
        </>
    )
};

export default Header;