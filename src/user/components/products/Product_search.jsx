
import { useState, useEffect  } from "react";
import './product_search.css'
import Header from '../header/Header';
import Menu from '../menu/Menu';
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';


const Product_search = () => {
    const [products, setProducts] = useState(null);

    // Fetch data
    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error));
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [displayCount, setDisplayCount] = useState(8);

    // Filter products based on search term and price range
    const filteredProducts = products?.filter((product) => {
        const nameMatch = product.productName.toLowerCase().includes(searchTerm.toLowerCase());
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
        setMaxPrice(e.target.value);
    };
    // Handle select by peice
    const handleMinChange = (e) => {
        setMinPrice(e.target.value);
    };

    // Read more
    const displayedProducts = filteredProducts?.slice(0, displayCount);
    const handleViewMore = () => {
      setDisplayCount(displayCount + 4);
    };

    // Get send ID
    const navigate = useNavigate();
    // Handle product
    const handleProduct = sendProductID => {
        navigate('/product_search/productdetails/', { state: { sendProductID: sendProductID } });
    }

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
                    <div className='contentImageProducts'>
                        {displayedProducts && displayedProducts.map((product, index) => (
                            <div key={index}>
                                <div className='group_itemBox' onClick={() => handleProduct(product.productID)}>
                                    <div className='img'>
                                        <img src={product.images} alt='img' />
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