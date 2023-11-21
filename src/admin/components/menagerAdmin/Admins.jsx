import React, {useState} from 'react'
import "./admins.css"
import { AiOutlineLeft,AiOutlineRight  } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import AdminMenu from '../adminMenu/AdminMenu';
import { Link } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';


const Admins = () => {
     

  return (
    <>
        <section id='menager'>
            <AdminMenu/>
            <div className='container_body_adminuser'>
                <div className='container_box_users'>
                    <div className='box_users'>
                        <div className='box_add_admin'>
                            <Link to="/addadmin/" className='btn_addadmin'>
                                <BiPlus id="icon_add_admin"/>
                                Add Admin
                            </Link>
                        </div>
                        
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

                    
                    <div className='box_users_admin' >
                        <Link to='/admins/admin/' className='box_admin_text'>
                            <img src='' alt='img'></img>
                            <div className='container_chat_name'>
                                <p>Name: Sompong</p>
                                <p>Eamil: sompong@gmail.com</p>
                            </div>
                        </Link>
                    </div>
                    <div className='box_users_admin' >
                        <Link to='/admins/admin/' className='box_admin_text'>
                            <img src='' alt='img'></img>
                            <div className='container_chat_name'>
                                <p>Name: Sompong</p>
                                <p>Eamil: sompong@gmail.com</p>
                            </div>
                        </Link>
                    </div>
                       

                    <div className='box_next_admin'>
                        <button className='box_prev_next_admin'>
                            <AiOutlineLeft id="box_prev_next_icon"/>
                            <p>Prev</p>
                        </button>

                        <div className='box_num_admin'>
                        
                            <div className='num_admin'>
                                <p>1</p>
                            </div> 
                            <div className='num_admin'>
                                <p>2</p>
                            </div> 
                              
                        </div>
                        
                        <button className='box_prev_nexts_admin' >
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

export default Admins;