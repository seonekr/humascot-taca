import React from 'react'
import "./orderBill.css";
import AdminMenu from '../adminMenu/AdminMenu';
import { ImCheckmark } from 'react-icons/im';

const OrderBill = () => {
  return (
    <>
        <section id='menager'>
             <AdminMenu/>
            <div className='container_body'>
                <form className='container_box_orderBill'>
                    <div className="box_guopoidHead">
                        <div className="idf">
                            <p>NO: 15</p>
                            <p>ID: 4</p>
                            <p>Name: Acer</p>
                        </div>
                        <div className='box_icon_Check'>
                            <ImCheckmark id='icon_ImCheckmark'/>
                        </div>
                    </div>
                    
                    <div className='box_bill_product'>
                        <hr/>
                        <div className='bill_product_name'><h2>Products</h2></div>

                        <div className="order_billGopBox">
                            <div className="detial">
                                <h3>Product Name</h3>
                                <p>name...</p>
                                <p>name...</p>
                                <p>name...</p>
                            </div>
                            <div className="detial">
                                <h3>Price</h3>
                                <p>$20.00</p>
                                <p>$20.00</p>
                                <p>$20.00</p>
                            </div>
                            <div className="detial">
                                <h3>Amount</h3>
                                <p>5</p>
                                <p>5</p>
                                <p>5</p>
                            </div>
                        </div>
                        <hr />
                        <div className='box_title_product'>
                            <div className="box_titlePrice">
                                <h3>TOTAL:</h3>
                                <p>$100.00</p>
                            </div>
                            <div className="box_place-on">
                                <p>Place on: 15/09/2023</p>
                                <p>Payment method: Bcel One</p>
                                <p>Status: completed</p>
                                <p>Delivery by: Anousit</p>
                            </div>
                        </div>
                        
                    </div>
                    
                
                </form>
            </div>
        </section>
    </>
  )
}

export default OrderBill