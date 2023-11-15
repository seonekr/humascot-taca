import './user.css';
import AdminMenu from '../adminMenu/AdminMenu';
import user from '../../../img/users.png'
import { FaAngleLeft } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState, useRef } from 'react';
import Dialog from './Dialog';

const User = () => {
    const [users, setUsers] = useState([
        { userID: 1, userName:"Sompong", email: "sompong@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { userID: 2, userName:"Anoupha", email: "anoupha@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { userID: 3, userName:"Sengphachan",email: "sengphachan@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { userID: 4, userName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
    ]);

    // Dialog 
    const [dialog, setDialog] = useState({
        message:'',
        isLoading:false
    })
    const iduserRef = useRef();
    const handleDialog = (message, isLoading) => {
        setDialog({
            message,
            isLoading,
        })
    }

    // Get user ID
    const location = useLocation();
    const { id } = location.state || {};
    const [getId, setGetId] = useState(id);

    const filtereUser = users.filter(
        (user) => user.userID === getId
    );

    // Delete
    const handleDelete = (userID) => {
        handleDialog('Are you sure you want to delete?',true);
        iduserRef.current = userID;
    };

    const areUSuredelete = (choose) => {
        if(choose) {
            setUsers(users.filter((user) => user.userID !== iduserRef.current));
            handleDialog("",false)
        }else{
            handleDialog("",false)
        }
    }

    return(
        <>
            <AdminMenu/>
            <section id='user'>
                <div className="back">
                    <Link to="/users/" className='link-back'>
                        <FaAngleLeft id='icon_back_user'/>
                        Back
                    </Link>
                    <div>
                        User
                    </div>
                </div>
                {filtereUser.map((user) => (
                    <div className="userInfo" key={user.userID}>
                        <div className="info">
                            <div>User ID: {user.userID}</div>
                            <div>User Name: {user.userName}</div>
                            <div>User Email: {user.email}</div>
                            <div>User Phone number: {user.phone}</div>
                            <div>Password: {user.password}</div>
                            <div>Password: {user.confirmPassword}</div>
                            <div className='del' onClick={() => handleDelete(user.userID)}>
                                <AiOutlineDelete/>
                            </div>
                        </div>
                        <div className="img">
                            <img src={user.images} alt="image" />
                        </div>
                    </div>
                ))}
            </section>
            { dialog.isLoading && <Dialog onDialog={areUSuredelete} message={dialog.message}/>}
        </>
    )
}

export default User;