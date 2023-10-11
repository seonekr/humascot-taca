import { FaArrowLeft } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import "./cart.css"
import qrcode from "../img/QRCODE.png";
import wechat from "../img/WeChat.png";
import Menu from "../menu/Menu";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const Payment = () => {

    // state payment method
    const [selectedOption, setSelectedOption] = useState('');

    // get address state 
    const location = useLocation();                       // Here mean if "empty"
    const { province, city, companny, branch } = location.state || {};

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
    
    return(
        <>
            <section id="header-account">
                <div className="account-navbar">
                    <div className="header-box"><Link to="/taca-app/cart"><FaArrowLeft/></Link></div>
                    <div className="header-box middle">Payment</div>
                    <div className="header-box"></div>
                </div>
            </section>
            <section id="payment">
                <form onSubmit={handleSubmit}>
                    <div className="adress-payment">
                        <div className="box">
                            <Link to="/taca-app/cart/address" className="address">
                                <FiPlus/> Update address
                            </Link>
                            <p>{province} {city} {companny} {branch}</p>
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

                            { selectedOption === 'onePay' && (
                                <div className="qr">
                                    <img src={qrcode} alt="" />
                                </div>
                            )}

                            { selectedOption === 'wechat' && (
                                <div className="qr">
                                    <img src={wechat} alt="" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="submit">
                        <div className="save">
                            <button type="submit" disabled={!selectedOption}>Confirm</button> {/* The button will show when user input information */}
                        </div>
                    </div> 
                </form>
            </section>
            <Menu/>
        </>
    )
}

export default Payment;