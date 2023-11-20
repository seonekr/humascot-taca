import React, { useState } from "react";
import "./header.css";
import { FaMagnifyingGlass, FaCartShopping, FaRegUser } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../../../img/Logo1.png";

const Header = ({ handleSearch }) => {
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/product_search/' },
    { label: 'Orders', path: '/order/'},
    { label: 'Contact', path: '/contacts/' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Search bar function
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <>
      <section id="header">
        <div className="navbar"> 
          <div className="headWithBox">
            <div className="headMenu">
              <div><Link to="/"><img src={Logo1} alt="Logo" /></Link></div>
              <div className="boxLiMenu">
                <div className="linkLi">
                  {menuItems.map((menuItem) => (
                    <Link key={menuItem.label} to={menuItem.path} className={`link ${location.pathname === menuItem.path ? 'active' : ''}`}>
                      {menuItem.icon}
                      <p>{menuItem.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="ulHead_box">
                <form onSubmit={handleSubmit}> {/* Here is search bar */}
                  <input
                    type="text"
                    placeholder="Search products ..........."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit"><FaMagnifyingGlass className="iconSearch"/></button>
                </form>
              <div><Link to="/cart"><FaCartShopping className="head_colorr" /></Link></div>
              <div><Link to="/account"><FaRegUser className="head_colorr" /></Link></div>
              <div><Link to="/login/" className="head_colorr">Login<BiLogIn className="login" /></Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;