import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import dress from "../../../img/dress.png";
import { useState } from "react";
import './bill.css';
const Bill = () => {

    // Orders
    const [orders, setOrders] = useState([
        { id: 1, userID: 1, productID: 1, amout: 12, orderDate: "10/12/2023", deliveryStatus: "pending"},
        { id: 2, userID: 2, productID: 2, amout: 12, orderDate: "10/12/2023", deliveryStatus: "pending"},
        { id: 3, userID: 2, productID: 4, amout: 12, orderDate: "10/12/2023", deliveryStatus: "pending"},
    ]);

    //   Products
    const [products, setProducts] = useState([
      { id: 1, name: 'Product 1', description: 'This is product 1', price: 12, category: "clothes", images: [dress] },
      { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, category: "clothes", images: [dress] },
      { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, category: "electronich device", images: [dress] },
      { id: 4, name: 'Product 1', description: 'This is product 1', price: 10, category: "electronich device", images: [dress] },
      { id: 5, name: 'Product 2', description: 'This is product 2', price: 20, category: "cosmetics", images: [dress] },
      { id: 6, name: 'Product 3', description: 'This is product 3', price: 30, category: "cosmetics", images: [dress] },
      { id: 7, name: 'Product 1', description: 'This is product 1', price: 10, category: "electronich device", images: [dress] },
      { id: 8, name: 'Product 2', description: 'This is product 2', price: 20, category: "cosmetics", images: [dress] },
      { id: 9, name: 'Product 3', description: 'This is product 3', price: 30, category: "cosmetics", images: [dress] },
      { id: 10, name: 'Product 1', description: 'This is product 1', price: 10, category: "electronich device", images: [dress] },
      { id: 11, name: 'Product 2', description: 'This is product 2', price: 20, category: "cosmetics", images: [dress] },
      { id: 12, name: 'Product 3', description: 'This is product 3', price: 30, category: "cosmetics", images: [dress] },
    ]);

    // Users
    const [users, setUsers] = useState([
        { id: 1, userName: "Sam", email: "sam@gmail.com", phone: "02099878787"},
        { id: 2, userName: "Wil", email: "sam@gmail.com", phone: "02099878787"},
        { id: 3, userName: "Dom", email: "sam@gmail.com", phone: "02099878787"},
    ]);

    // Filter orders by userID
    const urOrders = orders.filter(order => order.userID === 1);

    // Join orders, products, and users data
    const ordersData = urOrders.map(order => {
        const product = products.find(product => product.id === order.productID);
        const user = users.find(user => user.id === order.userID);
        return {
        orderID: order.id,
        orderDate: order.orderDate,
        productName: product.name,
        userName: user.userName,
        userID: user.id,
        };
    });
    return (
        <>
            <Header></Header>
            <section id="bill">
                <div className="account-navbar">
                    <div className="header-box"><Link to="/order" className='guopIconbAck'><FaAngleLeft className='iconnBack' />Back</Link></div>
                    <div className="header-box middle">Bill</div>
                    <div className="header-box"></div>
                </div>
                <div >
                {ordersData.map(order => (
                    <div className="bill-detial" key={order.orderID}>
                        <div className="guopoidHead">
                            <div className="idf">
                                <p>NO: {order.orderID}</p>
                                <p>ID: {order.userID}</p>
                                <p>Name: {order.userName}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="billGopBox">
                            <div className="detial">
                                <h5>Product Name</h5>
                                <p>{order.productName}</p>
                            </div>
                            <div className="detial">
                                <h5>Price</h5>
                                <p>$10</p>
  
                            </div>
                            <div className="detial">
                                <h5>Amount</h5>
                                <p>12</p>
                            </div>
                        </div>
                        <hr />
                        <div className="titlePrice">
                            <p>Title:</p>
                            <p>100,000 Kip</p>
                        </div>
                        <div className="place-on">
                            <p>Place on: {order.orderDate}</p>
                            <p>Payment method: Bcel One</p>
                            <p>Status: completed</p>
                            <p>Delivery by: Anousit</p>
                        </div>
                    </div>
                ))}
                    
                </div>
            </section>
            <Menu />
        </>
    );
}

export default Bill;