import "./productHome.css";
import 깻잎 from "../../../img/깻잎.jpg";
import 더덕무침 from "../../../img/더덕무침.jpg";
import Header from "../header/Header";
import 멸치볶음 from "../../../img/멸치볶음.jpg";
import 진미채볶음 from "../../../img/진미채볶음.jpg";
import { useState } from "react";
import acer from "../../../img/acer.png";
import productImage from "../../../img/productImage.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const ProductHome = () => {
  const [products, setProducts] = useState([
    {
      productID: 1,
      productName: "깻잎",
      price: 8.500,
      review: 50,
      popular: true,
      images: [ { src: 깻잎 }],
    },
    {
      productID: 2,
      productName: "더덕무침",
      price: 7.520,
      review: 45,
      popular: true,
      images: [ { src: 더덕무침 }],
    },
    {
      productID: 3,
      productName: "멸치볶음",
      price: 9.250,
      review: 30,
      popular: true,
      images: [ { src: 멸치볶음 }],
    },
    {
      productID: 4,
      productName: "진미채볶음",
      price: 8.500,
      review: 29,
      popular: true,
      images: [ { src: 진미채볶음 }],
    }, 
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [displayCount, setDisplayCount] = useState(8);
  const [showButton, setShowButton] = useState(true);

  
  // Function to handle search by product name
  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  useEffect((event) => {
    Showproducts();
  }, []);

  const Showproducts = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(import.meta.env.VITE_API + "/allProducts", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Status === "Success") {
          setProducts(result.Result);
          setFilteredProducts(result.Result);
        } else {
          setError(result.Error);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const displayedProducts = filteredProducts.slice(0, displayCount);
  // Read more
  const handleViewMore = () => {
    setDisplayCount(30);
    setShowButton(false);
  };

  // Get send ID
  const navigate = useNavigate();

  // Handle product
  const handleProduct = (id) => {
    navigate("/productdetails/" + id);
  };

  return (
    <div>
      <Header handleSearch={handleSearch}/>
      <section id="product">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>인기 반찬
            
          </h1>
          <div className="categoryBoxfiler">
            <form className="boxfilterseach">
              <label>Select Filter</label>
              <select className="filter_priceProduct">
                <option value="default">All Product</option>
                <option value="higherPrice">Higher Price</option>
                <option value="lowerPrice">Lower Price</option>
                <option value="newProducts">New Products</option>
                <option value="popularProducts">Popular Products</option>
              </select>
            </form>
            <box-icon name="filter"></box-icon>
          </div>
        </div>

        <div className="product-area">
          {displayedProducts.map((product, index) => (
            <div className="box-product" key={index}>
              <div onClick={() => handleProduct(product.id)}>
                <div className="img">
                  <img
                    src={
                      import.meta.env.VITE_API +
                      "/uploads/images/" +
                      product.image
                    }
                    alt="image"
                  />
                </div>
                
                <div className="box_cart">
                  <FaCartShopping className="box_icon_cart" />
                </div>               

                <ul className="txtOFproduct2">
                  <li>
                    <input
                      className="name"
                      type="text"
                      value={product.name}
                      onChange={(e) => handleInputChange(e, index, "name")}
                    />
                  </li>
                  <li>
                    <input
                      className="price"
                      type="text"
                      value={product.price}
                      onChange={(e) => handleInputChange(e, index, "price")}
                    />
                  </li>
                  <p>Review: {product.review}</p>
                  <li>
                    <input
                      className="desc"
                      type="text"
                      value={product.description}
                      onChange={(e) =>
                        handleInputChange(e, index, "description")
                      }
                    />
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        {showButton && filteredProducts.length > displayCount && (
          <button className="btnViewProduct" onClick={handleViewMore}>
            View More
          </button>
        )}
      </section>
    </div>
  );
};

export default ProductHome;
