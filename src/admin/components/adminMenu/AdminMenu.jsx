import "./adminMenu.css";
import {
  IoDocumentText,
  IoLogOutOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { LiaUserCogSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSell } from "react-icons/md";
import user from "../../../img/user.png";
import Logo1 from "../../../img/Logo1.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {
  // const location = useLocation();

  // const menuItems = [
  //   { label: 'Dashboard', path: '/dashboard/', icon: <RxDashboard /> },
  //   { label: 'Products', path: '/product/', icon: <IoDocumentText /> },
  //   { label: 'Orders', path: '/orderpage/', icon: <MdOutlineSell /> },
  //   { label: 'Users', path: '/users/',  icon: <BiUser />},
  //   { label: 'Admins', path: '/admins/', icon: <LiaUserCogSolid /> },
  //   { label: 'Log Out', path: '/', icon: <IoLogOutOutline /> },
  // ];

  // Are you sure you want to logout
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    console.log("Logged out")
    navigate("/");
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setShowConfirmation(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <section id="dashboard">
        <div className="left">
          <div className="menu">
            {/* {menuItems.map((menuItem) => (
              <Link key={menuItem.label} to={menuItem.path} className={`link ${location.pathname === menuItem.path ? 'active' : ''}`}>
                {menuItem.icon}
                <p>{menuItem.label}</p>
              </Link>
            ))} */}

            <NavLink to="/dashboard" className="link">
              <RxDashboard />
              <p>Dashboard</p>
            </NavLink>
            <NavLink to="/product" className="link">
              <IoDocumentText />
              <p>Products</p>
            </NavLink>
            <NavLink to="/orderpage" className="link">
              <MdOutlineSell />
              <p>Orders</p>
            </NavLink>
            <NavLink to="/users" className="link">
              <BiUser />
              <p>Users</p>
            </NavLink>
            <NavLink to="/admins" className="link">
              <LiaUserCogSolid />
              <p>Admins</p>
            </NavLink>
            <div onClick={() => setShowConfirmation(true)} className="link">
              <IoLogOutOutline />
              <p>Log Out</p>
            </div>

            {showConfirmation && (
              <div className="confirmation-popup">
                <p>Are you sure you want to logout?</p>
                <div className="btn_ok_on">
                  <button onClick={handleConfirmLogout} className="btn_yes">
                    Yes
                  </button>
                  <button onClick={handleCancelLogout} className="btn_on">
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <NavLink to="/dashboard" className="logo">
              <span>
                <img src={Logo1} alt="" />
              </span>
            </NavLink>

            <NavLink to="/adminacount" className="userAdminImage">
              <img src={user} alt="Logo_Profile" />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminMenu;
