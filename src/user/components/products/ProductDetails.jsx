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
  const [products, setProducts] = useState([
    {
      productID: 1,
      productName: "pro1",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: acer
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "black" }, { colorID: 2, colorName: "blue" }, { colorID: 3, colorName: "red" }, { colorID: 4, colorName: "green" }]
    },
    {
      productID: 2,
      productName: "pro2",
      productType: "clothes",

      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: dress
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: acer
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "black" }, { colorID: 2, colorName: "blue" }, { colorID: 3, colorName: "red" }, { colorID: 4, colorName: "green" }]
    },
    {
      productID: 3,
      productName: "pro3",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "black" }, { colorID: 2, colorName: "blue" }, { colorID: 3, colorName: "red" }, { colorID: 4, colorName: "green" }]
    },
    {
      productID: 4,
      productName: "pro4",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: dress
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: acer
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "black" }, { colorID: 2, colorName: "blue" }, { colorID: 3, colorName: "red" }, { colorID: 4, colorName: "green" }]
    },
    {
      productID: 5,
      productName: "pro5",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: acer
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "black" }, { colorID: 2, colorName: "blue" }, { colorID: 3, colorName: "red" }, { colorID: 4, colorName: "green" }]
    },
    {
      productID: 6,
      productName: "pro6",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: acer
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "black" }, { colorID: 2, colorName: "blue" }, { colorID: 3, colorName: "red" }, { colorID: 4, colorName: "green" }]
    },
    {
      productID: 7,
      productName: "pro7",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: acer
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "black" }, { colorID: 2, colorName: "blue" }, { colorID: 3, colorName: "red" }, { colorID: 4, colorName: "green" }]
    },
    {
      productID: 8,
      productName: "pro8",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: acer
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "black" }, { colorID: 2, colorName: "blue" }, { colorID: 3, colorName: "red" }, { colorID: 4, colorName: "green" }]
    },
    {
      productID: 9,
      productName: "pro9",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: acer
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "black" }, { colorID: 2, colorName: "blue" }, { colorID: 3, colorName: "red" }, { colorID: 4, colorName: "green" }]
    },
    {
      productID: 10,
      productName: "pro10",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: acer
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "black" }, { colorID: 2, colorName: "blue" }, { colorID: 3, colorName: "red" }, { colorID: 4, colorName: "green" }]
    },
    {
      productID: 11,
      productName: "pro11",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: acer
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        },
        {
          src: acer
        },
        {
          src: productImage
        },
        {
          src: image1
        },
        {
          src: dress
        }
      ],
      colors: [{ colorID: 1, colorName: "red" }, { colorID: 2, colorName: "green" }]
    },
  ]);

  // Checked sizes
  const [size, setSize] = useState("m");

  // Handle checked sizes
  const handleSizeChange = (event) => {
    const { id } = event.target;
    setSize(id);
  };


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
  const { sendProductID } = location?.state || {};

  const navigate = useNavigate();

  // Match productID
  const filteredProducts = products.filter(
    (product) => product.productID === sendProductID
  );

  // Checked colors
  const proID = products.find(item => item.productID === sendProductID);
  const colID = proID.colors.find(item => item.colorID === 1);
  const colorName = colID.colorName;
  const [color, setColor] = useState(colorName);

  const handleRadioChange = (event) => {
    const { id } = event.target;
    setColor(id);
  };

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

      navigate('/cart/payment/', {
        state: {
          products: selectedProducts,
        },
      });
    } else {

      const addTocart = {
        size: size,
        color: color,
        productCounts: productCounts,
      };

      console.log("Add to cart");
      console.log(addTocart);
      console.log("ProductID:", sendProductID); // this  productID
    }
  };

  //Start image gallery
  const [slideIndex, setSlideIndex] = useState(1)

  const [width, setWidth] = useState(0)
  const [start, setStart] = useState(0)
  const [change, setChange] = useState(9)

  const slideRef = useRef();

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width)
  }, [])

  // const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  // function currentSlide(n) {
  //   showSlides(n);
  // }

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
  // Render the current image
  const currentImage = products[0].images[slideIndex - 1];
  //Drag
  function dragStart(e) {
    setStart(e.clientX)
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
    slideRef.current.scrollLeft = slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex])
  //End image gallery

  return (
    <>
      <Header />

      <div className="contentBody">
        <Link to="/product_search/" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        {filteredProducts.map((product) => (
          <div className="boxProduct_deteils" key={product.productID}>
            <div className="slider">
              <React.Fragment>
                <section className='product_details'>
                  <div className="product-page-img">
                    {
                      product.images.map((image, index) => (
                        <div key={index} className="myslides" style={{ display: (index + 1) === slideIndex ? "block" : "none" }}>
                          <img src={image.src} alt="" />
                        </div>
                      ))
                    }

                    <a className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a className='next' onClick={() => plusSlides(1)}>&#10095;</a>

                    <div className="slider_img" draggable={true} ref={slideRef}
                      onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
                      {
                        product.images.map((image, index) => (
                          <div key={index} className={`slider-box ${index + 1 === slideIndex && 'active'}`}
                            onClick={() => setSlideIndex(index + 1)}>
                            <img src={image.src} alt="" />
                          </div>
                        ))
                      }
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
                      <label htmlFor={colors.colorName}>{colors.colorName}</label>
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
        ))}
        <div className="description_container">
          <img src={description} alt="" />
        </div>
      </div>
      <Menu />
    </>
  );
}

export default ProductDetails;