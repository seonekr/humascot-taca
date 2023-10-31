import React from 'react'
import "./orderpage.css"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AdminMenu from '../adminMenu/AdminMenu';
import acer from '../../../img/acer.png'

const OrderPage = () => {
    return (
        <>
            <AdminMenu />
            <section id='menager'>
                <div className='container_box_orderpage'>
                    <div className='box_user'>
                        <form className='cetegory_form'>
                            <select className='categoryFilter'>
                                <option className='listOption' value="Something">Filter users</option>
                                <option className='listOption' value="Something">Filter users</option>
                                <option className='listOption' value="Something">Filter users</option>
                                <option className='listOption' value="Something">Filter users</option>
                            </select>
                        </form>
                        <BsFilter id='filter_icon' />
                    </div>
                    <div className='box_users_order'>

                        <Link to="#" className='box_order_text'>
                            <img src={acer} alt='img'></img>
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
                            <Link to="#" className='btn_pending'>
                                Pending
                            </Link>
                            <Link to="#" className='btn_view'>
                                View
                            </Link>
                        </div>

                    </div>

                    <div className='box_users_order'>

                        <Link to="" className='box_order_text'>
                            <img src={acer} alt='img'></img>
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
                            <Link to="#" className='btn_paid'>
                                Paid
                            </Link>
                            <Link to="#" className='btn_view'>
                                View
                            </Link>
                        </div>

                    </div>
                    <div className='box_users_order'>

                        <Link to="" className='box_order_text'>
                            <img src={acer} alt='img'></img>
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
                            <Link to="#" className='btn_paid'>
                                Paid
                            </Link>
                            <Link to="#" className='btn_view'>
                                View
                            </Link>
                        </div>

                    </div>
                    <div className='box_users_order'>

                        <Link to="#" className='box_order_text'>
                            <img src={acer} alt='img'></img>
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
                            <Link to="#" className='btn_pending'>
                                Pending
                            </Link>
                            <Link to="#" className='btn_view'>
                                View
                            </Link>
                        </div>

                    </div>

                    <div className='box_users_order'>

                        <Link to="" className='box_order_text'>
                            <img src={acer} alt='img'></img>
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
                            <Link to="#" className='btn_paid'>
                                Paid
                            </Link>
                            <Link to="#" className='btn_view'>
                                View
                            </Link>
                        </div>

                    </div>


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