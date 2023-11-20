import AdminMenu from "../adminMenu/AdminMenu";
import user from "../../../img/users.png";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import Dialog from "../menagerUser/Dialog";

const Admin = () => {
  const [userDetail, setUserDetail] = useState([]);
  const userID = localStorage.getItem("userID");

  //   console.log(userID)

  const navigate = useNavigate();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(import.meta.env.VITE_API + "/getAdmin/" + userID, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Status === "Success") {
          setUserDetail(result.Result[0]);
        //   console.log(userDetail);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <>
      <AdminMenu />
      <section id="user">
        <div className="back">
          <Link to="/admins/" className="link-back">
            <FaAngleLeft />
            Back
          </Link>
          <div>Admin</div>
        </div>
        <div className="userInfo">
          <div className="info">
            <div>User ID: {userDetail.id}</div>
            <div>User Name: {userDetail.fname} {userDetail.lname}</div>
            <div>User Email: {userDetail.email}</div>
            <div>User Phone number: {userDetail.id}</div>
            <div>Password: ********</div>
            <div className="del-update">
              <div className="del" onClick={handleLogout}>
                <AiOutlineDelete />
              </div>
              <div className="update upd" onClick={() => handleUpdate()}>
                <MdOutlineEdit />
              </div>
            </div>
          </div>
          <div className="img">{<img src={user} alt="image" />}</div>
        </div>
      </section>
    </>
  );
};

export default Admin;
