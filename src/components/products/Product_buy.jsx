import React from 'react'
import './product_buy.css'
import { useState } from "react";

const Product_buy = () => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddToCart = () => {
    // Add your logic here to handle adding the item to the cart
    console.log("Item added to cart");
  };

  return (
    <div className='container_buy'>
        <div className='container_box_buy'>
            <div className='container_icon'>
                <a href="#"><box-icon name='chevron-left' id="icon_left"></box-icon></a>
                <h3>Back</h3>
            </div>

            <div className='container_image'>
                <img src="https://i0.wp.com/digitalbridgebd.com/wp-content/uploads/2019/10/hv-g92-1.jpg" alt="img"/>
                <p>$200.00</p>
                <h2>Havic HV G-92 Gamepad</h2>
            </div>
            <hr/>
            <div className='container_color_size'>
                <div className='container_color'>
                    <h3>Colors:</h3>
                    {/* <a href="#" className='color_icon'></a>
                    <a href="#" className='color_icon1'></a> */}
                    <p className='color_icon'></p>
                    <p className='color_icon1'></p>
                    <p className='color_icon2'></p>
                    <p className='color_icon3'></p>
                </div>
                <div className='container_size'>
                    <h3>Size:</h3>
                    <p className='container_size_text' >XS</p>
                    <p className='container_size_text'>S</p>
                    <p className='container_size_text'>M</p>
                    <p className='container_size_text'>L</p>
                    <p className='container_size_text'>ML</p>

                </div>
            </div>
            <hr/>
            <div className="container_quantity">
                <h2>Quantity:</h2>
                <div className="container_quantity_icon">
                    <box-icon name='minus' id="icon_plus" ></box-icon>
                    <p>10</p>
                    <box-icon name='plus' id="icon_plus"></box-icon>
                </div>
            </div>

            <div className='quantity_btn'>
                <div className="quantity_btn_buynow">
                    <a href="#">Buy Now</a>
                </div>
                <div className="quantity_btn_addtocart">
                    <a onClick={handleAddToCart} href="#">Add To Cart</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Product_buy