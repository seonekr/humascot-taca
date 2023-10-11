import { FaArrowLeft } from "react-icons/fa6";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import './cart.css';

const Cart = () => {

  return (
    <>
        <section id="header-account">
            <div className="account-navbar">
                <div className="header-box"><Link to="/humascot-taca"><FaArrowLeft/></Link></div>
                <div className="header-box middle">Cart</div>
                <div className="header-box"></div>
            </div>
        </section>
        <section id="cart">
            <div className="cart-items">
                <h1>Cart</h1>
                <Link to="/humascot-taca/payment/">pay</Link>
            </div>
        </section>
        <Menu/>
    </>
  )
}

export default Cart