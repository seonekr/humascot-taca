import React from 'react'
import './header.css'
import 'boxicons'

const Header = () => {
  return (
    <div className='box_container_header'>
        <div className='box_header'>
            <div className='logo'>
                {/* <a href="#"><box-icon name='align-left'></box-icon></a> */}
                <h1>TACA</h1>
            </div>
            
            <div className='icon'>
            <a href="#"><box-icon name='search' id="boc_container_icon"></box-icon></a>
            <a href="/cart"><box-icon name='cart' id="boc_container_icon"></box-icon></a>
            <a href="#"><box-icon name='user' id="boc_container_icon"></box-icon></a>
            </div>
        </div>
        
    </div>
  )
}

export default Header