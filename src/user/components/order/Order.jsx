import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import './order.css'
import { Link } from 'react-router-dom'
import Menu from '../menu/Menu'

const Order = () => {
    return (
        <>  
            <Header/>
            <section id='container_order_item'>
                <div className="account-navbar">
                    <div className="header-box"><Link to="/humascot-taca" className='guopIconbAck'><FaAngleLeft className='iconnBack'/>Back</Link></div>
                    <h3 className="header-box ">Orders</h3>
                    <div className="header-box"></div>
                </div>
                <div className='container_order_all'>
                    <Link to="/humascot-taca/order/bill" className='box_item_order'>
                        <div className='box_item_order_text'>
                            <p className='txtheadeproductorder'>Acer Swift 5</p>
                            <p>RAM...</p>
                            <p>$800.00</p>
                        </div>
                    </Link>
                    <Link to="/humascot-taca/order/bill" className='box_item_order'>
                        <div className='box_item_order_text'>
                            <p className='txtheadeproductorder'>Acer Swift 5</p>
                            <p>RAM...</p>
                            <p>$800.00</p>
                        </div>
                    </Link>
                </div>
            </section>
            <Menu />
        </>
    )
}

export default Order