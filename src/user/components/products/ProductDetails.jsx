import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './productBuy.css'
import acer1 from "/acer1.jpg"
import acer2 from "/acer2.jpg"
import acer3 from "/acer3.jpg"

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


  return (
    <div className='container_boxx'>
      {/* <header className='header_boxx'>
        <div className="headerr_positoinn">
          <div className="heaLeft">
            <h2>TACA</h2>
          </div>
          <div className="heaRight">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="#777777" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
              <path d="M9.075 22.2097C9.53064 22.2097 9.9 21.8414 9.9 21.3871C9.9 20.9328 9.53064 20.5645 9.075 20.5645C8.61937 20.5645 8.25 20.9328 8.25 21.3871C8.25 21.8414 8.61937 22.2097 9.075 22.2097Z" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.6248 22.2097C21.0804 22.2097 21.4498 21.8414 21.4498 21.3871C21.4498 20.9328 21.0804 20.5645 20.6248 20.5645C20.1692 20.5645 19.7998 20.9328 19.7998 21.3871C19.7998 21.8414 20.1692 22.2097 20.6248 22.2097Z" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.4751 4.11292H5.7751L8.2501 18.0968H21.4501" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.2501 13.7097H21.1118C21.2072 13.7098 21.2997 13.6769 21.3735 13.6166C21.4473 13.5563 21.4979 13.4724 21.5166 13.3791L23.0016 5.97589C23.0136 5.9162 23.0121 5.85459 22.9973 5.79553C22.9826 5.73646 22.9548 5.68141 22.9161 5.63433C22.8773 5.58726 22.8286 5.54935 22.7734 5.52333C22.7182 5.49732 22.6579 5.48384 22.5968 5.48389H6.6001" stroke="#777777" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C11.0111 2 10.0444 2.29324 9.22215 2.84265C8.3999 3.39206 7.75904 4.17295 7.3806 5.08658C7.00216 6.00021 6.90315 7.00555 7.09607 7.97545C7.289 8.94536 7.7652 9.83627 8.46447 10.5355C9.16373 11.2348 10.0546 11.711 11.0245 11.9039C11.9945 12.0969 12.9998 11.9978 13.9134 11.6194C14.827 11.241 15.6079 10.6001 16.1573 9.77785C16.7068 8.95561 17 7.98891 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2ZM12 10C11.4067 10 10.8266 9.82405 10.3333 9.49441C9.83994 9.16476 9.45542 8.69623 9.22836 8.14805C9.0013 7.59987 8.94189 6.99667 9.05764 6.41473C9.1734 5.83279 9.45912 5.29824 9.87868 4.87868C10.2982 4.45912 10.8328 4.1734 11.4147 4.05764C11.9967 3.94189 12.5999 4.0013 13.1481 4.22836C13.6962 4.45542 14.1648 4.83994 14.4944 5.33329C14.8241 5.82664 15 6.40666 15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10ZM21 21V20C21 18.1435 20.2625 16.363 18.9497 15.0503C17.637 13.7375 15.8565 13 14 13H10C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20V21H5V20C5 18.6739 5.52678 17.4021 6.46447 16.4645C7.40215 15.5268 8.67392 15 10 15H14C15.3261 15 16.5979 15.5268 17.5355 16.4645C18.4732 17.4021 19 18.6739 19 20V21H21Z" fill="#777777" />
            </svg>
          </div>
        </div>
      </header> */}

      <div className="contentBody">
        <div className="boxProduct_deteils">
          <div className="slider">
            <div className={`slide ${direction}`} style={{ backgroundImage: `url(${slides[activeSlide]})` }}></div>
            <div className="navigation but1">
              <div className="nav-btn " onClick={handlePrevSlide}>&#8249;</div>
            </div>
            <div className="navigation but2">
              <div div className="nav-btn " onClick={handleNextSlide}>&#8250;</div>
            </div>
          </div>

          <div className="txtContentproduct">
            <h1 className="txt_nameP">Havic HV G-92 Gamepad</h1>
            <p className='money_txt'>$192.00</p>
            <div className="startBox">
              <div className='sartBox_icon'>
                <box-icon type='solid' name='star' id="start_icon"></box-icon>
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
              <Link to="#" className="echColor colB"></Link>
              <Link to="#" className="echColor colW"></Link>
              <Link to="#" className="echColor colBlue"></Link>
            </div>

            <div className="size_product">
              <p>Size:</p>
              <Link to="#" className="echSize">S</Link>
              <Link to="#" className="echSize">M</Link>
              <Link to="#" className="echSize">L</Link>
              <Link to="#" className="echSize">XL</Link>
            </div>
            <Link to="#" className="echCount">
              <div className="minusBox borderCount">
                <box-icon name='minus'></box-icon>
              </div>
              <p className="CountcenterNumber">2</p>
              <div className="plusBox borderCount">
                <box-icon name='plus'></box-icon>
              </div>
            </Link>
            <Link t0="#" className="Count_product">
                <div className="echbtn btnBut">Buy Now</div>
                <div className="echbtn btnAdd">Add To Cart</div>
            </Link>
          </div>
        </div>
      </div>

      <footer className='footer_boxx'>
        <div className="btn_foot Buy_Now">
          <Link to="#">Buy Now</Link>
        </div>
        <div className="btn_foot Add_To_Cart">
          <Link to="#">Add To Cart</Link>
        </div>
      </footer>

    </div>
  )
}

export default ProductDetails