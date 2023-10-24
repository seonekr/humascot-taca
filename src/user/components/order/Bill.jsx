import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import './bill.css';
const Bill = () => {
    return (
        <>
            <section id="header-account">
                <div className="account-navbar">
                    <div className="header-box"><Link to="/humascot-taca/order" className='guopIconbAck'><FaAngleLeft className='iconnBack' />Back</Link></div>
                    <div className="header-box middle">Bill</div>
                    <div className="header-box"></div>
                </div>

                <div className="bill-detial">
                    <div className="id">
                        <span><p>NO:</p><p>15</p></span>
                        <span><p>ID:</p><p>4</p></span>
                        <span><p>Name:</p><p>Sam</p></span>
                    </div>
                    <div className="detial">
                        <span><h3>Product name</h3><h3>Price</h3><h3>Amount</h3></span>
                        <span><p>name...</p><p>12,0...</p><p>3</p></span>
                        <span><p>name...</p><p>12,0...</p><p>3</p></span>
                        <span><p>name...</p><p>12,0...</p><p>3</p></span>
                    </div>
                    <div className="place-on">
                        <p>Place on: 15/09/2023</p>
                        <p>Payment method: Bcel One</p>
                        <p>Status: completed</p>
                        <p>Delivery by: Anousit</p>
                    </div>
                </div>
            </section>
            <Menu />
        </>
    );
}

export default Bill;