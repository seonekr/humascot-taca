import "./user.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";

const User = () => {
  // DFor delete User
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const openConfirmationPopup = (id) => {
    setDeleteUserId(id);
    setConfirmationPopupOpen(true);
  };

  const closeConfirmationPopup = () => {
    setDeleteUserId(null);
    setConfirmationPopupOpen(false);
  };

    const deleteUsers = () => {
        console.log('Successful')
        
        closeConfirmationPopup();
    };
    return(
        <>
            <AdminMenu/>
            <section id='user'>
                <div className="back">
                    <Link to="/users" className='link-back'>
                        <FaAngleLeft id='icon_back_user'/>
                        Back
                    </Link>
                    <div>
                        User
                    </div>
                </div>
                <div className="userInfo">
                    <div className="info">
                       <div>User ID: </div>
                       <div>User Name: </div>
                       <div>User Email: </div>
                       <div>User Phone number: </div>
                       <div>Password: </div>
                       <div>Password: </div>
                       <div className='del' >
                           <AiOutlineDelete  onClick={() => openConfirmationPopup(user.userID)}/>
                       </div>
                    </div>
                    <div className="img">
                       <img src='' alt="image" />
                    </div>
                </div>
            </section>

      {isConfirmationPopupOpen && (
        <div className="boxAlertDelete">
          <div className="confirmation-popup">
            <div>
              <AiOutlineDelete className="iconndelete" />
              <p>Do you want to delete?</p>
            </div>
            <div className="btn_ok_on">
              <button onClick={closeConfirmationPopup} className="btn_on">
                No
              </button>
              <button
                onClick={() => {
                  DeleteUser(userDetail.reg_id);
                }}
                className="btn_yes"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
