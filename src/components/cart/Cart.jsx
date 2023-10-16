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
        {/* <Menu/> */}
    <div className='box_container_cart'>
        <header className='box_container_header'>
            <div className='box_header'>
                <div className='logo'>
                    {/* <a href="#"><box-icon name='align-left'></box-icon></a> */}
                    <h1>TACA</h1>
                </div>
                
                <div className='icon'>
                <a href="#"><box-icon name='search' id="boc_container_icon"></box-icon></a>
                <a href="/cart"><box-icon name='cart' id="boc_container_icon"></box-icon></a>
                <a href="#"><box-icon name='user' id="boc_container_icon"></box-icon></a>
                </div>
            </div>
        
        </header>

        <div className='container_cart_item'>
            <div className='box_item'>
                <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                <div className='box_item_text'>
                    <h2>Acer Swift 5</h2>
                    <p>RAM...</p>
                    <p>$800.00</p>
                </div>
                <a href="#" className='box_item_icon'>
                    <box-icon name='minus' id="icon_minus_plus"></box-icon>
                    <p>10</p>
                    <box-icon name='plus' id="icon_minus_plus"></box-icon>
                </a>
            </div>
            <br/>
            <div className='box_item'>
                <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                <div className='box_item_text'>
                    <h2>Acer Swift 5</h2>
                    <p>RAM...</p>
                    <p>$800.00</p>
                </div>
                <a href="#" className='box_item_icon'>
                    <box-icon name='minus' id="icon_minus_plus"></box-icon>
                    <p>10</p>
                    <box-icon name='plus' id="icon_minus_plus"></box-icon>
                </a>
            </div>
            <br/>
            <div className='box_item'>
                <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                <div className='box_item_text'>
                    <h2>Acer Swift 5</h2>
                    <p>RAM...</p>
                    <p>$800.00</p>
                </div>
                <a href="#" className='box_item_icon'>
                    <box-icon name='minus' id="icon_minus_plus"></box-icon>
                    <p>10</p>
                    <box-icon name='plus' id="icon_minus_plus"></box-icon>
                </a>
            </div>
            <br/>
            <div className='box_item'>
                <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                <div className='box_item_text'>
                    <h2>Acer Swift 5</h2>
                    <p>RAM...</p>
                    <p>$800.00</p>
                </div>
                <a href="#" className='box_item_icon'>
                    <box-icon name='minus' id="icon_minus_plus"></box-icon>
                    <p>10</p>
                    <box-icon name='plus' id="icon_minus_plus"></box-icon>
                </a>
            </div>
            <br/>
        
            
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
                    <a class="Continues_btn" href="#">Continues Shopping</a>
                    <a class="checkout_btn" href="#">Checkout</a>
                </div>
                
            </div>
        
        
        </div>
    </div>
    </>
  )
}

export default Cart