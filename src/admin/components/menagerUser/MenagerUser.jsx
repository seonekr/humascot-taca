import React from 'react'
import "./menagerUser.css"
import { AiOutlineDelete,AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import AdminMenu from '../adminMenu/AdminMenu';
import users from '../../../img/users.png'
import { useState } from 'react';

const MenagerUser = () => {
    const [user, setUser] = useState([
        { userID: 1, userName:"Sompong", message:"New Message...",images: [users] },
        { userID: 2, userName:"Anoupha", message:"New Message...",images: [users] },
        { userID: 3, userName:"Sengphachan",message:"New Message...", images: [users] },
        { userID: 4, userName:"Khammun", message:"New Message...",images: [users] },
        { userID: 5, userName:"Sompong", message:"New Message...",images: [users] },
        { userID: 6, userName:"Sompong", message:"New Message...",images: [users] },
    ]);


    // Delete
    const handleDelete = (userID) => {
        const updatedUser = user.filter((users) => users.userID !== userID);
        setUser(updatedUser);
    };

    

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
                    {user.map((users) => (
                        <div key={users.userID}>
                            <form className='box_users_user'>
                                <div className='box_user_text'>
                                    <img src={users.images} alt='image'></img>
                                    <div className='container_chat_name'>
                                        <h4>{users.userName}</h4>
                                        <p>{users.message}</p>
                                    </div>
                                </div>
                                <div className='container_user_icon'>
                                    <button className='btn_delete_user' onClick={() => handleDelete(users.userID)}>
                                        <AiOutlineDelete id='icon_edit_delete'/>
                                    </button>
                                </div>
                            </form>
                        </div>
                    ))}

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