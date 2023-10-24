import "./menu.css"
import 'boxicons'
import { FaHouse, FaStore, FaMoneyBillTrendUp, FaRegMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import QrdownloadApp from '../../../img/QrdownloadApp.png'

const Menu = () => {
    return (
        <section>

            {/*Footer Menu For PC */}

            <footer className="footerBox">
                <div className="footer_Container">
                    <div className="footconentBox">
                        <h3 className="txt_footHead">Something</h3>
                        <p><Link to="/" className="txt_pFoot">Something</Link></p>
                        <p><Link to="/" className="txt_pFoot">Something</Link></p>
                        <p><Link to="/" className="txt_pFoot">Something</Link></p>
                        <p><Link to="/" className="txt_pFoot">Something</Link></p>
                        <p><Link to="/" className="txt_pFoot">Something</Link></p>
                    </div>

                    <div className="footconentBox">
                        <h3 className="txt_footHead">Something</h3>
                        <p><Link to="/" className="txt_pFoot">Something</Link></p>
                        <p><Link to="/" className="txt_pFoot">Something</Link></p>
                        <p><Link to="/" className="txt_pFoot">Something</Link></p>
                        <p><Link to="/" className="txt_pFoot">Something</Link></p>
                        <p><Link to="/" className="txt_pFoot">Something</Link></p>
                    </div>
                    <div className="footconentBox3">
                        <h3 className="txt_footHead txh3">Download App</h3>
                        <div className="foot_contentItem">
                            <img src={QrdownloadApp} alt="QrdownloadApp" />
                            <div className="guop_btndownl">
                                <Link to="/" className="footLink">Play Store</Link>
                                <Link to="/" className="footLink">App Store</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="lastFooter">
                    Copyright &#169;
                    TACA 2023
                </p>
            </footer>

            {/* Footer Menu For Mobile */}

            <div className="menubar">
                <Link to="/humascot-taca" className="box-menu active">
                    <span className=""><box-icon name='home' color='#888888' ></box-icon></span><span>Home</span>
                </Link>
                <Link to="/humascot-taca/product_search" className="box-menu">
                    <span><box-icon name='store' color='#888888' ></box-icon></span><span>Shop</span>
                </Link>
                <Link to="/humascot-taca/order" className="box-menu">
                    <span><box-icon name='task' color='#888888' ></box-icon></span><span>Order</span>
                </Link>
                <Link to="/humascot-taca/chatuser" className="box-menu">
                    <span><box-icon name='chat' color='#888888' ></box-icon></span><span>Chat</span>
                </Link>
            </div>
        </section>
    )
}

export default Menu;