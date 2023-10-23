import '../products/product_search.css';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import { FaSearch } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom';
import acer from '../../../img/acer.png'
import { useState } from 'react';

const Categories = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, category: "1", images: [acer] },
        { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, category: "2", images: [acer] },
        { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, category: "3", images: [acer] },
        { id: 4, name: 'Product 4', description: 'This is product 4', price: 40, category: "4", images: [acer] },
        { id: 5, name: 'Product 5', description: 'This is product 5', price: 50, category: "5", images: [acer] },
        { id: 6, name: 'Product 6', description: 'This is product 6', price: 60, category: "6", images: [acer] },
        { id: 7, name: 'Product 7', description: 'This is product 7', price: 70, category: "7", images: [acer] },
        { id: 8, name: 'Product 8', description: 'This is product 8', price: 80, category: "8", images: [acer] },
    ]);

    const location = useLocation();   
    const { searchCate } = location.state || {};

    const [searchTerm, setSearchTerm] = useState('');

    // Filter products based on search term and price range
    const filteredProducts = products.filter((product) => {
        const cateMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return cateMatch;
    });
    

    // Handle inputChange
    const handleInputChange = (e, index, field) => {
        const updatedProducts = [...products];
        updatedProducts[index][field] = e.target.value;
        setProducts(updatedProducts);
    }

    

    return(
        <>
        <Header/>
            <div className='container_home'>
                <div className="content_Box">
                    <div className='container_head_search'>
                        <div className='input_wrapper'>
                            <FaSearch id="search-icon" />
                            <input
                                type="text"
                                placeholder="Search products"
                                value={searchCate}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="content_itemBox">
                        <div className='box_container_home'>
                            {filteredProducts.map((product, index) => (
                            <form>
                                <div className='box_container_img' >
                                    <Link to="/humascot-taca/product_search/productdetails">
                                        <img src={product.images[0]} alt='img'/>
                                    </Link>                             
                                    <div className="txtOfProduct">
                                        <h4>
                                            <input
                                                type="text"
                                                value={product.name}
                                                onChange={(e) => handleInputChange(e, index, "name")}
                                            />
                                        </h4>
                                        <p className='txtP_width'>
                                            <input
                                                type="text"
                                                value={product.description}
                                                onChange={(e) => handleInputChange(e, index, "description")}
                                            />
                                        </p>
                                        <p>
                                            <input
                                                type="text"
                                                value={product.price}
                                                onChange={(e) => handleInputChange(e, index, "price")}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </form>
                            ))}
                        </div>
                    </div>
                    <div className='btn_more'>
                        <Link to="#" className="loadmore_btn_more">View More</Link>
                    </div>
                </div>
                
            </div>
            <Menu/>
        </>
    )
}

export default Categories