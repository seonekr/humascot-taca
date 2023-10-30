import "./productHome.css";
import dress from "../../../img/dress.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const ProductHome = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', description: 'This is product 1', price: 12, category: "clothes", images: [dress] },
        { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, category: "clothes", images: [dress] },
        { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, category: "electronich device", images: [dress] },
        { id: 4, name: 'Product 1', description: 'This is product 1', price: 10, category: "electronich device", images: [dress] },
        { id: 5, name: 'Product 2', description: 'This is product 2', price: 20, category: "cosmetics", images: [dress] },
        { id: 6, name: 'Product 3', description: 'This is product 3', price: 30, category: "cosmetics", images: [dress] },
        { id: 7, name: 'Product 1', description: 'This is product 1', price: 10, category: "electronich device", images: [dress] },
        { id: 8, name: 'Product 2', description: 'This is product 2', price: 20, category: "cosmetics", images: [dress] },
        { id: 9, name: 'Product 3', description: 'This is product 3', price: 30, category: "cosmetics", images: [dress] },
        { id: 10, name: 'Product 1', description: 'This is product 1', price: 10, category: "electronich device", images: [dress] },
        { id: 11, name: 'Product 2', description: 'This is product 2', price: 20, category: "cosmetics", images: [dress] },
        { id: 12, name: 'Product 3', description: 'This is product 3', price: 30, category: "cosmetics", images: [dress] },
      ]);

    const [price, setPrice] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [displayCount, setDisplayCount] = useState(8);


    // Handle inputChange
    const handleInputChange = (e, index, field) => {
        const updatedProducts = [...products];
        updatedProducts[index][field] = e.target.value;
        setProducts(updatedProducts);
    }

    // Filter products based on search term and price range
    const filteredProducts = products.filter((product) => {
        const peiceMatch = priceFilter !== "" ? product.price === parseInt(priceFilter) : true;
        return peiceMatch;
    });

    // Handle filter by price
    const handleFilter = (price) => {
        setPriceFilter(price);
    };

    // Handle select by price
    const handleSelectChange = (e) => {
        setPrice(e.target.value);
        handleFilter(e.target.value);
    };

    // Read more
    const displayedProducts = filteredProducts.slice(0, displayCount);
    const handleViewMore = () => {
        setDisplayCount(displayCount + 4);
    };

    return (
        <section id="product">
            <div className="productHead_content">
                <h1 className="htxthead"><span className="spennofStyle"></span>Product</h1>
                <form>
                    <select className="filter_priceProduct" value={price} onChange={handleSelectChange}>
                        <option value="">Price</option>
                        <option value="10">$10</option>
                        <option value="20">$20</option>
                        <option value="30">$30</option>
                    </select>
                </form>
            </div>

            <form className="product-area">
                {displayedProducts.map((product, index) => (
                    <div className="box-product" key={index}>
                        <Link to="/product_search/productdetails/"><img src={product.images[0]} alt="image" /></Link>
                        <ul className="txtOFproduct">
                            <li>
                                <input
                                    className="name"
                                    type="text"
                                    value={product.name}
                                    onChange={handleInputChange}
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
                            <li>
                                <input
                                    className="price"
                                    type="text"
                                    value={product.price}
                                    onChange={(e) => handleInputChange(e, index, "price")}
                                />
                            </li>
                        </ul>
                    </div>
                ))}
            </form>
            <button className="btnViewProduct" onClick={handleViewMore}>View More</button>
        </section>
    )
}

export default ProductHome;