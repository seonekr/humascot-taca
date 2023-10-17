import Header from "../header/Header";
import Category from "./Category";
import ProductHome from "../products/ProductHome";
import Menu from "../menu/Menu";
import "./home.css"

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
