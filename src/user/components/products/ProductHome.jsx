import "./productHome.css";
import dress from "../../../img/dress.png";
import image1 from "../../../img/image1.png";
import acer from "../../../img/acer.png";
import productImage from "../../../img/productImage.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductHome = () => {
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

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [displayCount, setDisplayCount] = useState(8);
  const [showButton, setShowButton] = useState(true);

  // Handle inputChange
  // Function to handle the filter change
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    switch (selectedValue) {
      case "higherPrice":
        filterByHigherPrice();
        break;
      case "lowerPrice":
        filterByLowerPrice();
        break;
      case "newProducts":
        filterByNewProducts();
        break;
      case "popularProducts":
        filterByPopularProducts();
        break;
      default:
        setFilteredProducts(products);
    }
  };

  // Function to filter products by higher price
  const filterByHigherPrice = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setFilteredProducts(sortedProducts);
  };

  // Function to filter products by lower price
  const filterByLowerPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setFilteredProducts(sortedProducts);
  };

  // Function to filter products by new products (assuming newer products have higher productID)
  const filterByNewProducts = () => {
    const sortedProducts = [...products].sort(
      (a, b) => b.productID - a.productID
    );
    setFilteredProducts(sortedProducts);
  };

  // Function to filter products by popularity (you can customize the popularity criteria)
  const filterByPopularProducts = () => {
    // Implement your popularity criteria here
    // For simplicity, let's assume popularity is based on productID
    const sortedProducts = [...products].sort(
      (a, b) => b.productID - a.productID
    );
    setFilteredProducts(sortedProducts);
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
  const handleProduct = (sendProductID) => {
    navigate("/product_search/productdetails/", {
      state: { sendProductID: sendProductID },
    });
  };
  return (
    <section id="product">
      <div className="productHead_content">
        <h1 className="htxthead">
          <span className="spennofStyle"></span>Product
        </h1>
        <div className="categoryBoxfiler">
          <form className="boxfilterseach">
            <label>Select Filter</label>
            <select
              className="filter_priceProduct"
              value={selectedFilter}
              onChange={handleFilterChange}
            >
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
            <div onClick={() => handleProduct(product.productID)}>
              <div className="img">
                <img src={product.images[0].src} alt="image" />
              </div>
              <ul className="txtOFproduct2">
                <li>
                  <input
                    className="name"
                    type="text"
                    value={product.productName}
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
                <li>
                  <input
                    className="desc"
                    type="text"
                    value={product.description}
                    onChange={(e) => handleInputChange(e, index, "description")}
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
  );
};

export default ProductHome;
