import React from 'react'
import "./menagerUser.css"
import { AiOutlineDelete,AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { MdOutlineEdit } from 'react-icons/md';
import { BsFilter,BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AdminMenu from '../adminMenu/AdminMenu';

const MenagerUser = () => {
  return (
    <>
        <section id='menager'>
            <AdminMenu/>
            <div className='container_body_adminuser'>
                <div className='container_box_adminusers'>
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
                    <div className='box_users_user'>
                        
                        <Link to="" className='box_user_text'>
                            <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                            <div className='container_chat_name'>
                                <h4>Sompong</h4>
                                <p>New message...</p>
                            </div>
                        </Link>
                        <div className='container_user_icon'>
                            <button className='btn_edit_user'>
                                <MdOutlineEdit id='icon_edit_delete'/>
                            </button>
                            <button className='btn_delete_user'>
                                <AiOutlineDelete id='icon_edit_delete'/>
                            </button>
                        </div>
                        
                    </div>
                    <div className='box_users_user'>
                        
                        <Link to="" className='box_user_text'>
                            <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                            <div className='container_chat_name'>
                                <h4>Sompong</h4>
                                <p>New message...</p>
                            </div>
                        </Link>
                        <div className='container_user_icon'>
                            <button className='btn_edit_user'>
                                <MdOutlineEdit id='icon_edit_delete'/>
                            </button>
                            <button className='btn_delete_user'>
                                <AiOutlineDelete id='icon_edit_delete'/>
                            </button>
                        </div>
                        
                    </div>
                    <div className='box_users_user'>
                        
                        <Link to="" className='box_user_text'>
                            <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                            <div className='container_chat_name'>
                                <h4>Sompong</h4>
                                <p>New message...</p>
                            </div>
                        </Link>
                        <div className='container_user_icon'>
                            <button className='btn_edit_user'>
                                <MdOutlineEdit id='icon_edit_delete'/>
                            </button>
                            <button className='btn_delete_user'>
                                <AiOutlineDelete id='icon_edit_delete'/>
                            </button>
                        </div>
                        
                    </div>
                    <div className='box_users_user'>
                        
                        <Link to="" className='box_user_text'>
                            <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                            <div className='container_chat_name'>
                                <h4>Sompong</h4>
                                <p>New message...</p>
                            </div>
                        </Link>
                        <div className='container_user_icon'>
                            <button className='btn_edit_user'>
                                <MdOutlineEdit id='icon_edit_delete'/>
                            </button>
                            <button className='btn_delete_user'>
                                <AiOutlineDelete id='icon_edit_delete'/>
                            </button>
                        </div>
                        
                    </div>
                    
                    <div className='box_next_user'>
                        <button className='box_prev_next_user'>
                            <AiOutlineLeft id="box_prev_next_icon"/>
                            <p>Prev</p>
                        </button>
                        <div className='box_num_user'>
                            <p className='num_admin'>1</p>
                            <p className='num_admin'>2</p>
                            <p className='num_admin'>3</p>
                        </div>
                        <button className='box_prev_nexts_user'>
                            <p>Next</p>
                            <AiOutlineRight id="box_prev_next_icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MenagerUser