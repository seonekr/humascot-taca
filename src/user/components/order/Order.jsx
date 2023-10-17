import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import './order.css'
import { Link } from 'react-router-dom'
import Menu from '../menu/Menu'

const Order = () => {
  return (
    <>
        <section id="header-account">
            <div className="account-navbar">
                <div className="header-box"><Link to="/humascot-taca"><FaArrowLeft/></Link></div>
                <div className="header-box middle">Orders</div>
                <div className="header-box"></div>
            </div>
        </section>
        <section id='container_order_item'>
            <div className='container_order_all'>
                <Link to="/humascot-taca/order/bill" className='box_item_order'>
                    <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                    <div className='box_item_order_text'>
                        <h3>Acer Swift 5</h3>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </Link>
                <Link to="/humascot-taca/order/bill" className='box_item_order'>
                    <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                    <div className='box_item_order_text'>
                        <h3>Acer Swift 5</h3>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </Link>
                <Link to="/humascot-taca/order/bill" className='box_item_order'>
                    <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                    <div className='box_item_order_text'>
                        <h3>Acer Swift 5</h3>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </Link>
                <Link to="/humascot-taca/order/bill" className='box_item_order'>
                    <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                    <div className='box_item_order_text'>
                        <h3>Acer Swift 5</h3>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </Link>
                <Link to="/humascot-taca/order/bill" className='box_item_order'>
                    <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                    <div className='box_item_order_text'>
                        <h3>Acer Swift 5</h3>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </Link>
                <Link to="/humascot-taca/order/bill" className='box_item_order'>
                    <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                    <div className='box_item_order_text'>
                        <h3>Acer Swift 5</h3>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </Link>
                <Link to="/humascot-taca/order/bill" className='box_item_order'>
                    <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                    <div className='box_item_order_text'>
                        <h3>Acer Swift 5</h3>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </Link>
                <Link to="/humascot-taca/order/bill" className='box_item_order'>
                    <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                    <div className='box_item_order_text'>
                        <h3>Acer Swift 5</h3>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </Link>
                <Link to="/humascot-taca/order/bill" className='box_item_order'>
                    <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                    <div className='box_item_order_text'>
                        <h3>Acer Swift 5</h3>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </Link>
                <Link to="/humascot-taca/order/bill" className='box_item_order'>
                    <img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''></img>
                    <div className='box_item_order_text'>
                        <h3>Acer Swift 5</h3>
                        <p>RAM...</p>
                        <p>$800.00</p>
                    </div>
                </Link>
            </div>
        </section>
        <Menu/>
    </>
  )
}

export default Order