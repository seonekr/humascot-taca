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
    ]);

    const [price, setPrice] = useState("");
    const [priceFilter, setPriceFilter] = useState("");

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

    // Handle filter by category
    const handleFilter = (price) => {
        setPriceFilter(price); // Please change this to category
    };

    // Handle select by category
    const handleSelectChange = (e) => {
        setPrice(e.target.value); // Please change this to category
        handleFilter(e.target.value); // Please change this to category
    };

    return (
        <section id="product">
            <div className="productHead_content">
                <h1 className="htxthead"><span className="spennofStyle"></span>Product</h1>
                <div className="categoryBoxfiler">
                    <form className="category_form" >
                        <select className="categoryFilter" value={price} onChange={handleSelectChange}>
                            <option className="listOption" value="">Categories</option>
                            <option className="listOption" value="10">Cate1</option>
                            <option className="listOption" value="20">Cate2</option>
                            <option className="listOption" value="30">Cate3</option>
                        </select>
                    </form>
                    <box-icon name='filter'></box-icon>
                </div>
            </div>

            <form className="product-area">
                {filteredProducts.map((product, index) => (
                    <div className="box-product" key={index}>
                        <Link to="#"><img src={product.images[0]} alt="image" /></Link>
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
            <button className="btnViewProduct">View More</button>
        </section>
    )
}

export default ProductHome;