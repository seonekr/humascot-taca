import "./user.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import user from "../../../img/user.png";

const User = () => {
  const [userDetail, setUserDetail] = useState([]);
  const [deleteUser, setDeleteUser] = useState(null);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
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
      <section id="user">
        <div className="back">
          <Link to="/users" className="link-back">
            <FaAngleLeft id="icon_back_user" />
            Back
          </Link>
          <div>User</div>
        </div>
        <div className="userInfo">
          <div className="info">
            <div>User ID: {userDetail.id}</div>
            <div>
              User Name: {userDetail.fname} {userDetail.lname}
            </div>
            <div>User Email: {userDetail.email}</div>
            <div>User Phone number: {userDetail.tel}</div>
            <div>Password: ********</div>
            <div className="del">
              <AiOutlineDelete />
            </div>
          </div>
          <div className="img">
            {userDetail.profile_image ? (
              <img src={userDetail.profile_image} alt="admin profile" />
            ) : (
              <img src={user} alt="admin profile" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
