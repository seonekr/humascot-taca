import "./productHome.css";
import dress from "../../../img/dress.png";
import image1 from "../../../img/image1.png";
import acer from '../../../img/acer.png';
import productImage from "../../../img/productImage.png";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const ProductHome = () => {

  const [products, setProducts] = useState([
    { productID: 1, productName: "pro1", productType: "clothes", price: 10, description: "desc for this product", images: [acer] },
    { productID: 2, productName: "pro2", productType: "clothes", price: 30, description: "desc for this product", images: [dress] },
    { productID: 3, productName: "pro3", productType: "clothes", price: 20, description: "desc for this product", images: [acer] },
    { productID: 4, productName: "pro4", productType: "clothes", price: 50, description: "desc for this product", images: [dress] },
    { productID: 5, productName: "pro5", productType: "clothes", price: 60, description: "desc for this product", images: [image1] },
    { productID: 6, productName: "pro6", productType: "clothes", price: 100, description: "desc for this product", images: [image1] },
    { productID: 7, productName: "pro7", productType: "clothes", price: 150, description: "desc for this product", images: [productImage] },
    { productID: 8, productName: "pro8", productType: "clothes", price: 120, description: "desc for this product", images: [acer] },
    { productID: 9, productName: "pro9", productType: "clothes", price: 110, description: "desc for this product", images: [productImage] },
    { productID: 10, productName: "pro10", productType: "clothes", price: 70, description: "desc for this product", images: [acer] },
    { productID: 11, productName: "pro11", productType: "clothes", price: 40, description: "desc for this product", images: [productImage] }
]);

const [filteredProducts, setFilteredProducts] = useState(products);
const [selectedFilter, setSelectedFilter] = useState('default');
const [displayCount, setDisplayCount] = useState(8);


// Handle inputChange
    // Function to handle the filter change
    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);

        switch (selectedValue) {
            case 'higherPrice':
                filterByHigherPrice();
                break;
            case 'lowerPrice':
                filterByLowerPrice();
                break;
            case 'newProducts':
                filterByNewProducts();
                break;
            case 'popularProducts':
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
        const sortedProducts = [...products].sort((a, b) => b.productID - a.productID);
        setFilteredProducts(sortedProducts);
    };

    // Function to filter products by popularity (you can customize the popularity criteria)
    const filterByPopularProducts = () => {
        // Implement your popularity criteria here
        // For simplicity, let's assume popularity is based on productID
        const sortedProducts = [...products].sort((a, b) => b.productID - a.productID);
        setFilteredProducts(sortedProducts);
    };
    

// Read more
const displayedProducts = filteredProducts.slice(0, displayCount);
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
                        <label>Select Filter</label>
                        <select className="filter_priceProduct" value={selectedFilter} onChange={handleFilterChange}>
                            <option value="default">All Product</option>
                            <option value="higherPrice">Higher Price</option>
                            <option value="lowerPrice">Lower Price</option>
                            <option value="newProducts">New Products</option>
                            <option value="popularProducts">Popular Products</option>
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

            <button className="btnViewProduct" onClick={handleViewMore}>View More</button>
        </section>
    )
}

export default ProductHome;