import "./productHome.css";
import { useState, useEffect  } from "react";
import { useNavigate } from 'react-router-dom';


const ProductHome = () => {
    const [products, setProducts] = useState(null);
    const [price, setPrice] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [displayCount, setDisplayCount] = useState(12);

    // Fetch data
    useEffect(() => {
      fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
    }, []);

    // Handle inputChange
    const handleInputChange = (e, index, field) => {
      const updatedProducts = [...products];
      updatedProducts[index][field] = e.target.value;
      setProducts(updatedProducts);
    };

    // Filter products based on search term and price range
    const filteredProducts = products?.filter(product => {
      const priceMatch = priceFilter !== "" ? product.price === parseInt(priceFilter) : true;
      return priceMatch;
    });

    // Handle filter by price
    const handleFilter = price => {
      setPriceFilter(price);
    };

    // Handle select by price
    const handleSelectChange = e => {
      setPrice(e.target.value);
      handleFilter(e.target.value);
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
    };

    return (
        <section id="product">
            <div className="productHead_content">
                <h1 className="htxthead"><span className="spennofStyle"></span>Product</h1>
                <div className="categoryBoxfiler">
                    <form>
                        <select className="filter_priceProduct" value={price} onChange={handleSelectChange}>
                            <option value="">Price</option>
                            <option value="10">$10</option>
                            <option value="20">$20</option>
                            <option value="30">$30</option>
                        </select>
                    </form>
                    <box-icon name='filter'></box-icon>
                </div>
            </div>

            <div className="product-area">
                {displayedProducts && displayedProducts.map((product, index) => (
                    <div className="box-product" key={index}>
                        <div onClick={() => handleProduct(product.productID)}>
                            <div className='img'>
                                <img src={product.images} alt={product.productName} />
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