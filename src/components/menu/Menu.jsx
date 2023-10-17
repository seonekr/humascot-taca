import "./menu.css"
import { FaHouse, FaStore, FaMoneyBillTrendUp, FaRegMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Menu = () => {
    return(
        <section id="menu">
            <div className="menubar">
                <Link to="/humascot-taca" className="box-menu">
                    <span><FaHouse/></span><span>Home</span>
                </Link>
                <Link to="/humascot-taca" className="box-menu">
                    <span><FaStore/></span><span>Shopping</span>
                </Link>
                <Link to="/humascot-taca/order" className="box-menu">
                    <span><FaMoneyBillTrendUp/></span><span>Order</span>
                </Link>
                <Link to="/humascot-taca/chatuser" className="box-menu">
                    <span><FaRegMessage/></span><span>Chat</span>
                </Link>
            </div>
        </section>
    )
}

export default Menu;