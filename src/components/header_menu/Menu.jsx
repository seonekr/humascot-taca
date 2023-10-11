import React from 'react'
import './menu.css'
import 'boxicons'

const Menu = () => {
  return (
    <div className='container_footer_box'>
      <footer>
            <div className='container_footer'>
              <a href="/" className='text_icon'>
                  <box-icon name='home' className="container_footer_menu"></box-icon>
                  <p>Home</p>
              </a>
              <a href="#" className='text_icon'>
                  <box-icon name='store-alt' className="container_footer_menu"></box-icon>
                  <p>Stores</p>
              </a>
              
              <a href="#" className='text_icon'>
                  <box-icon type='solid' name='save' className="container_footer_menu"></box-icon>
                  <p>Order</p>
              </a>
              <a href="#" className='text_icon'>
                  <box-icon name='chat' className="container_footer_menu"></box-icon>
                  <p>Chat</p>
              </a>
            </div>
      </footer>
    </div>
  )
}

export default Menu