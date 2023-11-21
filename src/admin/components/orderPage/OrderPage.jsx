import React from 'react'
import "./orderpage.css"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import AdminMenu from '../adminMenu/AdminMenu';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const OrderPage = () => {
  return (
    <>
      <AdminMenu />
      <section id='menager'>
        <div className='container_box_orderpage'>
          <div className='box_head_search'>
            <h2>Order</h2>
            <form className="search">
              <div className="search-box_menageruser">
                <input 
                  type="text" 
                  placeholder="Search ..." 
                  />
                <button type="submit">
                <IoSearchOutline />
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <form className='box_users_order'>
              <div className='box_order_text'>
                <p>No: 1</p>
                <div>
                    <p>Name: Samsung</p>
                </div>
              </div>
              <div className='box_container_time'>
                  <p>20/11/2023</p>
              </div>
              <div className='container_order_icon'>
                  <div className='btn_pending'>
                      Pending
                  </div>
                  <Link to='/orderbill/' className='btn_view' >
                      View
                  </Link>
              </div>
            </form>
          </div>

          <div className='box_next_order'>
            <button className='box_prev_next_order' >
              <AiOutlineLeft id="box_prev_next_icon"/>
              <p>Prev</p>
            </button>
            <div className='box_num_order'>
              <div className='num_admin'>
                <p>1</p>
              </div> 
              <div className='num_admin'>
                <p>2</p>
              </div> 
            </div>
            
            <button className='box_prev_nexts_order' >
              <p>Next</p>
              <AiOutlineRight id="box_prev_next_icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default OrderPage