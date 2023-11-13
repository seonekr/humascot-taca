import React from 'react'
import "./users.css"
import { AiOutlineDelete,AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import AdminMenu from '../adminMenu/AdminMenu';
import user from '../../../img/users.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([
        { userID: 1, userName:"Sompong", email: "sompong@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { userID: 2, userName:"Anoupha", email: "anoupha@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { userID: 3, userName:"Sengphachan",email: "sengphachan@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { userID: 4, userName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
    ]);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();
    // send ID of user
    const [id, setId] = useState();

    const handleUserID = (id) => {
        setId(id);
        navigate("/users/user/", { state: { id: id } });
    }
    // Filter user based on search 
    const filtereduser = users.filter((user) => {
        const nameMatch = user.userName.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch;
    });
    

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
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button type="submit">
                                <IoSearchOutline />
                                </button>
                            </div>
                        </form>
                    </div>
                    {filtereduser.map((user) => (
                        <div key={user.userID}>
                            <div className='box_users_user' onClick={() => handleUserID(user.userID)}>
                                <div className='box_user_text'>
                                    <img src={user.images} alt='image'></img>
                                    <div className='container_chat_name'>
                                        <h4>{user.userName}</h4>
                                        <p>{user.email}</p>
                                    </div>
                                </div>
                            </div>
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

export default Users