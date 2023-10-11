        
import React from 'react'
import './order.css'

const Order = () => {
  return (
    <div className='container_order_item'>
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
        
        <div className='container_order_all'>
            <h3>All Order</h3>
        </div>
        <div className='box_item_order'>
            <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
            <div className='box_item_order_text'>
                <h3>Acer Swift 5</h3>
                <p>RAM...</p>
                <p>$800.00</p>
            </div>
        </div>
        <br/>
        <div className='box_item_order'>
            <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
            <div className='box_item_order_text'>
                <h3>Acer Swift 5</h3>
                <p>RAM...</p>
                <p>$800.00</p>
            </div>
        </div>
        <br/>
        <div className='box_item_order'>
            <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
            <div className='box_item_order_text'>
                <h3>Acer Swift 5</h3>
                <p>RAM...</p>
                <p>$800.00</p>
            </div>
        </div>
        <br/>
        <div className='box_item_order'>
            <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
            <div className='box_item_order_text'>
                <h3>Acer Swift 5</h3>
                <p>RAM...</p>
                <p>$800.00</p>
            </div>
        </div>
        <br/>
        <div className='box_item_order'>
            <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
            <div className='box_item_order_text'>
                <h3>Acer Swift 5</h3>
                <p>RAM...</p>
                <p>$800.00</p>
            </div>
        </div>
        <br/>
        
        
       
       
    </div>
  )
}

export default Order