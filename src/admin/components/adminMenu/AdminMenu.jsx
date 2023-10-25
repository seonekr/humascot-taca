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
import cart from "../../../img/cart.png";
import user from "../../../img/user.png";
import { Link, useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    // window.location = "/humascot-taca/admin";
    navigate("/admin");
  };

  return (
    <>
      <section id="dashboard">
        <div className="container_boxD">
          <div className="left">
            <Link to="/humascot-taca/admin">
              <div className="logo">
                <span>
                  <img src={cart} alt="" />
                </span>
              </div>
            </Link>
            <div className="menu">
              <Link to="/humascot-taca/admin/dashboard" className="link active">
                <RxDashboard />
                <p>Dashboard</p>
              </Link>
              <Link to="/humascot-taca/admin/post" className="link">
                <IoDocumentText />
                <p>Products</p>
              </Link>
              <Link to="/humascot-taca/admin/gallery" className="link">
                <MdOutlineSell />
                <p>Orders</p>
              </Link>
              <Link to="/humascot-taca/admin" className="link">
                <BiUser />
                <p>User</p>
              </Link>
              <Link to="/humascot-taca/admin/addadmin" className="link">
                <LiaUserCogSolid />
                <p>Admin</p>
              </Link>
              <Link to="/humascot-taca/admin/message" className="link">
                <BiMessageDetail />
                <p>Message</p>
              </Link>
              <Link to="/humascot-taca/admin" className="link">
                <IoSettingsOutline />
                <p>Setting</p>
              </Link>
              <Link className="link" onClick={handleLogout}>
                <IoLogOutOutline />
                <p>Log Out</p>
              </Link>
            </div>
          </div>
          <div className="right">
            <h3>Dashboard</h3>
            <form className="search">
              <div className="search-box">
                <input type="text" placeholder="search ..." />
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
