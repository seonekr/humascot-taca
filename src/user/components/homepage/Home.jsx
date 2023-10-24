import Header from "../header/Header";
import Category from "./Category";
import ProductHome from "../products/ProductHome";
import Menu from "../menu/Menu";
import Banner from "../header/Banner";
import "./home.css";
import { useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <>
        <Header/>
        <Category/>
        <ProductHome/>
        <Menu/>
    </>
  );
};

export default Home;
