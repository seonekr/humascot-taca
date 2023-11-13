import React, {useState} from 'react'
import "./admins.css"
import { AiOutlineLeft,AiOutlineRight  } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import user from '../../../img/users.png'
import AdminMenu from '../adminMenu/AdminMenu';
import users from '../../../img/users.png'
import { Link, useNavigate } from 'react-router-dom';


const Admins = () => {
    const [admins, setAdmins] = useState([
        { adminID: 1, adminName:"Sompong", email: "sompong@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 2, adminName:"Anoupha", email: "anoupha@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 3, adminName:"Sengphachan",email: "sengphachan@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 4, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    // send ID of admin
    const [id, setId] = useState();

    const handleUserID = (id) => {
        setId(id);
        navigate("/admins/admin/", { state: { id: id } });
    }

     // Filter user based on search 
     const filteredadmin = admins.filter((admin) => {
        const nameMatch = admin.adminName.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch;
    });

  return (
    <>
        <section id='menager'>
            <AdminMenu/>
            <div className='container_body_adminuser'>
                <div className='container_box_users'>
                    <div className='box_users'>
                        <Link to="/addadmin/">Add +</Link>
                        <div>Admin</div>
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

                    {filteredadmin.map((admin) => (
                        <div key={admin.adminID}>
                            <div className='box_users_admin' onClick={() => handleUserID(admin.adminID)}>
                                <div className='box_admin_text'>
                                    <img src={users} alt='img'></img>
                                    <div className='container_chat_name'>
                                        <p>Name: {admin.adminName}</p>
                                        <p>Eamil: {admin.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className='box_next_admin'>
                        <button className='box_prev_next_admin'>
                            <AiOutlineLeft id="box_prev_next_icon"/>
                            <p>Prev</p>
                        </button>
                        <div className='box_num_admin'>
                            <p className='num_admin'>1</p>
                            <p className='num_admin'>2</p>
                            <p className='num_admin'>3</p>
                        </div>
                        
                        <button className='box_prev_nexts_admin'>
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

export default Admins