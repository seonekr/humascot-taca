import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./productBuy.css";
import acer1 from "/acer1.jpg";
import acer2 from "/acer2.jpg";
import acer3 from "/acer3.jpg";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function ProductDetails() {
  const [slides, setSlides] = useState([acer1, acer2, acer3]);
  const [products, setProducts] = useState(null)
  const [color, setColor] = useState(null);

  // Get productID
  const location = useLocation();
  const { sendProductID } = location.state || {};

  // Fetch product
  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setProducts(data)
      const product = data.find(product => product.productID === sendProductID);
      if (product) {
        const color = product.colors.find(color => color.colorID === 1);
        if (color) {
          setColor(color.colorName);
        }
      }
    })
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  // Checked sizes
  const [size, setSize] = useState("m");

  // Handle checked sizes
  const handleSizeChange = (event) => {
    const { id } = event.target;
    setSize(id);
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

  const handleRadioChange = (event) => {
    const { id } = event.target;
    setColor(id);
  };

  const handleAddToCart = () => {
    // Submit the information to the cart
    const cartItem = {
      productID: sendProductID,
      color: color,
      size: size,
      quantity: productCounts
    };
    fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Item added to cart:', data);
      // Handle any further actions after adding to cart
    })
    .catch(error => {
      console.error('Error adding item to cart:', error);
      // Handle error
    });
  };

  return (
    <>
      <Header />
      <div className="contentBody">
        <Link to="/product_search/" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        {products  && 
        products.filter(product => product.productID === sendProductID)
        .map((product) => (
            <div className="boxProduct_deteils" key={product.productID}>
              <div className="slider">
                <div
                  className={`slide ${direction}`}
                  style={{ backgroundImage: `url(${slides[activeSlide]})` }}
                ></div>
                <div className="navigation but1">
                  <div className="nav-btn " onClick={handlePrevSlide}>
                    &#8249;
                  </div>
                </div>
                <div className="navigation but2">
                  <div className="nav-btn " onClick={handleNextSlide}>
                    &#8250;
                  </div>
                </div>
              </div>

              <form>
                <div className="txtContentproduct">
                  <h1 className="txt_nameP">{product.productName}</h1>
                  <p className="money_txt">${product.price}</p>
                  <div className="startBox">
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
                  </div>
                  <p className="txt_description">{product.description}</p>

                  <div className="hr">
                    <hr />
                  </div>


                  {/* Checked colors */}
                  <div className="color_product">
                    {product.colors.map((colors) => (
                      <div key={colors.colorID}>
                        <label htmlFor={colors.colorName}>{colors.colorName}</label>
                        <input
                          className="echColor"
                          type="radio"
                          id={colors.colorName}
                          checked={colors.colorName === color}
                          onChange={ handleRadioChange }
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
                    <button
                      type="submit"
                      className="echbtn btnBut"
                      name="buyNow"
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="echbtn btnAdd"
                      name="addToCart"
                      onClick={handleAddToCart}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ))
        }
      </div>
      <Menu />
    </>
  );
}

export default ProductDetails;