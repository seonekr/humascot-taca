import React, {useState} from 'react'
import "./orderBill.css";
import { FaAngleLeft } from "react-icons/fa6";
import AdminMenu from '../adminMenu/AdminMenu';
import { Link } from "react-router-dom";
import { ImCheckmark } from 'react-icons/im';
import { MdOutlineEdit } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const OrderBill = () => {

    const [orders, setOrders] = useState([
        {
          orderID: 1,
          userID: 2,
          products: [
            {
              productID: 1,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              size: "m",
            },
          ],
          orderDate: "10/12/2023",
          status: "pending",
          payment: "Bcel One",
          delivery: "Houngaloun",
        },
        {
          orderID: 2,
          userID: 1,
          products: [
            {
              productID: 1,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro2",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colW",
              size: "l",
            },
    
            {
              productID: 3,
              productName: "pro3",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "xl",
            },
          ],
          orderDate: "10/12/2023",
          status: "pending",
          payment: "Bcel One",
          delivery: "Anousit",
        },
        {
          orderID: 3,
          userID: 1,
          products: [
            {
              productID: 1,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "m",
            },
          ],
          orderDate: "10/12/2023",
          status: "pending",
          payment: "Bcel One",
          delivery: "Houngaloun",
        },
        {
          orderID: 4,
          userID: 3,
          products: [
            {
              productID: 1,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colB",
              size: "m",
            },
            {
              productID: 2,
              productName: "pro1",
              productType: "clothes",
              amount: 2,
              price: 10,
              color: "colBlue",
              size: "m",
            },
          ],
          orderDate: "10/12/2023",
          status: "pending",
          payment: "Bcel One",
          delivery: "Anousit",
        },
    ]);

    // Completion
    const [status, setStatus] = useState('pending')

    // users
    const [users, setUsers] = useState([
        { userID: 1, name: "John Doe", email: "john@gmail.com" },
        { userID: 2, name: "Sam", email: "sam@gmail.com" },
        { userID: 3, name: "Will", email: "wil@gmail.com" },
    ]);

    // Get order ID
    const location = useLocation();
    const { id } = location.state;
    const [getId, setGetId] = useState(id);

    const filteredOrders = orders
        .filter((order) => order.orderID === getId) // Filter orders by orderID
        .map((order) => {
        const user = users.find((user) => user.userID === order.userID); // Find user details for the order

        // Calculate total price
        const totalPrice = order.products.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0);

        return {
            orderID: order.orderID,
            userID: order.userID,
            userName: user.name,
            products: order.products,
            orderDate: order.orderDate,
            status: order.status,
            payment: order.payment,
            delivery: order.delivery,
            totalPrice: totalPrice,
        };
    });

    return (
        <>
            <AdminMenu />
            <section id="bill">
                {filteredOrders.map((order) => (
                    <div className="bill-detial" key={order.orderID}>
                    <div className="guopoidHead">
                        <div className="idf">
                        <p>OrderID: {order.orderID}</p>
                        <p>UserID: {order.userID}</p>
                        <p>Name: {order.userName}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="billGopBox">
                        <table>
                        <thead>
                            <tr>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Color</th>
                            <th>Size</th>
                            </tr>
                        </thead>
                        {order.products.map((product) => (
                            <tbody key={product.productID}>
                            <tr>
                                <td>{product.productName}</td>
                                <td>{product.productType}</td>
                                <td>${product.price}</td>
                                <td>{product.amount}</td>
                                <td>{product.color}</td>
                                <td>{product.size}</td>
                            </tr>
                            </tbody>
                        ))}
                        </table>
                    </div>
                    <hr />
                    <div className="titlePrice">
                        <p>Total:</p>
                        <p>${order.totalPrice}</p>
                    </div>
                    <div className="place-on">
                        <p>Place on: {order.orderDate}</p>
                        <p>Payment method: {order.payment}</p>
                        <form>
                            <select value={status}>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                            </select>
                        </form>
                        <p>Status: {order.status}</p>
                        <p>Delivery: {order.delivery}</p>
                    </div>
                    </div>
                ))}
            </section>
            {/* <form id='menager'>
                <div className='container_box_orderBill'>
                    <div className="content_box_orderBill">
                        <div className="header-box"><Link to="/admin/orderpage/" className='guopIconbAck'><FaAngleLeft className='iconnBack' />Back</Link></div>
                        <div className="group_lisblecackk">
                            {filteredOrders.map((order, index) => (
                                <div key={index}>
                                    <div className="box_guopoidHead">
                                        <div className="idf">
                                            <p>NO: {order.orderID}</p>
                                            <p>ID: {order.userID}</p>
                                            <p>Name: {order.userName}</p>
                                        </div>
                                        <div className='box_icon_Check'>
                                            <ImCheckmark id='icon_ImCheckmark' />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='box_bill_product'>
                                        <div className='bill_product_name'><h2>Products</h2></div>
                                        <div className="order_billGopBox">
                                            <div className="detial">
                                                <h3>Product Name</h3>
                                                <p>name...</p>
                                                <p>name...</p>
                                                <p>name...</p>
                                            </div>
                                            <div className="detial">
                                                <h3>Price</h3>
                                                <p>$20.00</p>
                                                <p>$20.00</p>
                                                <p>$20.00</p>
                                            </div>
                                            <div className="detial">
                                                <h3>Amount</h3>
                                                <p>5</p>
                                                <p>5</p>
                                                <p>5</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className='box_title_product'>
                                            <div className="box_titlePrice">
                                                <h3>TOTAL:</h3>
                                                <p>$100.00</p>
                                            </div>
                                            <div className='container_btn_edit'>
                                                <div className="box_place-on">
                                                    <p>Place on: 15/09/2023</p>
                                                    <p>Payment method: Bcel One</p>
                                                    <div className='box_filter_status'>
                                                        <p>Status: </p>
                                                        <form>
                                                            <select className='statusFilter'>
                                                                <option className='listOption_status' value="Something">Pending</option>
                                                                <option className='listOption_status' value="Something">Completed</option>
                                                            </select>
                                                        </form>
                                                    </div>
                                                    <p>Delivery by: Anousit</p>
                                                </div>
                                                <Link to="#" className='btn_edit_product'>
                                                    <MdOutlineEdit id='icon_edit_delete'/>
                                                    <p>Edit</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </form> */}
        </>
    )
}

export default OrderBill