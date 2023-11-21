import React from 'react'
import "./users.css"
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import AdminMenu from '../adminMenu/AdminMenu';
import { Link } from 'react-router-dom';

const Users = () => {
    
  return (
    <>
        <section id='menager'>
            <AdminMenu/>
            <div className='container_body_adminuser'>
                <div className='container_box_adminusers'>
                    <div className='box_users'>
                        <h2>Users</h2>
                        <form className="search">
                            <div className="search-box_menageruser">
                                <input 
                                    type="text" 
                                    placeholder="Search ..." 
                                />
                                <button type="submit">
                                <IoSearchOutline />
                                </button>
                            </div>
                        </form>
                    </div>
                   
                    <div className='box_users_user' >
                        <Link to='/users/user/' className='box_user_text'>
                            <img src='' alt='image'></img>
                            <div className='container_chat_name'>
                                <h4>Sompong</h4>
                                <p>sompong@gmail.com</p>
                            </div>
                        </Link>
                    </div>
                    <div className='box_users_user' >
                        <Link to='/users/user/' className='box_user_text'>
                            <img src='' alt='image'></img>
                            <div className='container_chat_name'>
                                <h4>Sompong</h4>
                                <p>sompong@gmail.com</p>
                            </div>
                        </Link>
                    </div>
                       

                    <div className='box_next_user'>
                        <button className='box_prev_next_user'>
                            <AiOutlineLeft id="box_prev_next_icon"/>
                            <p>Prev</p>
                        </button>

                        <div className='box_num_users'>
                            <div className='num_users'>
                                <p>1</p>
                            </div> 
                            <div className='num_users'>
                                <p>2</p>
                            </div> 
                        </div>

                        <button className='box_prev_nexts_user' >
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

export default Users;