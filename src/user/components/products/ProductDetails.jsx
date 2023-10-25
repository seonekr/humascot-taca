import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './productBuy.css';
import acer1 from "/acer1.jpg";
import acer2 from "/acer2.jpg";
import acer3 from "/acer3.jpg";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';

function ProductDetails() {
  const [slides, setSlides] = useState([acer1, acer2, acer3]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  // Checked sizes
  const [checked, setChecked] = useState({
    s: false,
    m: true,
    l: false,
    xl: false
  });

  // Handle checked sizes
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setChecked((prevState) => ({
      ...prevState,
      [id]: checked
    }));
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
  const [value, setValue] = useState(1);
  const decrementValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const incrementValue = () => {
    setValue(value + 1);
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  // Handle submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedSizes = Object.keys(checked).filter((key) => checked[key]);
    console.log(selectedSizes); // do something with the selected sizes
    console.log(value);
    console.log(color);
  };

  return (
    <>
      <Header/>
      
        <div className="contentBody">
          <Link to="/product_search/" className='box_container_back_icons_back'>
            <IoIosArrowBack id="icons_back"/>
            <p>Back</p>
          </Link>
          <div className="boxProduct_deteils">
            
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
              <h1 className="txt_nameP">Havic HV G-92 Gamepad</h1>
              <p className='money_txt'>$192.00</p>
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
                Hello PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy 
                bubble free install & mess free removal Pressure sensitive.
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
                <label htmlFor="s" className={checked.s ? "echSize active" : "echSize"}>S</label>
                <input type="checkbox" id="s" value="s" onChange={handleCheckboxChange}/>
                <label htmlFor="m" className={checked.m ? "echSize active" : "echSize"}>M</label>
                <input type="checkbox" id="m" value="m" onChange={handleCheckboxChange}/>
                <label htmlFor="l" className={checked.l ? "echSize active" : "echSize"}>L</label>
                <input type="checkbox" id="l" value="l" onChange={handleCheckboxChange}/>
                <label htmlFor="xl" className={checked.xl ? "echSize active" : "echSize"}>XL</label>
                <input type="checkbox" id="xl" value="xl" onChange={handleCheckboxChange}/>
              </div>

              {/* Amount product */}
              <div className="container_item_icon">
                <div className="container_minus_plus" onClick={decrementValue}>-</div>
                <span>
                  <input type="text" value={value} onChange={handleChange} />
                </span>
                <div className="container_minus_plus" onClick={incrementValue}>+</div>
              </div>

              <div className="Count_product">
                  <Link to="/cart/payment" className="echbtn btnBut">Buy Now</Link>
                  <button type="submit" className="echbtn btnAdd">Add To Cart</button>
              </div>
            </div>
            </form>
          </div>
        </div>

      
      <Menu/>
    </>
  )
}

export default ProductDetails