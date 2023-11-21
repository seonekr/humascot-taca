import "./product.css";
import productImage from "../../../img/productImage.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Product = () => {
  const [products, setProducts] = useState([]);


  // prev next button user in react
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

 

  return (
    <>
      <AdminMenu />
      <section id="product_admin">
        <div className="container_body_admin_product">
          <div className="search-box_product">
            <input
              type="text"
              placeholder="Search ..."
            />
            <button>
              <IoSearchOutline />
            </button>
          </div>

          <div className="productHead_content">
            <h1 className="htxthead">
              <span className="spennofStyleadmin"></span>Product
            </h1>
            <div className="categoryBoxfiler">
              <Link to="/post/" className="box_add_product">
                <BiPlus id="icon_add_product" />
                <p>Add Product</p>
              </Link>
            </div>
          </div>

          <div className="product-area">
            <div className="box-product" >
              <div>
                <img src={productImage} alt="image" />
              </div>
              <ul className="txtOFproduct">
                <li>product.productName</li>
                <li>product.description</li>
                <li>product.price</li>
                <div className="box_btn_edit_delete">
                  <button
                    className="btn_icon_delete_user" >
                    <AiOutlineDelete id="btn_icon_edit" />
                  </button>
                  <Link to='/updateproduct/' className="btn_icon_edit_user">
                    <MdOutlineEdit id="btn_icon_edit" />
                  </Link>
                </div>
              </ul>
            </div>
            
            <div className="box-product" >
              <div>
                <img src={productImage} alt="image" />
              </div>
              <ul className="txtOFproduct">
                <li>product.productName</li>
                <li>product.description</li>
                <li>product.price</li>
                <div className="box_btn_edit_delete">
                  <button
                    className="btn_icon_delete_user" >
                    <AiOutlineDelete id="btn_icon_edit" />
                  </button>
                  <Link to='/updateproduct/' className="btn_icon_edit_user">
                    <MdOutlineEdit id="btn_icon_edit" />
                  </Link>
                </div>
              </ul>
            </div>
            <div className="box-product" >
              <div>
                <img src={productImage} alt="image" />
              </div>
              <ul className="txtOFproduct">
                <li>product.productName</li>
                <li>product.description</li>
                <li>product.price</li>
                <div className="box_btn_edit_delete">
                  <button
                    className="btn_icon_delete_user" >
                    <AiOutlineDelete id="btn_icon_edit" />
                  </button>
                  <Link to='/updateproduct/' className="btn_icon_edit_user">
                    <MdOutlineEdit id="btn_icon_edit" />
                  </Link>
                </div>
              </ul>
            </div>
            <div className="box-product" >
              <div>
                <img src={productImage} alt="image" />
              </div>
              <ul className="txtOFproduct">
                <li>product.productName</li>
                <li>product.description</li>
                <li>product.price</li>
                <div className="box_btn_edit_delete">
                  <button
                    className="btn_icon_delete_user" >
                    <AiOutlineDelete id="btn_icon_edit" />
                  </button>
                  <Link to='/updateproduct/' className="btn_icon_edit_user">
                    <MdOutlineEdit id="btn_icon_edit" />
                  </Link>
                </div>
              </ul>
            </div>
          
            {/* <div className="confirmation-popup">
              <p>Are you sure you want to delete?</p>
              <div className="btn_ok_on">
                <button  className="btn_yes">
                  Yes
                </button>
                <button  className="btn_on">
                  No
                </button>
              </div>
            </div> */}
          </div>

          <div className="box_container_next_product">
            <button className="box_prev_left_product" onClick={prePage}>
              <AiOutlineLeft id="box_icon_left_right_product" />
              <p>Prev</p>
            </button>

            <div className="box_num_product">
              {numbers.map((n, i) => (
                <div
                  className={`page-link ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <div className="num_admin_product">
                    <p onClick={() => changeCPage(n)}>{n}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="box_prev_right_product" onClick={nextPage}>
              <p>Next</p>
              <AiOutlineRight id="box_icon_left_right_product" />
            </button>
          </div>
          
        </div>
      </section>
    </>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(userID) {
    setCurrentPage(userID);
  }
};

export default Product;
