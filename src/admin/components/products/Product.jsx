import "./product.css";
import image1 from "../../../img/image1.png";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from 'react-icons/bi';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineEdit } from 'react-icons/md';
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import Dialog from "../menagerUser/Dialog";

const Product = () => {
    const [products, setProducts] = useState([
        { productID: 1, productName: 'Product 1', description: 'This is product 1', price: 10, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
        { productID: 2, productName: 'Product 2', description: 'This is product 1', price: 11, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
        { productID: 3, productName: 'Product 3', description: 'This is product 1', price: 12, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
        { productID: 4, productName: 'Product 4', description: 'This is product 1', price: 10, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
        { productID: 5, productName: 'Product 5', description: 'This is product 1', price: 11, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
        { productID: 6, productName: 'Product 6', description: 'This is product 1', price: 12, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
        { productID: 7, productName: 'Product 7', description: 'This is product 1', price: 10, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
        { productID: 8, productName: 'Product 8', description: 'This is product 1', price: 11, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
        { productID: 9, productName: 'Product 9', description: 'This is product 1', price: 11, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
    ]);

    const [price, setPrice] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

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
        const priceMatch = priceFilter !== "" ? product.price === parseInt(priceFilter) : true;
        return priceMatch && nameMatch;
    });

    // prev next button user in react
    const [currentPage, setCurrentPage] = useState(1) 
    const recordsPerPage = 8
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filteredProducts.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filteredProducts.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)


    // const deleteProduct = (productId) => {
    //     // Filter out the product with the specified ID
    //     const updatedProducts = products.filter((product) => product.productID !== productId);
        
    //     // Update the state with the new array of products
    //     setProducts(updatedProducts);
    // };

    const [deleteProductId, setDeleteProductId] = useState(null);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);

  const openConfirmationPopup = (productId) => {
    setDeleteProductId(productId);
    setConfirmationPopupOpen(true);
  };

  const closeConfirmationPopup = () => {
    setDeleteProductId(null);
    setConfirmationPopupOpen(false);
  };

  const deleteProduct = () => {
    if (deleteProductId !== null) {
      // Filter out the product with the specified ID
      const updatedProducts = products.filter((product) => product.productID !== deleteProductId);
      
      // Update the state with the new array of products
      setProducts(updatedProducts);

      // Close the confirmation popup after deleting
      closeConfirmationPopup();
    }
  };


    // Send ID product for update
    const navigate = useNavigate();
    // Update products
    const handleUpdate = (sendProductID) => {
        navigate('/post/', { state: { sendProductID: sendProductID } });
    }


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

                    <div className="product-area">
                        {filteredProducts && records.map((product, index) => (
                            <div className="box-product" key={ index }>
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

                                        <button className="btn_icon_delete_user" onClick={() => openConfirmationPopup(product.productID)}>
                                            <AiOutlineDelete id="btn_icon_edit"/>
                                        </button>
                                        <div className="btn_icon_edit_user" onClick={() => handleUpdate(product.productID)}>
                                            <MdOutlineEdit id="btn_icon_edit"/>
                                        </div>
                                        
                                    </div>
                                </ul>
                            </div>
                        ))}
                        {isConfirmationPopupOpen && (
                            <div className="confirmation-popup">
                                <p>Are you sure you want to delete this product?</p>
                                <button onClick={deleteProduct}>Yes</button>
                                <button onClick={closeConfirmationPopup}>No</button>
                            </div>
                         )}
                    </div>
                    <div className='box_container_next_product'>
                        <button className='box_prev_left_product' onClick={prePage}>
                            <AiOutlineLeft id="box_icon_left_right_product" />
                            <p>Prev</p>
                        </button>

                        <div className='box_num_product'>
                            {
                                numbers.map((n, i) => (
                                    <div className={`page-link ${currentPage === n? 'active' : ''}`} key={i}>
                                        <div className='num_admin_product'>
                                            <p onClick={()=> changeCPage(n)} >{n}</p>
                                        </div> 
                                    </div>
                                ))
                            }
                        </div>

                        <button className='box_prev_right_product' onClick={nextPage}>
                            <p>Next</p>
                            <AiOutlineRight id="box_icon_left_right_product" />
                        </button>
                    </div>
                </div>
                    
            </section>
            {/* { dialog.isLoading && <Dialog onDialog={areUSuredelete} message={dialog.message}/>} */}
        </>
        
    )
    function prePage() {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
      }
      function nextPage() {
        if(currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
      }
      function changeCPage(userID) {
        setCurrentPage(userID)
      }
}

export default Product;