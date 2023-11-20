import React, { useState, useEffect } from "react";
import "./header.css";
import { FaMagnifyingGlass, FaCartShopping, FaRegUser } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../../../img/Logo1.png";

const Header = ({ handleSearch }) => {
  // For authenticate user
  const [userAccount, setUserAccount] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(import.meta.env.VITE_API + "/authen", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Status === "Success") {
          setUserAccount(result.decoded.email);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/product_search" },
    { label: "Orders", path: userAccount ? "/order" : "/login" },
    { label: "Contact", path: userAccount ? "/contacts" : "/login" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

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
              <div>
                <Link to="/">
                  <img src={Logo1} alt="Logo" />
                </Link>
              </div>
              <div className="boxLiMenu">
                <div className="linkLi">
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
                </div>
              </div>
            </div>

            <div className="ulHead_box">
              <form onSubmit={handleSubmit}>
                {" "}
                {/* Here is search bar */}
                <input
                  type="text"
                  placeholder="Search products ..........."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                  <FaMagnifyingGlass />
                </button>
              </form>
              <div>
                {userAccount ? (
                  <Link to="/cart">
                    <FaCartShopping className="head_colorr" />
                  </Link>
                ) : (
                  <Link to="/login">
                    <FaCartShopping className="head_colorr" />
                  </Link>
                )}
              </div>
              {userAccount ? (
                <div>
                  <Link to="/account">
                    <FaRegUser className="head_colorr" />
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to="/login" className="head_colorr">
                    Login
                    <BiLogIn className="login" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
