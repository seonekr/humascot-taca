import "./user.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineDelete } from 'react-icons/ai';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import user from "../../../img/user.png";

const User = () => {
  // Delete product
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

  const deleteUsers = () => {
    console.log('Successful')

    closeConfirmationPopup();
  };
  const [userDetail, setUserDetail] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  // For get user by id
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(import.meta.env.VITE_API + "/getCustomer/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Status === "Success") {
          setUserDetail(result.Result[0]);
          console.log(userDetail);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  const UserDelete = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:5000/deleteCustomer/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };


  return (
    <>
      <AdminMenu />
      <section id='user'>
        <div className="back">
          <Link to="/users" className='link-back'>
            <FaAngleLeft id='icon_back_user' />
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
              <AiOutlineDelete onClick={() => openConfirmationPopup(user.userID)} />
            </div>
          </div>
          <div className="img">
            <img src='' alt="image" />
          </div>
        </div>
      </section>

      {isConfirmationPopupOpen && (
        <div className="confirmation-popup">
          <p>Are you sure you want to delete?</p>
          <div className="btn_ok_on">
            <button onClick={deleteUsers} className="btn_yes">
              Yes
            </button>
            <button onClick={closeConfirmationPopup} className="btn_on">
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
