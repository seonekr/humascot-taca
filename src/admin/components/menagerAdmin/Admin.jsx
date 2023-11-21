import AdminMenu from "../adminMenu/AdminMenu";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useState, useEffect } from "react";

const Admin = () => {
  const [adminDetail, setAdminDetail] = useState([]);
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
          <Link to="/admins" className="link-back">
            <FaAngleLeft />
            Back
          </Link>
          <div>Admin</div>
        </div>
        <div className="userInfo">
          <div className="info">
            <div>User ID: </div>
            <div>User Name: </div>
            <div>User Email: </div>
            <div>User Phone number: </div>
            <div>Password: </div>
            <div>Password: </div>
            <div className="del-update">
              <div className="del">
                <AiOutlineDelete />
              </div>
              <div className="update upd">
                <MdOutlineEdit />
              </div>
            </div>
          </div>
          <div className="img">
            <img src="" alt="image" />
          </div>
        </div>
      </section>

      {/* <div className="confirmation-popup">
                <p>Are you sure you want to delete?</p>
                <div className="btn_ok_on">
                  <button  className="btn_yes">
                    Yes
                  </button>
                  <button  className="btn_on">
                    No
                  </button>
                </div>
              </div> */}
    </>
  );
};

export default Admin;
