import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import "./bill.css";


const OrderBillSuccess = () => {
  return (
    <>
      <Header></Header>
      <section id="bill">
        <Link to="/order" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        <div className="bill-detial_newspanBox">
          <div className="guopoidHead">
            <div className="idf">
              <p>OrderID: 2</p>
              <p>UserID: 2</p>
              <p>Name: done</p>
            </div>
            <div className="box_iconSuccess">
                <div className="icon_AiOutlineCheck">
                    <AiOutlineCheck id="icon_linecheck"/>
                </div>
            </div>
            
          </div>
          <hr />
          <div className="billGopBox">
            <h3>Products</h3>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Color</th>
                  <th>Size</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td>product1</td>
                    <td>$20</td>
                    <td>2</td>
                    <td>red</td>
                    <td>L</td>
                  </tr>
                </tbody>
            </table>
          </div>
          <hr />
          <div className="titlePrice">
            <p>Total:</p>
            <p>$20</p>
          </div>
          <div className="place-on">
            <p>Place on: 29/11/2023</p>
            <p>Payment method: Bcel One</p>
            <p>Status: pending</p>
            <p>Delivery: Anousit</p>
          </div>
        </div>
        <div className="box_back_shop">
          <Link to='/product_search' className="btn_back_shop">
            Go to Shop More
          </Link>
        </div>
        
      </section>
      <Menu />
    </>
  );
};

export default OrderBillSuccess;
