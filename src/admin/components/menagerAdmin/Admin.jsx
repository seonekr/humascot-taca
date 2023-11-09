import AdminMenu from '../adminMenu/AdminMenu';
import user from '../../../img/users.png'
import { FaAngleLeft } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineEdit } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from 'react';

const Admin = () => {
    const [admins, setAdmins] = useState([
        { adminID: 1, adminName:"Sompong", email: "sompong@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 2, adminName:"Anoupha", email: "anoupha@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 3, adminName:"Sengphachan",email: "sengphachan@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 4, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
    ]);

    // Get user ID
    const location = useLocation();
    const { id } = location.state || {};
    const [getId, setGetId] = useState(id);

    const filtereAdmin = admins.filter(
        (admin) => admin.adminID === getId
    );

    // Delete
    const handleDelete = (adminID) => {
        const updatedAdmin = admins.filter((admin) => admin.adminID !== adminID);
        setAdmins(updatedAdmin);
    };

    return(
        <>
            <AdminMenu/>
            <section id='user'>
                <div className="back">
                    <Link to="/admins/" className='link-back'>
                        <FaAngleLeft/>
                        Back
                    </Link>
                    <div>
                        Admin
                    </div>
                </div>
                {filtereAdmin.map((admin) => (
                    <div className="userInfo" key={admin.adminID}>
                        <div className="info">
                            <div>User ID: {admin.adminID}</div>
                            <div>User Name: {admin.adminName}</div>
                            <div>User Email: {admin.email}</div>
                            <div>User Phone number: {admin.phone}</div>
                            <div>Password: {admin.password}</div>
                            <div>Password: {admin.confirmPassword}</div>
                            <div className='del-update'>
                                <div className='del' onClick={() => handleDelete(admin.adminID)}>
                                    <AiOutlineDelete/>
                                </div>
                                <div className='update upd' >
                                    <MdOutlineEdit/>
                                </div>
                            </div>
                        </div>
                        <div className="img">
                            <img src={admin.images} alt="image" />
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Admin;