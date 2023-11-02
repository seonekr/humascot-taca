import { FaAngleLeft } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import "./payment.css"
import qrcode from "../../../img/QRCODE.png";
import wechat from "../../../img/WeChat.png";
import Menu from "../menu/Menu";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../header/Header";


const Payment = () => {

    // state payment method
    const [selectedOption, setSelectedOption] = useState('onePay');

    // get address state 
    const location = useLocation();                       // Here mean if "empty"
    const { province, city, companny, branch } = location.state || {};

    // get product
    const { products, userID, date } = location.state;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form Data:', { // Here you can insert informatio to database
            "Selected option": selectedOption,
            "province": province,
            "city": city,
            "companny": companny,
            "branch": branch
        });

        setSelectedOption('');
    }

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <Header />
            <section id="payment">
                <div className="guopBoxPayment">
                    <div className="account-navbar">
                        <div className="header-box"><Link to="/product_search/productdetails/" className='guopIconbAck'><FaAngleLeft className='iconnBack' />Back</Link></div>
                        <div className="header-box">Payment</div>
                        <div className="header-box"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="adress-payment">
                            <div className="box">
                                <Link to="/cart/address" className="address">
                                    <FiPlus /> Update address
                                </Link>
                                <p>{province} {city} {companny} {branch}</p>
                            </div>
                            {/* procuts */}
                            <div>
                            <ul>
                            <div>User ID: {userID}</div>
                                <div>Date: {date}</div>
                                {products.map((product) => (
                                <li key={product.productID}>
                                    <div>Product ID: {product.productID}</div>
                                    <div>Product Name: {product.productName}</div>
                                    <div>Size: {product.size}</div>
                                    <div>Color: {product.color}</div>
                                    <div>Type: {product.type}</div>
                                    <div>Price: {product.price}</div>
                                    <div>Product Counts: {product.productCounts}</div>
                                    <div>Have to pay: {product.productCounts * product.price}</div>
                                </li>
                                ))}
                            </ul>
                            </div>


                            <div className="box">
                                <div className="transfer">
                                    <div className="select-option">
                                        <input
                                            type="radio"
                                            id="onePay"
                                            value="onePay"
                                            checked={selectedOption === 'onePay'}
                                            onChange={handleRadioChange}
                                        />
                                        <label htmlFor="onePay">Bcel One</label>
                                    </div>
                                    <div className="select-option">
                                        <input
                                            type="radio"
                                            id="wechat"
                                            value="wechat"
                                            checked={selectedOption === 'wechat'}
                                            onChange={handleRadioChange}
                                        />
                                        <label htmlFor="wechat">WeChat</label>
                                    </div>
                                </div>
                                <div className="boxImageqr">
                                    {selectedOption === 'onePay' && (
                                        <div className="qr">
                                            <img src={qrcode} alt="" />
                                        </div>
                                    )}
                                    {selectedOption === 'wechat' && (
                                        <div className="qr">
                                            <img src={wechat} alt="" />
                                        </div>
                                    )}
                                    {(!selectedOption) && (
                                        <div className="qr">
                                            <img src={qrcode} alt="" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="save">
                                <Link to="/cart/successfulBuy/">
                                     <button type="submit" disabled={!selectedOption}>Confirm</button>{/* The button will show when user input information */}
                                </Link> 
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Menu />
        </>
    )
}

export default Payment;