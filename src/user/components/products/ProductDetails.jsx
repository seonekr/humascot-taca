import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './productBuy.css';
import acer1 from "/acer1.jpg";
import acer2 from "/acer2.jpg";
import acer3 from "/acer3.jpg";
import Menu from "../menu/Menu";
import 'boxicons';

function ProductDetails() {
  const [slides, setSlides] = useState([acer1, acer2, acer3]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("right");

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



  // ============ Add to cart =============*/

  

  


  return (
    <>
      
        <div className="contentBody">
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

            <div className="txtContentproduct">
              <h1 className="txt_nameP">Havic HV G-92 Gamepad</h1>
              <p className='money_txt'>$192.00</p>
              <div className="startBox">
                <div className='sartBox_icon'>
                  <box-icon type='solid' name='star'></box-icon>
                  <box-icon type='solid' name='star'></box-icon>
                  <box-icon type='solid' name='star'></box-icon>
                  <box-icon type='solid' name='star'></box-icon>
                  <box-icon name='star' ></box-icon>
                </div>

                <div >
                  <p>( 150 Reviews )</p>
                </div>
              </div>
              <p className='txt_description'> Hello PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

              <div className="color_product">
                <p>Color:</p>
                <div className="echColor colB"></div>
                <div className="echColor colW"></div>
                <div className="echColor colBlue"></div>
              </div>

              <div className="size_product">
                <p>Size:</p>
                <div className="echSize">S</div>
                <div className="echSize">M</div>
                <div className="echSize">L</div>
                <div className="echSize">XL</div>
              </div>
              <div className="echCount">
                <div className="minusBox borderCount">
                  <Link to="#"><box-icon name='minus'></box-icon></Link>
                </div>
                <p className="CountcenterNumber">2</p>
                <div className="plusBox borderCount">
                  <Link to="#"><box-icon name='plus'></box-icon></Link>
                </div>
              </div>
              <div className="Count_product">
                  <Link to="/humascot-taca/cart/payment" className="echbtn btnBut">Buy Now</Link>
                  <Link className="echbtn btnAdd">Add To Cart</Link>
              </div>
            </div>
          </div>
        </div>

      
      <Menu/>
    </>
  )
}

export default ProductDetails