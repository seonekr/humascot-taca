import React from 'react'
import "./orderpage.css"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import AdminMenu from '../adminMenu/AdminMenu';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
    //OrderPage
    const [orders, setOrders] = useState([
        {
            orderID: 1,
            userID: 2,
            products: [
              {
                productID: 1,
                productName: "Samsung1",
                amount: 2,
                price: 10,
              },
              {
                productID: 2,
                productName: "Samsung2",
                amount: 2,
                price: 10,
              },
            ],
            orderDate: "10/11/2023",
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
                productName: "Samsung1",
                amount: 2,
                price: 10,
              },
              {
                productID: 2,
                productName: "Samsung3",
                amount: 2,
                price: 10,
              },
              { productID: 2,
                productName: "Samsung4",
                amount: 2,
                price: 10,
              },
            ],
            orderDate: "7/11/2023",
            status: "pending",
            payment: "Bcel One",
            delivery: "Anousit",
        },
    ]);
    // user
    const [users, setUsers] = useState([
        { userID: 1, name: "Sengphachan", email: "Sengphachan@gmail.com" },
        { userID: 2, name: "Sompong", email: "Sompong@gmail.com" },
    ]);

    const filteredOrders = orders
    .filter((order) => order.userID === 1) // Filter orders by userID = 2 (Sam)
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

    // Get order ID
    const [id, setId] = useState();
    const navigate = useNavigate();

    const handleOrder = (id) => {
        setId(id);
        navigate("/admin/orderbill/", { state: { id: id } });
    };


    return (
        <>
            <AdminMenu />
            <section id='menager'>
                <div className='container_box_orderpage'>
                    <h2>Order</h2>
                    {filteredOrders.map((order) => (
                        <div key={order.orderID}>
                            <form className='box_users_order' onClick={() => handleOrder(order.orderID)}>
                                <div className='box_order_text'>
                                    <p>No: {order.orderID}</p>
                                    <div className='container_chat_name'>
                                        {order.products.slice(0, 1).map((product, index) => (
                                            <span key={product.productID}>
                                                {product.productName}
                                                {index === 0 && order.products.length > 1
                                                ? ", "
                                                : " ..."}
                                            </span>
                                        ))}
                                    </div>
                                    <p>{order.orderDate}</p>
                                </div>
                                <div className='container_order_icon'>
                                    <Link to="/admin/OrderWrong" className='btn_pending'>
                                        Pending
                                    </Link>
                                    <Link to="/admin/orderbill" className='btn_view'>
                                        View
                                    </Link>
                                </div>
                            </form>
                        </div>
                    ))}
                    {filteredOrders.map((order) => (
                        <div key={order.orderID}>
                            <form className='box_users_order' onClick={() => handleOrder(order.orderID)}>
                                <div className='box_order_text'>
                                    <p>No: {order.orderID}</p>
                                    <div className='container_chat_name'>
                                        {order.products.slice(0, 3).map((product, index) => (
                                            <span key={product.productID}>
                                                {product.productName}
                                                {index === 0 && order.products.length > 1
                                                ? ", "
                                                : " ..."}
                                            </span>
                                        ))}
                                    </div>
                                    <p>{order.orderDate}</p>
                                </div>
                                <div className='container_order_icon'>
                                    <Link to="/admin/OrderWrong" className='btn_paid'>
                                        Paid
                                    </Link>
                                    <Link to="/admin/orderbill" className='btn_view'>
                                        View
                                    </Link>
                                </div>
                            </form>
                        </div>
                    ))}
                    <div className='box_next_order'>
                        <button className='box_prev_next_order'>
                            <AiOutlineLeft id="box_prev_next_icon" />
                            <p>Prev</p>
                        </button>

                        <div className='box_num_order'>
                            <p className='num_admin'>1</p>
                            <p className='num_admin'>2</p>
                            <p className='num_admin'>3</p>
                        </div>
                        <button className='box_prev_nexts_order'>
                            <p>Next</p>
                            <AiOutlineRight id="box_prev_next_icon" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderPage