import React, { useState } from 'react';
import Menu from "../menu/Menu";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import acer from '../../../img/acer.png'
import './cart.css';
import { IoIosArrowBack } from 'react-icons/io';

const Cart = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, images: [acer] },
        { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, images: [acer] },
        { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, images: [acer] },
        { id: 4, name: 'Product 4', description: 'This is product 4', price: 20, images: [acer] },
    ]);

    // Add amout items
    const [productCounts, setProductCounts] = useState(products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {}));

    const incrementCount = (productId) => {
        setProductCounts(prevCounts => ({
            ...prevCounts,
            [productId]: (prevCounts[productId] || 0) + 1
        }));
    };

    const decrementCount = (productId) => {
        setProductCounts(prevCounts => ({
            ...prevCounts,
            [productId]: (prevCounts[productId] || 0) - 1
        }));
    };

  return (
    <>
    <Header/>
        <form>
            <div  className='box_container_cart'>
                <div className='display_products' >
                    {products.map((product, index) => (
                        <div className='container_cart_item' key={index}>
                            <div className="box_item_image">
                                <img src={product.images[0]} alt='img'></img>
                                <div className='box_item_text'>
                                    <input
                                        type="text"
                                        value={product.name}
                                    />
                                    <input
                                        type="text"
                                        value={product.description}
                                    />
                                    <input
                                        type="text"
                                        value={product.price}
                                    />
                                </div>
                            </div>
                            <div className='box_item_icon'>
                                <div className="icon_minus_plus" onClick={() => decrementCount(product.id)}>-</div>
                                <span>
                                    <input
                                        type="text"
                                        value={productCounts[product.id] || 0}
                                    />
                                </span>
                                <div className="icon_minus_plus" onClick={() => incrementCount(product.id)}>+</div>
                            </div>
                     </div>
                    ))}
                </div>
                <div className='box_item_total'>
                    <h1>Cart Total</h1>
                    <div className='box_item_total_text'>
                        <p>Subtotal: </p>
                        <p>$400.00</p>
                    </div>
                    <hr/>
                    <div className='box_item_total_text'>
                        <p>Shopping: </p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='box_item_total_text'>
                        <h3>Total: </h3>
                        <p>$400.00</p>
                    </div>
                    <div className='btn'>
                        <Link to="/product_search/" className="Continues_btn">Continues Shopping</Link>
                        <Link to="/cart/payment/" className="checkout_btn">Checkout</Link>
                    </div>
                </div>
            </div>
        </form>
    <Menu/>
    </>
  )
}

export default Cart