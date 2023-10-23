import Header from "../header/Header";
import Category from "./Category";
import ProductHome from "../products/ProductHome";
import Menu from "../menu/Menu";
import "./home.css"
import Banner from "../header/Banner";

const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <Category/>
        <ProductHome/>
        <Menu/>
    </>
  );
};

export default Home;
