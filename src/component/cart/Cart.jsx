import { FaArrowLeft } from "react-icons/fa6";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import './cart.css'
import Menu from '../menu/Menu';
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

    const [quantity, setQuantity] = useState(1)

    const handleInput = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setQuantity(value);
        }else{
            setQuantity();
        }
    }

    const handleAdd = () =>{
        setQuantity(quantity + 1);
    }

    const handleDrop = () =>{
        setQuantity(quantity - 1);
    }

  return (
    <>
        <section id="header-account">
            <div className="account-navbar">
                <div className="header-box"><Link to="/taca-app"><FaArrowLeft/></Link></div>
                <div className="header-box middle">Cart</div>
                <div className="header-box"></div>
            </div>
        </section>
        <section id="cart">
            <div className="cart-items">
                <h1>Cart</h1>
                <Link to="/taca-app/payment/">pay</Link>
            </div>
        </section>
        <Menu/>
    </>
  )
}

export default Cart