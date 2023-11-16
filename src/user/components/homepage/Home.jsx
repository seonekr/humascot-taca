import React from 'react'
import Banner from "../header/Banner";
import Category from "./Category";
import ProductHome from "../products/ProductHome";
import Menu from "../menu/Menu";
import "./home.css"

const Home = () => {
  return (
    <div className='containerHomeBox'>
        <Banner/>
        <Category/>
        <ProductHome/>
        <Menu/>
    </div>
  );
};

export default Home;
