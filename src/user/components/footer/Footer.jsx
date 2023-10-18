import React from 'react'
import './footer.css'
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
    <section className='container_footer'>
        <footer>
            <div className='box_container'>
                <div className='box_customer'>
                    <h2>Customer Card</h2>
                    <Link to="#" className='box_customer_text'>
                        <p>Help Center</p>
                        <p>How to Buy</p>
                        <p>Shipping & Delivery</p>
                        <p>International Product Policy</p>
                        <p>How to Return</p>
                        <p>Contact Us</p>
                    </Link>
                </div>
                <div className='box_taca'>
                    <h2>TACA</h2>
                    <Link to="#" className='box_customer_text'>
                        <p>All Categories</p>
                        <p>About TACA</p>
                        <p>Careers</p>
                        <p>Privacy Policy</p>
                        <p>Security</p>
                        <p>Popular Product</p>
                        <p>Intellectual Property Protection</p>
                    </Link>
                </div>
                <div className='box_app'>
                    <h2>Download <App></App></h2>
                    <div className='container_QR'>
                        <img src='#' alt="img" />
                        <Link to="#" className='box_play_app'>
                            <div className='box_playstore_app'>
                                <img src='#' alt="img" />
                                <p>Play Store</p>
                            </div>
                            <div className='box_playstore_app'>
                                <img src='#' alt="img" />
                                <p>App Store</p>
                            </div>
                        </Link>

                    </div>
                </div>
                <hr />
                <div className='container_copy'>@ TACA 2023</div>
            </div>
        </footer>
    </section>
    </>
  )
}

export default Footer