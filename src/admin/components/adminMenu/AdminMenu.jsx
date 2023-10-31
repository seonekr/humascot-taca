import "./adminMenu.css";
import {
  IoDocumentText,
  IoSettingsOutline,
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
    navigate("/humascot-taca/admin");
  };

  return (
    <>
      <section id="dashboard">
        <div className="left">
          <div className="menu">
            <Link to="/admin/dashboard/" className="link active">
              <RxDashboard />
              <p>Dashboard</p>
            </Link>
            <Link to="/admin/post/" className="link">
              <IoDocumentText />
              <p>Products</p>
            </Link>
            <Link to="/admin/orderpage/" className="link">
              <MdOutlineSell />
              <p>Orders</p>
            </Link>
            <Link to="/admin/menageruser/" className="link">
              <BiUser />
              <p>User</p>
            </Link>
            <Link to="/admin/menagerAdmin/" className="link">
              <LiaUserCogSolid />
              <p>Admin</p>
            </Link>
            <Link to="/admin/message/" className="link">
              <BiMessageDetail />
              <p>Message</p>
            </Link>
            <Link to="/admin/" className="link">
              <IoSettingsOutline />
              <p>Setting</p>
            </Link>
            <Link className="link" onClick={handleLogout}>
              <IoLogOutOutline />
              <p>Log Out</p>
            </Link>
          </div>
          <div className="right">
            <Link to="/admin/dashboard/" className="logo">
              <span>
                <img src={Logo1} alt="" />
              </span>
            </Link>
            <form className="search">
              <div className="search-box">
                <input type="text" placeholder="Search ..." />
                <button type="submit">
                  <IoSearchOutline />
                </button>
              </div>
            </form>
            <div className="userAdminImage"><img src={user} alt="Logo_Profile" /></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminMenu;
