import "./product.css";
import image1 from "../../../img/image1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from 'react-icons/bi';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineEdit } from 'react-icons/md';
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Product = () => {
    const [products, setProducts] = useState([
        { productID: 1, productName: 'Product 1', description: 'This is product 1', price: 10, category: "clothes", images: [image1] },
        { productID: 2, productName: 'Product 2', description: 'This is product 1', price: 11, category: "clothes", images: [image1] },
        { productID: 3, productName: 'Product 3', description: 'This is product 1', price: 12, category: "clothes", images: [image1] },
        { productID: 4, productName: 'Product 4', description: 'This is product 1', price: 10, category: "clothes", images: [image1] },
        { productID: 5, productName: 'Product 5', description: 'This is product 1', price: 11, category: "clothes", images: [image1] },
        { productID: 6, productName: 'Product 6', description: 'This is product 1', price: 12, category: "clothes", images: [image1] },
        { productID: 7, productName: 'Product 7', description: 'This is product 1', price: 10, category: "clothes", images: [image1] },
        { productID: 8, productName: 'Product 8', description: 'This is product 1', price: 11, category: "clothes", images: [image1] },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [price, setPrice] = useState("");
    const [priceFilter, setPriceFilter] = useState("");

    // Handle inputChange
    const handleInputChange = (e, index, field) => {
        const updatedProducts = [...products];
        updatedProducts[index][field] = e.target.value;
        setProducts(updatedProducts);
    }

    

    // Handle filter by price
    const handleFilter = (price) => {
        setPriceFilter(price);
    };

    // Handle select by price
    const handleSelectChange = (e) => {
        setPrice(e.target.value);
        handleFilter(e.target.value);
    };

    // Filter products based on search term and price range
    const filteredProducts = products.filter((product) => {
        const nameMatch = product.productName.toLowerCase().includes(searchTerm.toLowerCase());
        const peiceMatch = priceFilter !== "" ? product.price === parseInt(priceFilter) : true;
        return peiceMatch, nameMatch;
    });
    // Delete
    const handleDelete = (productID) => {
        const updatedProducts = products.filter((product) => product.productID !== productID);
        setProducts(updatedProducts);
    };


    return (
        <>
            <AdminMenu/>
            <section id="product_admin">
                <div className="container_body_admin_product">
                    <div className="search-box_product">
                        <input 
                            type="text" 
                            placeholder="Search ..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                        <IoSearchOutline />
                        </button>
                    </div>

                    <div className="productHead_content">
                        <h1 className="htxthead"><span className="spennofStyleadmin"></span>Product</h1>
                        <div className="categoryBoxfiler">
                            <Link to="/post/" className="box_add_product">
                                <BiPlus id="icon_add_product"/>
                                <p>Add Product</p>
                            </Link>
                            <form>
                                <select className="filter_priceProduct" value={price} onChange={handleSelectChange}>
                                    <option value="">Filter Price</option>
                                    <option value="10">$10</option>
                                    <option value="11">$11</option>
                                    <option value="12">$12</option>
                                </select>
                            </form>
                            <box-icon name='filter'></box-icon>
                        </div>
                    </div>

                    <form className="product-area">
                        {filteredProducts.map((product, index) => (
                            <div className="box-product" key={ product.productID}>
                                <div><img src={product.images[0]} alt="image" /></div>
                                <ul className="txtOFproduct">
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
                                    <div className="box_btn_edit_delete">

                                        <button className="btn_icon_delete_user" onClick={() => handleDelete(product.productID)}>
                                            <AiOutlineDelete id="btn_icon_edit"/>
                                        </button>
                                        <div className="btn_icon_edit_user">
                                            <MdOutlineEdit id="btn_icon_edit"/>
                                        </div>
                                        
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </form>
                    <div className='box_container_next_product'>
                        <button className='box_prev_left_product'>
                            <AiOutlineLeft id="box_icon_left_right_product" />
                            <p>Prev</p>
                        </button>

                        <div className='box_num_product'>
                            <p className='num_admin_product'>1</p>
                            <p className='num_admin_product'>2</p>
                            <p className='num_admin_product'>3</p>
                        </div>
                        <button className='box_prev_right_product'>
                            <p>Next</p>
                            <AiOutlineRight id="box_icon_left_right_product" />
                        </button>
                    </div>
                </div>
                    
            </section>
        </>
        
    )
}

export default Product;