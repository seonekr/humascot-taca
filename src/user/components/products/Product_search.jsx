import React from 'react'
import './product_search.css'
import { Link } from 'react-router-dom';
import acer from '../../../img/acer.png'
import Header from '../header/Header';
import Menu from '../menu/Menu';
import { FaSearch } from "react-icons/fa"
import { useState } from 'react';

const Product_search = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, images: [acer] },
        { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, images: [acer] },
        { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, images: [acer] },
        { id: 4, name: 'Product 4', description: 'This is product 4', price: 20, images: [acer] },
        { id: 5, name: 'Product 5', description: 'This is product 5', price: 10, images: [acer] },
        { id: 6, name: 'Product 6', description: 'This is product 6', price: 20, images: [acer] },
        { id: 7, name: 'Product 7', description: 'This is product 7', price: 30, images: [acer] },
        { id: 8, name: 'Product 8', description: 'This is product 8', price: 20, images: [acer] },
        { id: 9, name: 'Product 5', description: 'This is product 5', price: 10, images: [acer] },
        { id: 10, name: 'Product 6', description: 'This is product 6', price: 20, images: [acer] },
        { id: 11, name: 'Product 7', description: 'This is product 7', price: 30, images: [acer] },
        { id: 12, name: 'Product 8', description: 'This is product 8', price: 20, images: [acer] },
        
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [displayCount, setDisplayCount] = useState(8);

    // Filter products based on search term and price range
    const filteredProducts = products.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const minPriceMatch = minPrice !== "" ? product.price <= minPrice : true;
        const maxPriceMatch = maxPrice !== "" ? product.price >= maxPrice : true;
        return nameMatch && minPriceMatch && maxPriceMatch;
    });



    // Handle inputChange
    const handleInputChange = (e, index, field) => {
        const updatedProducts = [...products];
        updatedProducts[index][field] = e.target.value;
        setProducts(updatedProducts);
    }

    // Handle select by price
    const handleMaxChange = (e) => {
        setMaxPrice(e.target.value); // Please change this to category
    };
    // Handle select by peice
    const handleMinChange = (e) => {
        setMinPrice(e.target.value); // Please change this to category
    };


    // Read more
    
    const displayedProducts = filteredProducts.slice(0, displayCount);
    const handleViewMore = () => {
        setDisplayCount(displayCount + 4);
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
                        <h3>Product</h3>
                        <form>
                            <select className="categoryFilter" value={maxPrice} onChange={handleMaxChange}>
                                <option className="listOption" value="">Over price</option>
                                <option className="listOption" value="10">$10</option>
                                <option className="listOption" value="20">$20</option>
                                <option className="listOption" value="30">$30</option>
                            </select>
                            <select className="categoryFilter" value={minPrice} onChange={handleMinChange}>
                                <option className="listOption" value="">lower price</option>
                                <option className="listOption" value="10">$10</option>
                                <option className="listOption" value="20">$20</option>
                                <option className="listOption" value="30">$30</option>
                            </select>
                        </form>
                    </div>
                    <div className='product-area'>
                        {displayedProducts.map((product, index) => (
                            <form key={index}>
                                <div  className='box-product' >
                                    <Link to="/product_search/productdetails">
                                        <img src={product.images[0]} alt='img' />
                                    </Link>
                                    <div className="txtOFproduct">
                                        <h4>
                                            <input
                                                type="text"
                                                value={product.name}
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
                            </form>
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