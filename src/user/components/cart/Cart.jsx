import { FaArrowLeft } from "react-icons/fa6";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import acer from '../../../img/acer.png'
import './cart.css';

const Cart = () => {

  return (
    <>
    <Header/>
    <div className='box_container_cart'>
        <div className='container_cart_item'>
            <div className='box_item'>
                <div className="box_item_image">
                    <img src={acer} alt='img'></img>
                    <div className='box_item_text'>
                        <h2>Acer Swift 5</h2>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </div>
                
                <Link to="#" className='box_item_icon'>
                    <box-icon name='minus' id="icon_minus_plus"></box-icon>
                    <p>10</p>
                    <box-icon name='plus' id="icon_minus_plus"></box-icon>
                </Link>
            </div>
            <div className='box_item'>
                <div className="box_item_image">
                    <img src={acer} alt='img'></img>
                    <div className='box_item_text'>
                        <h2>Acer Swift 5</h2>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </div>
                
                <Link to="#" className='box_item_icon'>
                    <box-icon name='minus' id="icon_minus_plus"></box-icon>
                    <p>10</p>
                    <box-icon name='plus' id="icon_minus_plus"></box-icon>
                </Link>
            </div>
            <div className='box_item'>
                <div className="box_item_image">
                    <img src={acer} alt='img'></img>
                    <div className='box_item_text'>
                        <h2>Acer Swift 5</h2>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </div>
                
                <Link to="#" className='box_item_icon'>
                    <box-icon name='minus' id="icon_minus_plus"></box-icon>
                    <p>10</p>
                    <box-icon name='plus' id="icon_minus_plus"></box-icon>
                </Link>
            </div>
            <div className='box_item_total'>
                <h1>Cart Total</h1>
                <div className='box_item_total_text'>
                    <p>Subtotal: </p>
                    <p>$400.00</p>
                </div>
                <hr/>
                <div className='box_item_total_text'>
                    <p>Shopping: </p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='box_item_total_text'>
                    <h3>Total: </h3>
                    <p>$400.00</p>
                </div>


                <div className='btn'>
                    <Link to="/humascot-taca/product_search" class="Continues_btn" href="#">Continues Shopping</Link>
                    <Link to="/humascot-taca/cart/payment" class="checkout_btn">Checkout</Link>
                </div>
            </div>
        </div>
    </div>
    <Menu/>
    </>
  )
}

export default Cart