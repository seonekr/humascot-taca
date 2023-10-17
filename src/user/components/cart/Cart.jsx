import React from 'react'
import './cart.css'

const Cart = () => {
  return (
    <div className='box_container_cart'>
        

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
    
    
  )
}

export default Cart