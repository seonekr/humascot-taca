import React from 'react'
import './product_search.css'
import dress from "../../../img/dress.png";
import image1 from "../../../img/image1.png";
import acer from '../../../img/acer.png';
import productImage from "../../../img/productImage.png";
import Header from '../header/Header';
import Menu from '../menu/Menu';
import { FaSearch } from "react-icons/fa"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Product_search = () => {
    const [products, setProducts] = useState([
        { productID: 1, productName: "pro1", productType: "clothes", price: 5, description: "desc for this product", images: [acer] },
        { productID: 2, productName: "pro2", productType: "clothes", price: 40, description: "desc for this product", images: [dress] },
        { productID: 3, productName: "pro3", productType: "clothes", price: 15, description: "desc for this product", images: [acer] },
        { productID: 4, productName: "pro4", productType: "clothes", price: 20, description: "desc for this product", images: [dress] },
        { productID: 5, productName: "pro5", productType: "clothes", price: 50, description: "desc for this product", images: [image1] },
        { productID: 6, productName: "pro6", productType: "clothes", price: 70, description: "desc for this product", images: [image1] },
        { productID: 7, productName: "pro7", productType: "clothes", price: 10, description: "desc for this product", images: [productImage] },
        { productID: 8, productName: "pro8", productType: "clothes", price: 30, description: "desc for this product", images: [acer] },
        { productID: 9, productName: "pro9", productType: "clothes", price: 10, description: "desc for this product", images: [productImage] },
        { productID: 10, productName: "pro10", productType: "clothes", price: 10, description: "desc for this product", images: [acer] },
        { productID: 11, productName: "pro11", productType: "clothes", price: 30, description: "desc for this product", images: [productImage] }

    ]);
    const [selectedPriceRange, setSelectedPriceRange] = useState('');

    const [searchTerm, setSearchTerm] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [displayCount, setDisplayCount] = useState(8);

    // Filter products based on search term and price range
    const filteredProducts = products.filter((product) => {
        const nameMatch = product.productName.toLowerCase().includes(searchTerm.toLowerCase());
        const minPriceMatch = minPrice !== "" ? product.price <= minPrice : true;
        return nameMatch && minPriceMatch;
    });

    // Handle inputChange
    const handleInputChange = (e, index, field) => {
        const updatedProducts = [...products];
        updatedProducts[index][field] = e.target.value;
        setProducts(updatedProducts);
    }

    // Handle select by peice
    const handleMinChange = (e) => {
        setMinPrice(e.target.value);
    };

    // Read more
    const displayedProducts = filteredProducts.slice(0, displayCount);
    const handleViewMore = () => {
        setDisplayCount(displayCount + 4);
    };

    // Get send ID
    const [sendProductID, setSendProductID] = useState();
    const navigate = useNavigate();

    // Handle product
    const handleProduct = (sendProductID) => {
        navigate('/product_search/productdetails/', { state: { sendProductID: sendProductID } });
    }

    // Handle select by price
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
      
        // Filter products based on the selected price range
        let filteredProducts;
      
        if (selectedValue === 'all') {
          filteredProducts = originalProducts;
        } else if (selectedValue === '5-30') {
          filteredProducts = filterProductsByPrice(5, 30);
        } else if (selectedValue === '30-100') {
          filteredProducts = filterProductsByPrice(30, 100);
        } else if (selectedValue === 'favor') {
          filteredProducts = filterProductsByPrice(favor);
        }
      
        // Update the state with the filtered products
        setProducts(filteredProducts);
      };

    return (
        <>
            <Header />
            <div className='container_home'>
                <div className='container_head_search'>
                    <FaSearch id="search-icon" />
                    <input
                        type="text"
                        placeholder="Search products"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="content_itemBox">
                    <div className='container_product'>
                        <h3 className="htxthead"><span className="spennofStyle"></span>Product</h3>
                        <form className='boxfilterseach'>
                            
                            <select className="categoryFilter" value={selectedPriceRange} onChange={handleSelectChange}>
                                <option value="">Search price</option>
                                <option value="5-30">Lower price</option>
                                <option value="30-100">Higher price</option>
                                <option value="favor"></option>
                            </select>
                        </form>
                    </div>
                    <div className='contentImageProducts'>
                        {displayedProducts.map((product, index) => (
                            <div key={index}>
                                <div className='group_itemBox' onClick={() => handleProduct(product.productID)}>
                                    <div className='img'>
                                        <img src={product.images[0]} alt='img' />
                                    </div>
                                    <div className="txtOFproduct">
                                        <h4>
                                            <input
                                                type="text"
                                                value={product.productName}
                                                onChange={(e) => handleInputChange(e, index, "name")}
                                            />
                                        </h4>
                                        <p>
                                            <input
                                                className='priceProduct'
                                                type="text"
                                                value={product.price}
                                                onChange={(e) => handleInputChange(e, index, "price")}
                                            />
                                        </p>
                                        <p className='txtP_width'>
                                            <input
                                                type="text"
                                                value={product.description}
                                                onChange={(e) => handleInputChange(e, index, "description")}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='btn_more'>
                    <button className="loadmore_btn_more" onClick={handleViewMore}>
                        View More
                    </button>
                </div>
            </div>
            <Menu />
        </>
    )
}

export default Product_search