import "./adminMenu.css";
import {
  IoDocumentText,
  IoLogOutOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { BiUser, BiMessageDetail } from "react-icons/bi";
import { LiaUserCogSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSell } from "react-icons/md";
import user from "../../../img/user.png";
import Logo1 from '../../../img/Logo1.png'
import { Link, useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    // window.location = "/humascot-taca/admin";
    navigate("/");
  };

  return (
    <>
      <section id="dashboard">
        <div className="left">
          <div className="menu">
            <Link to="/dashboard/" className="link active">
              <RxDashboard />
              <p>Dashboard</p>
            </Link>
            <Link to="/product/" className="link">
              <IoDocumentText />
              <p>Products</p>
            </Link>
            <Link to="/orderpage/" className="link">
              <MdOutlineSell />
              <p>Orders</p>
            </Link>
            <Link to="/menageruser/" className="link">
              <BiUser />
              <p>User</p>
            </Link>
            <Link to="/menagerAdmin/" className="link">
              <LiaUserCogSolid />
              <p>Admin</p>
            </Link>
            <Link to="/message/" className="link">
              <BiMessageDetail />
              <p>Message</p>
            </Link>
            <Link to="/" className="link" onClick={handleLogout}>
              <IoLogOutOutline />
              <p>Log Out</p>
            </Link>
          </div>
          <div className="right">
            <Link to="/dashboard/" className="logo">
              <span>
                <img src={Logo1} alt="" />
              </span>
            </Link>
            
            <div className="userAdminImage">
              <img src={user} alt="Logo_Profile" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AdminMenu;
