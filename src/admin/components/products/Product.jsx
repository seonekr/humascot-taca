import "./product.css";
import dress from "../../../img/dress.png";
import image1 from "../../../img/image1.png";
import acer from "../../../img/acer.png";
import productImage from "../../../img/productImage.png";
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
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
          ],
          colors: [
            { colorID: 1, colorName: "black" },
            { colorID: 2, colorName: "blue" },
            { colorID: 3, colorName: "red" },
            { colorID: 4, colorName: "green" },
          ],
        },
        {
          productID: 2,
          productName: "pro2",
          productType: "clothes",
    
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: dress,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: acer,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
          ],
          colors: [
            { colorID: 1, colorName: "black" },
            { colorID: 2, colorName: "blue" },
            { colorID: 3, colorName: "red" },
            { colorID: 4, colorName: "green" },
          ],
        },
        {
          productID: 3,
          productName: "pro3",
          productType: "clothes",
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
          ],
          colors: [
            { colorID: 1, colorName: "black" },
            { colorID: 2, colorName: "blue" },
            { colorID: 3, colorName: "red" },
            { colorID: 4, colorName: "green" },
          ],
        },
        {
          productID: 4,
          productName: "pro4",
          productType: "clothes",
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: dress,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: acer,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
          ],
          colors: [
            { colorID: 1, colorName: "black" },
            { colorID: 2, colorName: "blue" },
            { colorID: 3, colorName: "red" },
            { colorID: 4, colorName: "green" },
          ],
        },
        {
          productID: 5,
          productName: "pro5",
          productType: "clothes",
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: image1,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: acer,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
          ],
          colors: [
            { colorID: 1, colorName: "black" },
            { colorID: 2, colorName: "blue" },
            { colorID: 3, colorName: "red" },
            { colorID: 4, colorName: "green" },
          ],
        },
        {
          productID: 6,
          productName: "pro6",
          productType: "clothes",
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: image1,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: acer,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
          ],
          colors: [
            { colorID: 1, colorName: "black" },
            { colorID: 2, colorName: "blue" },
            { colorID: 3, colorName: "red" },
            { colorID: 4, colorName: "green" },
          ],
        },
        {
          productID: 7,
          productName: "pro7",
          productType: "clothes",
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: image1,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: acer,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
          ],
          colors: [
            { colorID: 1, colorName: "black" },
            { colorID: 2, colorName: "blue" },
            { colorID: 3, colorName: "red" },
            { colorID: 4, colorName: "green" },
          ],
        },
        {
          productID: 8,
          productName: "pro8",
          productType: "clothes",
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: image1,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: acer,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
          ],
          colors: [
            { colorID: 1, colorName: "black" },
            { colorID: 2, colorName: "blue" },
            { colorID: 3, colorName: "red" },
            { colorID: 4, colorName: "green" },
          ],
        },
        {
          productID: 9,
          productName: "pro9",
          productType: "clothes",
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: image1,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: acer,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
          ],
          colors: [
            { colorID: 1, colorName: "black" },
            { colorID: 2, colorName: "blue" },
            { colorID: 3, colorName: "red" },
            { colorID: 4, colorName: "green" },
          ],
        },
        {
          productID: 10,
          productName: "pro10",
          productType: "clothes",
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: image1,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: acer,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
          ],
          colors: [
            { colorID: 1, colorName: "black" },
            { colorID: 2, colorName: "blue" },
            { colorID: 3, colorName: "red" },
            { colorID: 4, colorName: "green" },
          ],
        },
        {
          productID: 11,
          productName: "pro11",
          productType: "clothes",
          price: 10,
          description: "desc for this product",
          images: [
            {
              src: image1,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: acer,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
            {
              src: acer,
            },
            {
              src: productImage,
            },
            {
              src: image1,
            },
            {
              src: dress,
            },
          ],
          colors: [
            { colorID: 1, colorName: "red" },
            { colorID: 2, colorName: "green" },
          ],
        },
      ]);

    
      const [filteredProducts, setFilteredProducts] = useState(products);
        const [searchTerm, setSearchTerm] = useState("");
    
    

    // prev next button user in react
    const [currentPage, setCurrentPage] = useState(1) 
    const recordsPerPage = 8
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filteredProducts.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filteredProducts.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)


    // Delete product
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

    // Function to handle search by product name
    const handleSearch = () => {
        const filtered = products.filter((product) =>
          product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
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
                        <button >
                        <IoSearchOutline onClick={handleSearch}/>
                        </button>
                    </div>

                    <div className="productHead_content">
                        <h1 className="htxthead"><span className="spennofStyleadmin"></span>Product</h1>
                        <div className="categoryBoxfiler">
                            <Link to="/post/" className="box_add_product">
                                <BiPlus id="icon_add_product"/>
                                <p>Add Product</p>
                            </Link>
                        </div>
                    </div>

                    <div className="product-area">
                        {records.map((product, index) => (
                            <div className="box-product" key={ index }>
                                <div><img src={product.images[0].src} alt="image" /></div>
                                <ul className="txtOFproduct">
                                    <li>
                                    {product.productName}
                                    </li>
                                    <li>
                                    {product.description}
                                    </li>
                                    <li>
                                    {product.price}
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
                                <p>Are you sure you want to delete?</p>
                                <div className="btn_ok_on">
                                    <button onClick={deleteProduct} className="btn_yes">Yes</button>
                                    <button onClick={closeConfirmationPopup} className="btn_on">No</button>
                                </div>
                                
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