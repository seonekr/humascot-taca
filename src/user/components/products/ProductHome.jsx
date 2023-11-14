import "./productHome.css";
import dress from "../../../img/dress.png";
import image1 from "../../../img/image1.png";
import acer from '../../../img/acer.png';
import productImage from "../../../img/productImage.png";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const ProductHome = () => {
    // const [selectedPriceRange, setSelectedPriceRange] = useState('');

    // const [products, setProducts] = useState();
      

      const [selectedPriceRange, setSelectedPriceRange] = useState('');
      const [originalProducts, setOriginalProducts] = useState(
        [
            {
              productID: 1,
              productName: "pro1",
              productType: "clothes",
              price: 10,
              description: "desc for this product",
              images: [acer],
              colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]
            },
            {
              productID: 2,
              productName: "pro2",
              productType: "clothes",
              price: 15,
              description: "desc for this product",
              images: [dress],
              colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]
            },
            {
              productID: 3,
              productName: "pro3",
              productType: "clothes",
              price: 12,
              description: "desc for this product",
              images: [acer],
              colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]
            },
            {
              productID: 4,
              productName: "pro4",
              productType: "clothes",
              price: 21,
              description: "desc for this product",
              images: [dress],
              colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]
            },
            {
              productID: 5,
              productName: "pro5",
              productType: "clothes",
              price: 22,
              description: "desc for this product",
              images: [image1],
              colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]
            },
            {
              productID: 6,
              productName: "pro6",
              productType: "clothes",
              price: 26,
              description: "desc for this product",
              images: [image1],
              colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]
            },
            {
              productID: 7,
              productName: "pro7",
              productType: "clothes",
              price: 30,
              description: "desc for this product",
              images: [productImage],
              colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]
            },
            {
              productID: 8,
              productName: "pro8",
              productType: "clothes",
              price: 34,
              description: "desc for this product",
              images: [acer],
              colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]
            },
            {
              productID: 9,
              productName: "pro9",
              productType: "clothes",
              price: 31,
              description: "desc for this product",
              images: [productImage],
              colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]
            },
            {
              productID: 10,
              productName: "pro10",
              productType: "clothes",
              price: 50,
              description: "desc for this product",
              images: [acer],
              colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]
            },
            {
              productID: 11,
              productName: "pro11",
              productType: "clothes",
              price: 60,
              description: "desc for this product",
              images: [productImage],
              colors: [{colorID: 1, colorName: "red"}, {colorID: 2, colorName: "green"}]
            },
          ]
      );
      const [products, setProducts] = useState(originalProducts);
      const [displayCount, setDisplayCount] = useState(8);

    // Handle inputChange
    const handleInputChange = (e, index, field) => {
        const updatedProducts = [...products];
        updatedProducts[index][field] = e.target.value;
        setProducts(updatedProducts);
    }

    // Filter products based on search term and price range
    // const filteredProducts = products.filter((product) => {
    //     const peiceMatch = priceFilter !== "" ? product.price === parseInt(priceFilter) : true;
    //     return peiceMatch;
    // });

    // Handle filter by price
    // const handleFilter = (price) => {
    //     setPriceFilter(price);
    // };

    // Handle select by price
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
      
        // Filter products based on the selected price range
        let filteredProducts;
      
        if (selectedValue === 'all') {
          filteredProducts = originalProducts;
        } else if (selectedValue === '10-20') {
          filteredProducts = filterProductsByPrice(10, 20);
        } else if (selectedValue === '20-30') {
          filteredProducts = filterProductsByPrice(20, 30);
        } else if (selectedValue === '30-40') {
          filteredProducts = filterProductsByPrice(30, 40);
        } else if (selectedValue === 'higher price') {
          filteredProducts = filterProductsByPrice(100, 1000); // Adjust the upper limit accordingly
        } else if (selectedValue === 'lower price') {
          filteredProducts = filterProductsByPrice(0, 10); // Adjust the lower limit accordingly
        }
      
        // Update the state with the filtered products
        setProducts(filteredProducts);
      };
      
      const filterProductsByPrice = (minPrice, maxPrice) => {
        return originalProducts.filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
      };

    // Read more
    const displayedProducts = products.slice(0, displayCount);
    const handleViewMore = () => {
        setDisplayCount(displayCount + 4);
    };

    // Get send ID
    const navigate = useNavigate();

    // Handle product
    const handleProduct = (sendProductID) => {
        navigate('/product_search/productdetails/', { state: { sendProductID: sendProductID } });
    }

    return (
        <section id="product">
            <div className="productHead_content">
                <h1 className="htxthead"><span className="spennofStyle"></span>Product</h1>
                <div className="categoryBoxfiler">
                    <form>
                    <select className="filter_priceProduct" value={selectedPriceRange} onChange={handleSelectChange}>
                        <option value="all">All</option>
                        <option value="10-20">10 to 20</option>
                        <option value="20-30">20 to 30</option>
                        <option value="30-40">30 to 40</option>
                        <option value="higher price">Higher Price</option>
                        <option value="lower price">Lower Price</option>
                    </select>
                    </form>
                    <box-icon name='filter'></box-icon>
                </div>
            </div>

            <div className="product-area">
                {displayedProducts.map((product, index) => (
                    <div className="box-product" key={index}>
                        <div onClick={() => handleProduct(product.productID)}>
                            <div className='img'>
                                <img src={product.images[0]} alt="image" />
                            </div>
                            <ul className="txtOFproduct2">
                                <li>
                                    <input
                                        className="name"
                                        type="text"
                                        value={product.productName}
                                        onChange={handleInputChange}
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

            <button className="btnViewProduct" onClick={handleViewMore}>View More</button>
        </section>
    )
}

export default ProductHome;