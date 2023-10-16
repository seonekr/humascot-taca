import React from 'react'
import './product_search1.css'
import { Link } from 'react-router-dom';

import { FaSearch } from "react-icons/fa"

const Product_search = () => {
    return (
        <div className='container_home'>
            <div className="content_Box">
                <div className='container_head_search'>
                    <a href="#"><box-icon name='chevron-left' id="cancel_icon"></box-icon></a>
                    <div className='input_wrapper'>
                        <FaSearch id="search-icon" />
                        <input placeholder='Search for a product' />
                    </div>
                </div>
                <div className="content_itemBox">
                    <div className='container_product'>
                        <h3>Product</h3>
                        <div className='product_fillter'>
                            <div className='container_product_category'>
                                <form className='cetegory_form'>
                                    <label>Product Type:</label>
                                    <select className='categoryFilter'>
                                        <option className='listOption' value="Something">Something</option>
                                        <option className='listOption' value="Something">Something</option>
                                        <option className='listOption' value="Something">Something</option>
                                        <option className='listOption' value="Something">Something</option>
                                    </select>
                                </form>
                                <div><box-icon name='filter'></box-icon></div>
                            </div>
                        </div>
                    </div>
                    <div className='box_container_home'>

                        <div className='box_container_img'>
                            <div className='box_container_img'>
                                <Link to="#"><img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''/></Link>                             
                                    <div className="txtOfProduct">
                                        <h4>Acer Swift 5</h4>
                                        <p className='txtP_width'>something of product </p>
                                        <p>800 KIP</p>
                                    </div>
                            </div>
                        </div>
                        <div className='box_container_img'>
                            <div className='box_container_img'>
                                <Link to="#"><img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''/></Link>                             
                                    <div className="txtOfProduct">
                                        <h4>Acer Swift 5</h4>
                                        <p className='txtP_width'>something of product </p>
                                        <p>800 KIP</p>
                                    </div>
                            </div>
                        </div>
                        <div className='box_container_img'>
                            <div className='box_container_img'>
                                <Link to="#"><img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''/></Link>                             
                                    <div className="txtOfProduct">
                                        <h4>Acer Swift 5</h4>
                                        <p className='txtP_width'>something of product </p>
                                        <p>800 KIP</p>
                                    </div>
                            </div>
                        </div>
                        <div className='box_container_img'>
                            <div className='box_container_img'>
                                <Link to="#"><img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''/></Link>                             
                                    <div className="txtOfProduct">
                                        <h4>Acer Swift 5</h4>
                                        <p className='txtP_width'>something of product </p>
                                        <p>800 KIP</p>
                                    </div>
                            </div>
                        </div>
                        <div className='box_container_img'>
                            <div className='box_container_img'>
                                <Link to="#"><img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''/></Link>                             
                                    <div className="txtOfProduct">
                                        <h4>Acer Swift 5</h4>
                                        <p className='txtP_width'>something of product </p>
                                        <p>800 KIP</p>
                                    </div>
                            </div>
                        </div>
                        <div className='box_container_img'>
                            <div className='box_container_img'>
                                <Link to="#"><img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''/></Link>                             
                                    <div className="txtOfProduct">
                                        <h4>Acer Swift 5</h4>
                                        <p className='txtP_width'>something of product </p>
                                        <p>800 KIP</p>
                                    </div>
                            </div>
                        </div>
                        <div className='box_container_img'>
                            <div className='box_container_img'>
                                <Link to="#"><img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''/></Link>                             
                                    <div className="txtOfProduct">
                                        <h4>Acer Swift 5</h4>
                                        <p className='txtP_width'>something of product </p>
                                        <p>800 KIP</p>
                                    </div>
                            </div>
                        </div>
                        <div className='box_container_img'>
                            <div className='box_container_img'>
                                <Link to="#"><img src='https://sw.cool3c.com/user/29442/2020/c9146c0c-460f-4389-be1e-74c415a8f153.png?fit=max&w=1400&q=80' alt=''/></Link>                             
                                    <div className="txtOfProduct">
                                        <h4>Acer Swift 5</h4>
                                        <p className='txtP_width'>something of product </p>
                                        <p>800 KIP</p>
                                    </div>
                            </div>
                        </div>
                        

                    </div>
                </div>

                <div className='btn_more'>
                    <a className="loadmore_btn_more" href="#">View More</a>
                </div>
            </div>
        </div>
    )
}

export default Product_search