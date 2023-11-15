import React from 'react'
import './Contact.css'
import Header from '../header/Header';
import Menu from '../menu/Menu';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contactBox_container">
        <div className="contact_content">
          <h2>Phone: 020998878788</h2>
          <h2>Email: humascot@gmail.com</h2>
          <h2>Address: Asean mall</h2>
        </div>
      </div>
      <Menu />

    </>
  )
}

export default Contact
