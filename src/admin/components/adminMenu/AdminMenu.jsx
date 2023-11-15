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
import { Link, useLocation  } from "react-router-dom";

const AdminMenu = () => {
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard/', icon: <RxDashboard /> },
    { label: 'Products', path: '/product/', icon: <IoDocumentText /> },
    { label: 'Orders', path: '/orderpage/', icon: <MdOutlineSell /> },
    { label: 'User', path: '/users/',  icon: <BiUser />},
    { label: 'Admin', path: '/admins/', icon: <LiaUserCogSolid /> },
    { label: 'Log Out', path: '/', icon: <IoLogOutOutline /> },
  ];

  return (
    <section id="dashboard">
      <div className="left">
        <div className="menu">
          {menuItems.map((menuItem) => (
            <Link key={menuItem.label} to={menuItem.path} className={`link ${location.pathname === menuItem.path ? 'active' : ''}`}>
              {menuItem.icon}
              <p>{menuItem.label}</p>
            </Link>
          ))}
        </div>
        <div className="right">
          <Link to="/dashboard/" className="logo">
            <span>
              <img src={Logo1} alt="" />
            </span>
          </Link>
          
          <Link to="/admins/" className="userAdminImage">
            <img src={user} alt="Logo_Profile" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminMenu;
