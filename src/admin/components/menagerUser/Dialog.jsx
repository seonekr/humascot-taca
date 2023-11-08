import React from 'react';
import './dialog.css';

const Dialog = () => {
  return (
    <div className='container_dialog'>
        <h3>Message</h3>
        <div className='btn_ok_on'>
            <button className='btn_ok'>OK</button>
            <button className='btn_on'>NO</button>
        </div>

    </div>
  )
}

export default Dialog