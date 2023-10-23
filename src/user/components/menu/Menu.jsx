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
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M9.33333 16.0425C13.9357 16.0425 17.6667 12.6752 17.6667 8.52127C17.6667 4.36739 13.9357 1 9.33333 1C4.73096 1 1 4.36739 1 8.52127C1 12.6752 4.73096 16.0425 9.33333 16.0425Z" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.8333 6.84981C11.8333 6.84981 10.8039 5.5127 9.08824 5.5127C7.37255 5.5127 6 6.84981 6 8.5212C6 10.1926 7.37255 11.5297 9.08824 11.5297C10.8039 11.5297 11.8333 10.1926 11.8333 10.1926" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
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