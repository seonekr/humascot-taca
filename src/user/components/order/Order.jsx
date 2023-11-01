import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import './order.css'
import { Link } from 'react-router-dom'
import Menu from '../menu/Menu'
import Header from '../header/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {

    // Orders
    const [orders, setOrders] = useState([
        { orderID: 1, userID: 2, products: [{productID: 1, productName: "pro1", amount: 2, price: 10}, {productID: 2, productName: "pro1", amount: 2, price: 10}], orderDate: "10/12/2023", status: "pending", payment: "Bcel One", delivery: "Houngaloun"},
        { orderID: 2, userID: 1, products: [{productID: 1, productName: "pro1", amount: 2, price: 10}, {productID: 2, productName: "pro2", amount: 2, price: 10}, {productID: 2, productName: "pro3", amount: 2, price: 10}], orderDate: "10/12/2023", status: "pending", payment: "Bcel One", delivery: "Anousit"},
        { orderID: 3, userID: 1, products: [{productID: 1, productName: "pro1", amount: 2, price: 10}, {productID: 2, productName: "pro1", amount: 2, price: 10}], orderDate: "10/12/2023", status: "pending", payment: "Bcel One", delivery: "Houngaloun"},
        { orderID: 4, userID: 3, products: [{productID: 1, productName: "pro1", amount: 2, price: 10}, {productID: 2, productName: "pro1", amount: 2, price: 10}], orderDate: "10/12/2023", status: "pending", payment: "Bcel One", delivery: "Anousit"},
    ]);

    // users
    const [users, setUsers] = useState([
        {userID: 1, name:'John Doe', email: 'john@gmail.com'},
        {userID: 2, name:'SamVln', email: 'sam@gmail.com'},
        {userID: 3, name: "Will", email: "wil@gmail.com"}
    ]);

    const filteredOrders = orders
    .filter(order => order.userID === 1) // Filter orders by userID = 2 (Sam)
    .map(order => {
      const user = users.find(user => user.userID === order.userID); // Find user details for the order

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
        totalPrice: totalPrice
      };
    });

    // Get order ID
    const [id, setId] = useState();
    const navigate = useNavigate();

    const handleOrder = (id) => {
        setId(id);
        navigate('/order/bill/', { state: { id : id } });
    }

    return (
        <>
            <Header/>
            <section id='container_order_item'>
                <div className="account-navbar">
                    <div className="header-box"><Link to="/" className='guopIconbAck'><FaAngleLeft className='iconnBack'/>Back</Link></div>
                    <h3 className="header-box ">Orders</h3>
                    <div className="header-box"></div>
                </div>
                <div className='container_order_all'>
                {filteredOrders.map(order => (
                    <div key={order.orderID}>
                        <button onClick={() => handleOrder(order.orderID)} className='box_item_order' >
                            <div className='box_item_order_text'>
                                <p>No: {order.orderID}</p>
                                <p className='txtheadeproductorder'>
                                    {order.products.slice(0, 2).map((product, index) => (
                                        <span key={product.productID}>
                                        {product.productName}
                                        {index === 0 && order.products.length > 1 ? ', ' : ' ...'}
                                        </span>
                                    ))}
                                </p>
                                <p>{order.orderDate}</p>
                            </div>
                        </button>
                    </div>
                ))}
                </div>
            </section>
            <Menu />
        </>
    )
}

export default Order