import React, { useEffect, useState } from "react";
import "./Contact.css";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import { useActionData, useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  // For authenticate user
  const [userAccount, setUserAccount] = useState("");
  const [userDetail, setUserDetail] = useState([]);
  const token = localStorage.getItem("token");

  const navitage = useNavigate();

  // For authen users
  useEffect(() => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/authen",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .request(config)
      .then((response) => {
        if (response.data.Status === "Success") {
          setUserAccount(response.data.decoded.id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // For get user by id
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/getCustomer/" + userAccount,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setUserDetail(response.data.Result);
        console.log(JSON.stringify(userDetail));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="contactBox_container">
        <div className="contact_content">
          <h2>Phone: 020998878788</h2>
          <h2>Email: humascot@gmail.com</h2>
          <h2>Address: Asean mall</h2>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Contact;
