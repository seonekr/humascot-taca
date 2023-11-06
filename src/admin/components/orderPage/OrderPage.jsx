import React from 'react'
import "./orderpage.css"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AdminMenu from '../adminMenu/AdminMenu';
import acer from '../../../img/acer.png'
import { IoSearchOutline } from 'react-icons/io5';
import { useState } from "react";

const OrderPage = () => {
    


    return (
        <>
            <AdminMenu />
            <section id='menager'>
                <div className='container_box_orderpage'>
                    <div className='box_head_search'>
                        <h2>Order</h2>
                        {/* <form className="search">
                            <div className="search-box_order">
                                <input type="text" placeholder="Search ..." />
                                <button type="submit">
                                <IoSearchOutline />
                                </button>
                            </div>
                        </form> */}
                    </div>

                    <form className='box_users_order'>
                        <Link to="#" className='box_order_text'>
                            <div className='container_chat_name'>
                                <p>NO: 1</p>
                                <p>ID: 1</p>
                                <h4>Samsung</h4>
                            </div>
                        </Link>
                        <div className='box_container_time'>
                            <p>Time: </p>
                            <p>01/19/2023</p>
                            <p>8:00 PM</p>
                        </div>
                        <div className='container_order_icon'>
                            <Link to="/admin/OrderWrong" className='btn_pending'>
                                Pending
                            </Link>
                            <Link to="/admin/orderbill" className='btn_view'>
                                View
                            </Link>
                        </div>
                    </form>
                    <form className='box_users_order'>
                        <Link to="#" className='box_order_text'>
                            <div className='container_chat_name'>
                                <p>NO: 1</p>
                                <p>ID: 1</p>
                                <h4>Samsung</h4>
                            </div>
                        </Link>
                        <div className='box_container_time'>
                            <p>Time: </p>
                            <p>01/19/2023</p>
                            <p>8:00 PM</p>
                        </div>
                        <div className='container_order_icon'>
                            <Link to="/admin/OrderWrong" className='btn_paid'>
                                Paid
                            </Link>
                            <Link to="/admin/orderbill" className='btn_view'>
                                View
                            </Link>
                        </div>
                    </form>

                    <div className='box_next_order'>
                        <button className='box_prev_next_order'>
                            <AiOutlineLeft id="box_prev_next_icon" />
                            <p>Prev</p>
                        </button>

                        <div className='box_num_order'>
                            <p className='num_admin'>1</p>
                            <p className='num_admin'>2</p>
                            <p className='num_admin'>3</p>
                        </div>
                        <button className='box_prev_nexts_order'>
                            <p>Next</p>
                            <AiOutlineRight id="box_prev_next_icon" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderPage