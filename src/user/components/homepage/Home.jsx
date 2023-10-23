import Header from "../header/Header";
import Category from "./Category";
import ProductHome from "../products/ProductHome";
import Menu from "../menu/Menu";

import "./home.css"
import Banner from "../header/Banner";

import Banner from "../header/Banner";
import "./home.css";
import { useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";


const Home = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   let config = {
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: "http://localhost:3001/authen",
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       if(response.data.Status === "Success"){
  //         console.log(JSON.stringify(response.data.Status));
  //       } else {
  //         navigate("/humascot-taca/login");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
        <Header/>
        <Banner/>
        <Category/>
        <ProductHome/>
        <Menu/>
        <Header />
    </>
  );
};

export default Home;
