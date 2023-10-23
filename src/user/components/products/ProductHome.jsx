import "./productHome.css";
import dress from "../../../img/dress.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const ProductHome = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, images: [dress] },
        { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, images: [dress] },
        { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, images: [dress] },
        { id: 4, name: 'Product 4', description: 'This is product 4', price: 40, images: [dress] },
        { id: 5, name: 'Product 5', description: 'This is product 5', price: 50, images: [dress] },
        { id: 6, name: 'Product 6', description: 'This is product 6', price: 60, images: [dress] },
        { id: 7, name: 'Product 7', description: 'This is product 7', price: 70, images: [dress] },
        { id: 8, name: 'Product 8', description: 'This is product 8', price: 80, images: [dress] },
      ]);

    // Handle inputChange
    const handleInputChange = (e, index, field) => {
        const updatedProducts = [...products];
        updatedProducts[index][field] = e.target.value;
        setProducts(updatedProducts);
    }

    return(
        <section id="product">
                <form className="product-area">
                    {products.map((product, index) => (
                    <div className="box-product"  key={index}>
                        <Link to="#"><img src={product.images[0]} alt="image" /></Link>
                        <ul>
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
        </section>
    )
}

export default ProductHome;