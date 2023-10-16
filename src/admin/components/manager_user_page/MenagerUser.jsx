import React from 'react'
import "./menagerUser.css"
import { AiFillDashboard,AiOutlineUser,AiOutlineSetting,AiFillProfile,AiOutlineDelete } from 'react-icons/ai';
import { FaBook,FaSearch } from 'react-icons/fa';
import { TbUserCog } from 'react-icons/tb';
import { RiMessage2Line } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import { BsFilter,BsPlusLg } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const MenagerUser = () => {
  return (
    <>
        <section id='menager'>
            <div className='box_menager'>
                <div className='container_dashboard'>
                    <div className='taca_dashboard'>
                        <h1>TACA</h1>
                    </div>
                    <div className='taca_dashboard'>
                        <Link to="#" className='box_dashboard_icon'>
                            <AiFillDashboard id="dashboard_icon"/>
                        </Link>
                        <p>Dashboard</p>
                    </div>
                    <div className='taca_dashboard'>
                        <Link to="#" className='box_product_icon'>
                            <AiFillProfile id="dashboard_icon"/>
                        </Link>
                        <p>Product</p>
                    </div>
                    <div className='taca_dashboard'>
                        <Link to="#" className='box_order_icon'>
                            <FaBook id="dashboard_icon"/>
                        </Link>
                        <p>Orders</p>
                    </div>
                    <div className='taca_dashboard'>
                        <Link to="#" className='box_users_icon'>
                            <AiOutlineUser id="dashboard_icon"/>
                        </Link>
                        <p>Users</p>
                    </div>
                    <div className='taca_dashboard'>
                        <Link to="#" className='box_admin_icon'>
                            <TbUserCog id="dashboard_icon"/>
                        </Link>
                        <p>Admins</p>
                    </div>
                    <div className='taca_dashboard'>
                        <Link to="#" className='box_message_icon'>
                            <RiMessage2Line id="dashboard_icon"/>
                        </Link>
                        <p>Messages</p>
                    </div>
                    <div className='taca_dashboard'>
                        <Link to="#" className='box_setting_icon'>
                            <AiOutlineSetting id="dashboard_icon"/>
                        </Link>
                        <p>Settings</p>
                    </div>
                    <div className='taca_dashboard'>
                        <Link to="#" className='box_logout_icon'>
                            <BiLogOut id="dashboard_icon"/>
                        </Link>
                        <p>Log Out</p>
                    </div>
                </div>

                <div className='container_body'>
                    <div className='box_search'>
                        <div className='input_wrapper'>
                            <FaSearch id="search-icon" />
                            <input placeholder='Search.' />
                        </div>
                        <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                    </div>
                    <div className='container_box_users'>
                        <div className='box_users'>
                            <h2>Users</h2>
                            <div className='box_filter'>
                                <Link to="#" className='btn_adduser'>
                                    <BsPlusLg id='icon_plus'/>
                                    <div>Add Users</div>
                                </Link>
                                <div className='btn_filter'>
                                    <form className='cetegory_form'>
                                        <select className='categoryFilter'>
                                            <option className='listOption' value="Something">Filter users</option>
                                            <option className='listOption' value="Something">Filter users</option>
                                            <option className='listOption' value="Something">Filter users</option>
                                            <option className='listOption' value="Something">Filter users</option>
                                        </select>
                                    </form>
                                </div>
                                <BsFilter id='filter_icon'/>
                            </div>
                        </div>

                        <div className='box_users_chat'>
                            
                            <Link to="" className='box_chat_text'>
                                <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                                <div className='container_chat_name'>
                                    <h4>Sompong</h4>
                                    <p>New message...</p>
                                </div>
                            </Link>
                            <div className='container_chat_icon'>
                                <Link to="#" className='btn_edit'>
                                    <MdOutlineEdit id='icon_edit_delete'/>
                                </Link>
                                <Link to="#" className='btn_delete'>
                                    <AiOutlineDelete id='icon_edit_delete'/>
                                </Link>
                            </div>
                            
                        </div>
                        <div className='box_users_chat'>
                            
                            <Link to="" className='box_chat_text'>
                                <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                                <div className='container_chat_name'>
                                    <h4>Sompong</h4>
                                    <p>New message...</p>
                                </div>
                            </Link>
                            <div className='container_chat_icon'>
                                <Link to="#" className='btn_edit'>
                                    <MdOutlineEdit id='icon_edit_delete'/>
                                </Link>
                                <Link to="#" className='btn_delete'>
                                    <AiOutlineDelete id='icon_edit_delete'/>
                                </Link>
                            </div>
                            
                        </div>
                        <div className='box_users_chat'>
                            
                            <Link to="" className='box_chat_text'>
                                <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                                <div className='container_chat_name'>
                                    <h4>Sompong</h4>
                                    <p>New message...</p>
                                </div>
                            </Link>
                            <div className='container_chat_icon'>
                                <Link to="#" className='btn_edit'>
                                    <MdOutlineEdit id='icon_edit_delete'/>
                                </Link>
                                <Link to="#" className='btn_delete'>
                                    <AiOutlineDelete id='icon_edit_delete'/>
                                </Link>
                            </div>
                            
                        </div>
                        <div className='box_users_chat'>
                            
                            <Link to="" className='box_chat_text'>
                                <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                                <div className='container_chat_name'>
                                    <h4>Sompong</h4>
                                    <p>New message...</p>
                                </div>
                            </Link>
                            <div className='container_chat_icon'>
                                <Link to="#" className='btn_edit'>
                                    <MdOutlineEdit id='icon_edit_delete'/>
                                </Link>
                                <Link to="#" className='btn_delete'>
                                    <AiOutlineDelete id='icon_edit_delete'/>
                                </Link>
                            </div>
                            
                        </div>

                        <div className='box_next'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MenagerUser