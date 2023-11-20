import './user.css';
import AdminMenu from '../adminMenu/AdminMenu';
import user from '../../../img/users.png'
import { FaAngleLeft } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from 'react';

const User = () => {
    const [users, setUsers] = useState([
        { userID: 1, userName:"Sompong", email: "sompong@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { userID: 2, userName:"Anoupha", email: "anoupha@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { userID: 3, userName:"Sengphachan",email: "sengphachan@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { userID: 4, userName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
    ]);



    // Get user ID
    const location = useLocation();
    const { id } = location.state || {};
    const [getId, setGetId] = useState(id);

    const filtereUser = users.filter(
        (user) => user.userID === getId
    );

    

    // Delete Users
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);

    const openConfirmationPopup = (userID) => {
        setDeleteUserId(userID);
        setConfirmationPopupOpen(true);
    };

    const closeConfirmationPopup = () => {
        setDeleteUserId(null);
        setConfirmationPopupOpen(false);
    };
    const deleteUser = () => {
        if (deleteUserId !== null) {
          // Filter out the product with the specified ID
          const updatedUsers = users.filter(
            (user) => user.userID !== deleteUserId
          );
    
          // Update the state with the new array of products
          setUsers(updatedUsers);
    
          // Close the confirmation popup after deleting
          closeConfirmationPopup();
        }
    };

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
                            <div className='del' onClick={() => openConfirmationPopup(user.userID)}>
                                <AiOutlineDelete/>
                            </div>
                        </div>
                        <div className="img">
                            <img src={user.images} alt="image" />
                        </div>
                    </div>
                ))}
            </section>
            {isConfirmationPopupOpen && (
              <div className="confirmation-popup">
                <p>Are you sure you want to delete?</p>
                <div className="btn_ok_on">
                  <button onClick={deleteUser} className="btn_yes">
                    Yes
                  </button>
                  <button onClick={closeConfirmationPopup} className="btn_on">
                    No
                  </button>
                </div>
              </div>
            )}
        </>
    )
}

export default User;