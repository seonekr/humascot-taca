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
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dialog from "../menagerUser/Dialog";

const AdminMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    navigate("/");
  };

  const menuItems = [
    { label: "Dashboard", path: "/dashboard/", icon: <RxDashboard /> },
    { label: "Products", path: "/product/", icon: <IoDocumentText /> },
    { label: "Orders", path: "/orderpage/", icon: <MdOutlineSell /> },
    { label: "Users", path: "/users/", icon: <BiUser /> },
    { label: "Admins", path: "/admins/", icon: <LiaUserCogSolid /> },
  ];

  // Function Log Out

  return (
    <>
      <section id="dashboard">
        <div className="left">
          <div className="menu">
            {menuItems.map((menuItem) => (
              <Link
                key={menuItem.label}
                to={menuItem.path}
                className={`link ${
                  location.pathname === menuItem.path ? "active" : ""
                }`}
              >
                {menuItem.icon}
                <p>{menuItem.label}</p>
              </Link>
            ))}
            <Link onClick={handleLogout} className="link">
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

            <Link to="/admins/admin" className="userAdminImage">
              <img src={user} alt="Logo_Profile" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminMenu;
