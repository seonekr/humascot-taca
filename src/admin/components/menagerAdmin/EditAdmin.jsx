import "./addAmin.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { useState, useEffect } from "react";
import user from "../../../img/user.png";

import { FaAngleLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const EditAdmin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  // For get user by id
  const [adminDetail, setAdminDetail] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:5000/getAdmin/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Status === "Success") {
          setAdminDetail(result.Result[0]);
          console.log(adminDetail);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    // Check messages
    if (successMsg === "Success") {
      setMessage("Added Admin Successful!");
    } else {
      setMessage(errorMsg);
    }
  });

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      email: email,
      fname: firstName,
      lname: lastName,
      tel: phoneNumber,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:5000/updateAdmin" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Status === "Success") {
          setSuccessMsg(result.Status);
          navigate("/admin/detail/" + id);
        } else {
          setErrorMsg(result.Error);
          navigate("/addadmin");
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <AdminMenu />
      <section id="addAmin">
        <div className="box_addAdmin">
          <div className="container_add_admin">
            <Link to="/admins" className="box_guopIconbAck">
              <FaAngleLeft id="box_icon_Back" />
              <p>Back</p>
            </Link>
            <h2>Update Admin</h2>
            <div></div>
          </div>
          <h3>{message && message}</h3>
          <form onSubmit={handleSubmit}>
            <div className="addAdminForm">
              <div className="add-box">
                <label htmlFor="fname">First name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Fist name"
                  value={adminDetail.fname}
                  onChange={handleFirstNameChange}
                  required
                />
              </div>
              <div className="add-box">
                <label htmlFor="lname">Last name</label>
                <input
                  type="text"
                  id="lname"
                  placeholder="last name"
                  value={adminDetail.lname}
                  onChange={handleLastNameChange}
                  required
                />
              </div>
              <div className="add-box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  value={adminDetail.email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="add-box">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone number"
                  value={adminDetail.tel}
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>
            </div>
            <div className="imageAdmin">
              <div className="image">
                <label htmlFor="adminImage">
                  <img src={"../../../../public/images/profile.png"} />
                </label>
              </div>
            </div>
            <div className="submit">
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditAdmin;
