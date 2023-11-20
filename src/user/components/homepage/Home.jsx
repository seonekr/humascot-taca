import React, { useEffect, useState } from "react";
import Banner from "../header/Banner";
import Category from "./Category";
import ProductHome from "../products/ProductHome";
import Menu from "../menu/Menu";
import "./home.css";

const Home = () => {
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
          localStorage.setItem("userID", result.decoded.id);
        } else {
          localStorage.removeItem("userID");
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="containerHomeBox">
      <Banner />
      <Category />
      <ProductHome />
      <Menu />
    </div>
  );
};

export default Home;
