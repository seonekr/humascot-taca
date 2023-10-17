import React from 'react';
import './chat.css';
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom";

const Chat = () => {
  return (
    <>
        <div className='container_chat_box'>
            

            <div className='container_chat_search'>
                <Link to="#"><box-icon name='chevron-left' id="cancel_icon"></box-icon></Link>
            
                <div className='input-wrapper'>
                    <FaSearch id="search-icon"/>
                    <input placeholder='Search...'/>
                </div>
            </div>
            <div className='container_chat_message'>
                <div className='container_chat_text'>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                    <div className='container_chat_name'>
                        <h4>Sompong</h4>
                        <p>New message...</p>
                    </div>
                </div>
                <div className='container_chat_icon'>
                    {/* <from className="container_chat_icon_delete">
                        <section className='function_delete'>
                            <button className='btn_delete'>Delete</button>
                            <button className='btn_delete'>Clea chat</button>
                        </section>
                    </from> */}
                    <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"></box-icon></Link>
                </div>
            </div>
            <div className='container_chat_message'>
                <div className='container_chat_text'>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                    <div className='container_chat_name'>
                        <h4>Sompong</h4>
                        <p>New message...</p>
                    </div>
                </div>
                <div className='container_chat_icon'>
                    {/* <from className="container_chat_icon_delete">
                        <section className='function_delete'>
                            <button className='btn_delete'>Delete</button>
                            <button className='btn_delete'>Clea chat</button>
                        </section>
                    </from> */}
                    <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"></box-icon></Link>
                </div>
            </div>
            <div className='container_chat_message'>
                <div className='container_chat_text'>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                    <div className='container_chat_name'>
                        <h4>Sompong</h4>
                        <p>New message...</p>
                    </div>
                </div>
                <div className='container_chat_icon'>
                    {/* <from className="container_chat_icon_delete">
                        <section className='function_delete'>
                            <button className='btn_delete'>Delete</button>
                            <button className='btn_delete'>Clea chat</button>
                        </section>
                    </from> */}
                    <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"></box-icon></Link>
                </div>
            </div>
            <div className='container_chat_message'>
                <div className='container_chat_text'>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                    <div className='container_chat_name'>
                        <h4>Sompong</h4>
                        <p>New message...</p>
                    </div>
                </div>
                <div className='container_chat_icon'>
                    {/* <from className="container_chat_icon_delete">
                        <section className='function_delete'>
                            <button className='btn_delete'>Delete</button>
                            <button className='btn_delete'>Clea chat</button>
                        </section>
                    </from> */}
                    <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"></box-icon></Link>
                </div>
            </div>
            <div className='container_chat_message'>
                <div className='container_chat_text'>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' alt='#'></img>
                    <div className='container_chat_name'>
                        <h4>Sompong</h4>
                        <p>New message...</p>
                    </div>
                </div>
                <div className='container_chat_icon'>
                    {/* <from className="container_chat_icon_delete">
                        <section className='function_delete'>
                            <button className='btn_delete'>Delete</button>
                            <button className='btn_delete'>Clea chat</button>
                        </section>
                    </from> */}
                    <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"></box-icon></Link>
                </div>
            </div>
            
            

        </div>
    </>
    
  )
}

export default Chat