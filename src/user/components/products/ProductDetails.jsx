import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./productBuy.css";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  // Prepare for Customer is order product
  const [customerID, setCustomerID] = useState("");
  const [productID, setProductID] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  

  // ======================================================================>>
  // ======================================================================>>
  // ======================================================================>>

  const [productCounts, setProductCounts] = useState(1);
  const decrementValue = () => {
    if (productCounts > 1) {
      setProductCounts(productCounts - 1);
    }
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

  // Handle submitted
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [slideIndex, setSlideIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);

  const slideRef = useRef();

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  }, []);


  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function showSlides(n) {
    const currentProduct = filteredProducts[0]; // Assuming there's only one product in the array

    if (n > currentProduct.images.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(currentProduct.images.length);
    } else {
      setSlideIndex(n);
    }
  }
  //Drag
  function dragStart(e) {
    setStart(e.clientX);
  }
  function dragOver(e) {
    let touch = e.clientX;
    setChange(start - touch);
  }
  function dragEnd(e) {
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  }
  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft =
      slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex]);
  // ======================================================================>>
  // ======================================================================>>
  // ======================================================================>>

  return (
    <>
      <Header />

      <div className="contentBody">
        <Link to="/product_search" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        <div>
          <div className="boxProduct_deteils">
            <div className="slider">
              <React.Fragment>
                <section className="product_details">
                  <div className="product-page-img">
                    <div className="myslides">
                      <img src="" alt="img" />
                    </div>

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
                      <div
                        className={`slider-box ${
                           1 === slideIndex && "active"
                        }`}
                        onClick={() => setSlideIndex(index + 1)}
                      >
                        <img src="" alt="image" />
                      </div>
                    </div>
                  </div>
                </section>
              </React.Fragment>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="txtContentproduct">
                <h1 className="txt_nameP">product.productName</h1>
                <p className="money_txt">$product.price</p>
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
                <p className="txt_description">desc</p>

                <div className="hr">
                  <hr />
                </div>

                {/* Checked colors */}
                <div className="color_product">
                  <div>
                    <label htmlFor="red">red</label>
                    <input id="red" className="echColor" type="radio" />
                  </div>
                  <div>
                    <label htmlFor="blue">blue</label>
                    <input id="blue" className="echColor" type="radio" />
                  </div>
                  <div>
                    <label htmlFor="black">black</label>
                    <input id="black" className="echColor" type="radio" />
                  </div>
                </div>

                {/* Checked sizes */}
                <div className="size_product">
                  <p>Size:</p>
                  <label
                    htmlFor="s"
                  >
                    S
                  </label>
                  <input type="radio" id="s" />
                  <label
                    htmlFor="m"
                  >
                    M
                  </label>
                  <input type="radio" id="m" />
                  <label
                    htmlFor="l"
                  >
                    L
                  </label>
                  <input type="radio" id="l" />
                  <label
                    htmlFor="xl"
                  >
                    XL
                  </label>
                  <input type="radio" id="xl" />
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
            <img src="" alt="img" />
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default ProductDetails;