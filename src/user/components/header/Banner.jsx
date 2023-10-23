import React, { useState, useEffect } from "react";
import "./Banner.css";
import card from "../../../img/card.png";
import banner from "../../../img/banner.jpg";
import jcb from "../../../img/jcb.png";


const Banner = () => {
  const [slides, setSlides] = useState([card, banner, jcb]);
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
    <div className="slider slider_ImageBox">
      <div className={`slide ${direction}`} style={{backgroundImage: `url(${slides[activeSlide]})`}}></div>
      <div className="navigation but1">
        <div className="nav-btn " onClick={handlePrevSlide}>&#8249;</div>
      </div>
      <div className="navigation but2">
        <div className="nav-btn " onClick={handleNextSlide}>&#8250;</div>
      </div>
    </div>
  );
};

export default Banner;