import React from 'react'
import './chatuser.css'
import { FaSearch } from "react-icons/fa"
import 'boxicons'
import Menu from "../menu/Menu";
import people from '../../../img/people.png';
import { Link } from 'react-router-dom'

const Chatuser = () => {
  return (
    <>
        <section id='chatuser-header'>
            <div className='container_chat_search'>
                <Link to="/humascot-taca"><box-icon name='chevron-left' id="cancel_icon"></box-icon></Link>
                <div className='input-wrapper'>
                    <FaSearch id="search-icon"/>
                    <input placeholder='Search...'/>
                </div>
                <div></div>
            </div>
        </section>
        <section id='user'>
            <div className='container_chat_box'>
                <div className='container_chat_message'>
                    <Link to="/humascot-taca/chatuser/chatroom/" className='container_chat_text'>
                        <img src={people} alt='img'></img>
                        <div className='container_chat_name'>
                            <h4>Sompong</h4>
                            <p>New message...</p>
                        </div>
                    </Link>
                    <div className='container_chat_icon'>
                        <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"/></Link>
                    </div>
                </div>
                <div className='container_chat_message'>
                    <Link to="/humascot-taca/chatuser/chatroom/" className='container_chat_text'>
                        <img src={people} alt='img'></img>
                        <div className='container_chat_name'>
                            <h4>Sompong</h4>
                            <p>New message...</p>
                        </div>
                    </Link>
                    <div className='container_chat_icon'>
                        <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"/></Link>
                    </div>
                </div>
                <div className='container_chat_message'>
                    <Link to="/humascot-taca/chatuser/chatroom/" className='container_chat_text'>
                        <img src={people} alt='img'></img>
                        <div className='container_chat_name'>
                            <h4>Sompong</h4>
                            <p>New message...</p>
                        </div>
                    </Link>
                    <div className='container_chat_icon'>
                        <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"/></Link>
                    </div>
                </div>
                <div className='container_chat_message'>
                    <Link to="/humascot-taca/chatuser/chatroom/" className='container_chat_text'>
                        <img src={people} alt='img'></img>
                        <div className='container_chat_name'>
                            <h4>Sompong</h4>
                            <p>New message...</p>
                        </div>
                    </Link>
                    <div className='container_chat_icon'>
                        <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"/></Link>
                    </div>
                </div>
                <div className='container_chat_message'>
                    <Link to="/humascot-taca/chatuser/chatroom/" className='container_chat_text'>
                        <img src={people} alt='img'></img>
                        <div className='container_chat_name'>
                            <h4>Sompong</h4>
                            <p>New message...</p>
                        </div>
                    </Link>
                    <div className='container_chat_icon'>
                        <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"/></Link>
                    </div>
                </div>
                <div className='container_chat_message'>
                    <Link to="/humascot-taca/chatuser/chatroom/" className='container_chat_text'>
                        <img src={people} alt='img'></img>
                        <div className='container_chat_name'>
                            <h4>Sompong</h4>
                            <p>New message...</p>
                        </div>
                    </Link>
                    <div className='container_chat_icon'>
                        <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"/></Link>
                    </div>
                </div>
                <div className='container_chat_message'>
                    <Link to="/humascot-taca/chatuser/chatroom/" className='container_chat_text'>
                        <img src={people} alt='img'></img>
                        <div className='container_chat_name'>
                            <h4>Sompong</h4>
                            <p>New message...</p>
                        </div>
                    </Link>
                    <div className='container_chat_icon'>
                        <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"/></Link>
                    </div>
                </div>
                <div className='container_chat_message'>
                    <Link to="/humascot-taca/chatuser/chatroom/" className='container_chat_text'>
                        <img src={people} alt='img'></img>
                        <div className='container_chat_name'>
                            <h4>Sompong</h4>
                            <p>New message...</p>
                        </div>
                    </Link>
                    <div className='container_chat_icon'>
                        <Link to="#"><box-icon name='dots-vertical-rounded' id="dots_icon"/></Link>
                    </div>
                </div>

            </div>
        </section>
        <Menu/>
    </>
    
  )
}

export default Chatuser