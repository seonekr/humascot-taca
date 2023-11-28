import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./productBuy.css";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import dress from "../../../img/dress.png";
import image1 from "../../../img/image1.png";
import description from "../../../img/detailproduct.jpg";
import acer from "../../../img/acer.png";
import productImage from "../../../img/productImage.png";

function ProductDetails() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Header />

      <div className="contentBody">
        <Link to="/product_search" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        {products.map((product) => (
          <div key={product.productID}>
            <div className="boxProduct_deteils">
              <div className="slider">
                <React.Fragment>
                  <section className="product_details">
                    <div className="product-page-img">
                      {product.images.map((image, index) => (
                        <div
                          key={index}
                          className="myslides"
                          style={{
                            display:
                              index + 1 === slideIndex ? "block" : "none",
                          }}
                        >
                          <img src={image.src} alt="" />
                        </div>
                      ))}

                      <a className="prev" onClick={() => plusSlides(-1)}>
                        &#10094;
                      </a>
                      <a className="next" onClick={() => plusSlides(1)}>
                        &#10095;
                      </a>

                      <div
                        className="slider_img"
                        draggable={true}
                        ref={slideRef}
                        onDragStart={dragStart}
                        onDragOver={dragOver}
                        onDragEnd={dragEnd}
                      >
                        {product.images.map((image, index) => (
                          <div
                            key={index}
                            className={`slider-box ${
                              index + 1 === slideIndex && "active"
                            }`}
                            onClick={() => setSlideIndex(index + 1)}
                          >
                            <img src={image.src} alt="" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </React.Fragment>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="txtContentproduct">
                  <h1 className="txt_nameP">{product.productName}</h1>
                  <p className="money_txt">${product.price}</p>
                  {/* Star Box */}
                  {/* <div className="startBox">
                  <div className="sartBox_icon">
                    <AiFillStar id="icon_stars" />
                    <AiFillStar id="icon_stars" />
                    <AiFillStar id="icon_stars" />
                    <AiFillStar id="icon_stars" />
                    <AiOutlineStar id="icon_star" />
                  </div>

                  <div>
                    <p>( 150 Reviews )</p>
                  </div>
                </div> */}
                  <p className="txt_description">{product.description}</p>

                  <div className="hr">
                    <hr />
                  </div>

                  {/* Checked colors */}
                  <div className="color_product">
                    {product.colors.map((colors) => (
                      <div key={colors.colorID}>
                        <label htmlFor={colors.colorName}>
                          {colors.colorName}
                        </label>
                        <input
                          className="echColor"
                          type="radio"
                          id={colors.colorName}
                          checked={colors.colorName === color}
                          onChange={handleRadioChange}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Checked sizes */}
                  <div className="size_product">
                    <p>Size:</p>
                    <label
                      htmlFor="s"
                      className={`echSize ${size === "s" ? "active" : ""}`}
                    >
                      S
                    </label>
                    <input
                      type="radio"
                      id="s"
                      checked={size === "s"}
                      onChange={handleSizeChange}
                    />
                    <label
                      htmlFor="m"
                      className={`echSize ${size === "m" ? "active" : ""}`}
                    >
                      M
                    </label>
                    <input
                      type="radio"
                      id="m"
                      checked={size === "m"}
                      onChange={handleSizeChange}
                    />
                    <label
                      htmlFor="l"
                      className={`echSize ${size === "l" ? "active" : ""}`}
                    >
                      L
                    </label>
                    <input
                      type="radio"
                      id="l"
                      checked={size === "l"}
                      onChange={handleSizeChange}
                    />
                    <label
                      htmlFor="xl"
                      className={`echSize ${size === "xl" ? "active" : ""}`}
                    >
                      XL
                    </label>
                    <input
                      type="radio"
                      id="xl"
                      checked={size === "xl"}
                      onChange={handleSizeChange}
                    />
                  </div>

                  {/* Amount product */}
                  <div className="container_item_icon">
                    <div
                      className="container_minus_plus"
                      onClick={decrementValue}
                    >
                      -
                    </div>
                    <span>
                      <input
                        type="text"
                        value={productCounts}
                        onChange={handleChange}
                      />
                    </span>
                    <div
                      className="container_minus_plus"
                      onClick={incrementValue}
                    >
                      +
                    </div>
                  </div>
                  <div className="Count_product">
                    <button type="submit" className="echbtn btnBut">
                      Buy Now
                    </button>
                    <button type="submit" className="echbtn btnAdd">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="description_container">
              <img src={product.descImage} alt="" />
            </div>
          </div>
        ))}
      </div>
      <Menu />
    </>
  );
}

export default ProductDetails;
