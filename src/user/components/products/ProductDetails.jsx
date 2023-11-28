import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link, useParams } from "react-router-dom";
import "./productBuy.css";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { objectOf } from "prop-types";
import { countBy } from "lodash";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // const [colors, setColors] = useState([]);
  // const [galleries, setGalleries] = useState([]);

  // For get user by id
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(import.meta.env.VITE_API + "/getProduct/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Status === "Success") {
          setProduct(result.Result[0]);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  // console.log(JSON.stringify(product.other_images_path))

  const handleSubmit = () => {};

  return (
    <>
      <Header />

      <div className="contentBody">
        <Link to="/product_search" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        <div key={product.id}>
          <div className="boxProduct_deteils">
            <div className="slider">
              <React.Fragment>
                <section className="product_details">
                  {/* <div className="product-page-img">
                    {product.images.map((image, index) => (
                      <div
                        key={index}
                        className="myslides"
                        style={{
                          display: index + 1 === slideIndex ? "block" : "none",
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
                  </div> */}
                </section>
              </React.Fragment>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="txtContentproduct">
                <h1 className="txt_nameP">{product.name}</h1>
                <p className="money_txt">{product.price}</p>
                <p className="txt_description">{product.description}</p>

                <div className="hr">
                  <hr />
                </div>

                {/* Checked colors */}
                <div className="color_product">
                  {JSON.stringify(product.other_images_path)
                    ? JSON.parse(product.other_images_path).map((image) => (
                        <img
                          key={image}
                          src={`../../../../public/images/${image}`}
                          alt="Additional Image"
                        />
                      ))
                    : console.log("No additional images")}

                  {/* {console.log(JSON.stringify(product.other_images_path))} */}
                </div>

                {/* Checked sizes */}
                <div className="size_product">
                  <p>Size:</p>
                  <label htmlFor="s">S</label>
                  <input type="radio" id="s" />
                  <label htmlFor="m">M</label>
                  <input type="radio" id="m" />
                  <label htmlFor="l">L</label>
                  <input type="radio" id="l" />
                  <label htmlFor="xl">XL</label>
                  <input type="radio" id="xl" />
                </div>

                {/* Amount product */}
                <div className="container_item_icon">
                  <div className="container_minus_plus">-</div>
                  <span>
                    <input type="text" />
                  </span>
                  <div className="container_minus_plus">+</div>
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
            <img
              src={"../../../../public/images/" + product.main_image_path}
              alt=""
            />
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default ProductDetails;
