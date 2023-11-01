import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './productBuy.css';
import acer1 from "/acer1.jpg";
import acer2 from "/acer2.jpg";
import acer3 from "/acer3.jpg";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import dress from "../../../img/dress.png";
import image1 from "../../../img/image1.png";
import acer from '../../../img/acer.png';
import productImage from "../../../img/productImage.png";

function ProductDetails() {
  const [slides, setSlides] = useState([acer1, acer2, acer3]);
  const [products, setProducts] = useState([
    {productID: 1, productName: "pro1", productType: "clothes", price: 10, description: "desc for this product", images: [acer]},
    {productID: 2, productName: "pro2", productType: "clothes", price: 10, description: "desc for this product", images: [dress]},
    {productID: 3, productName: "pro3", productType: "clothes", price: 10, description: "desc for this product", images: [acer]},
    {productID: 4, productName: "pro4", productType: "clothes", price: 10, description: "desc for this product", images: [dress]},
    {productID: 5, productName: "pro5", productType: "clothes", price: 10, description: "desc for this product", images: [image1]},
    {productID: 6, productName: "pro6", productType: "clothes", price: 10, description: "desc for this product", images: [image1]},
    {productID: 7, productName: "pro7", productType: "clothes", price: 10, description: "desc for this product", images: [productImage]},
    {productID: 8, productName: "pro8", productType: "clothes", price: 10, description: "desc for this product", images: [acer]},
    {productID: 9, productName: "pro9", productType: "clothes", price: 10, description: "desc for this product", images: [productImage]},
    {productID: 10, productName: "pro10", productType: "clothes", price: 10, description: "desc for this product", images: [acer]},
    {productID: 11, productName: "pro11", productType: "clothes", price: 10, description: "desc for this product", images: [productImage]}
  ]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  // Checked sizes
  const [size, setSize] = useState("m");

  // Handle checked sizes
  const handleSizeChange = (event) => {
    const { id } = event.target;
    setSize(id);
  };

  // Checked colors
  const [color, setColor] = useState("colB");

  const handleRadioChange = (event) => {
    const { id } = event.target;
    setColor(id);
  };

  const handlePrevSlide = () => {
    setDirection("left");
    setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
  };

  const handleNextSlide = () => {
    setDirection("right");
    setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide]);


  /*============== minus_plus ============= */
  const [productCounts, setProductCounts] = useState(1);
  const decrementValue = () => {
      setProductCounts(productCounts - 1);
  };

  const incrementValue = () => {
    setProductCounts(productCounts + 1);
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setProductCounts(newValue);
    }
  };

  // Get send ID
  const location = useLocation();
  const { sendProductID } = location.state;
  const [getId, setGetId] = useState(sendProductID)

  // Buy now
  const [getProductID, setGetProductID] =  useState(getId);
  const [userID, setUserID] = useState(2);
  // Get date tody
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1; // January is month 0 in JavaScript
  const year = today.getFullYear();

  // Match productID
  const filteredProducts = products.filter(
    (product) => product.productID === getProductID
  );

  // Handle submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.nativeEvent.submitter.classList.contains("btnBut")) {
      const selectedProducts = filteredProducts.map((product) => ({
        productID: product.productID,
        productName: product.productName,
        size: size,
        color: color,
        type: product.productType,
        price: product.price,
        productCounts: productCounts,
      }));

      const dateTody = `${month}/${date}/${year}`

      console.log("Buy Now");
      console.log(selectedProducts);
      console.log("userID:", userID);
      console.log("Place on:", dateTody)
    } else {
      // "Add To Cart" button was clicked
      // console.log("Add To Cart clicked");
      
      const addTocart = {
        size: size,
        color: color,
        productCounts: productCounts,
      };

      console.log("Add to cart");
      console.log(addTocart);
      console.log("ProductID:", getProductID); // this  productID
    }

  };

  return (
    <>
      <Header/>
      
        <div className="contentBody">
          <Link to="/product_search/" className='box_container_back_icons_back'>
            <IoIosArrowBack id="icons_back"/>
            <p>Back</p>
          </Link>
          {filteredProducts.map((product) => (
          <div className="boxProduct_deteils" key={product.productID}>
            
            <div className="slider">
              <div className={`slide ${direction}`} style={{ backgroundImage: `url(${slides[activeSlide]})` }}></div>
              <div className="navigation but1">
                <div className="nav-btn " onClick={handlePrevSlide}>&#8249;</div>
              </div>
              <div className="navigation but2">
                <div className="nav-btn " onClick={handleNextSlide}>&#8250;</div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="txtContentproduct">
                <h1 className="txt_nameP">{product.productName}</h1>
                <p className='money_txt'>${product.price}</p>
                <div className="startBox">
                  <div className='sartBox_icon'>
                    <AiFillStar id="icon_stars"/>
                    <AiFillStar id="icon_stars"/>
                    <AiFillStar id="icon_stars"/>
                    <AiFillStar id="icon_stars"/>
                    <AiOutlineStar id="icon_star"/>
                  </div>

                  <div>
                    <p>( 150 Reviews )</p>
                  </div>
                </div>
                <p className='txt_description'>
                  {product.description}
                </p>

                <div className="hr"><hr/></div>

                {/* Checked colors */}
                <div className="color_product">
                  <p>Color:</p>
                  <label htmlFor="colB">Black</label>
                  <input
                    className="echColor"
                    type="radio"
                    id="colB"
                    checked={color === "colB"}
                    onChange={handleRadioChange}
                  />

                  <label htmlFor="colW">White</label>
                  <input
                    className="echColor"
                    type="radio"
                    id="colW"
                    checked={color === "colW"}
                    onChange={handleRadioChange}
                  />

                  <label htmlFor="colBlue">Blue</label>
                  <input
                    className="echColor"
                    type="radio"
                    id="colBlue"
                    checked={color === "colBlue"}
                    onChange={handleRadioChange}
                  />
                </div>

                {/* Checked sizes */}
                <div className="size_product">
                  <p>Size:</p>
                  <label htmlFor="s" className={`echSize ${size === "s" ? "active" : ""}`}>S</label>
                  <input
                    type="radio"
                    id="s"
                    checked={size === "s"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="m" className={`echSize ${size === "m" ? "active" : ""}`}>M</label>
                  <input
                    type="radio"
                    id="m"
                    checked={size === "m"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="l" className={`echSize ${size === "l" ? "active" : ""}`}>L</label>
                  <input
                    type="radio"
                    id="l"
                    checked={size === "l"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="xl" className={`echSize ${size === "xl" ? "active" : ""}`}>XL</label>
                  <input
                    type="radio"
                    id="xl"
                    checked={size === "xl"}
                    onChange={handleSizeChange}
                  />
                </div>

                {/* Amount product */}
                <div className="container_item_icon">
                  <div className="container_minus_plus" onClick={decrementValue}>-</div>
                  <span>
                    <input type="text" value={productCounts} onChange={handleChange} />
                  </span>
                  <div className="container_minus_plus" onClick={incrementValue}>+</div>
                </div>
                <div className="Count_product">
                    <button type="submit" className="echbtn btnBut">Buy Now</button>
                    <button type="submit" className="echbtn btnAdd">Add To Cart</button>
                </div>
              </div>
            </form>
          </div>
          ))}
        </div>
      <Menu/>
    </>
  )
}

export default ProductDetails