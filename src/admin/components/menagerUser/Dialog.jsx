import React from 'react';
import './dialog.css';

const Dialog = ({message, onDialog}) => {
  return (
    <div className='container_dialog'>
        <h3>{message}</h3>
        <div className='btn_ok_on'>
            <button onClick={()=>onDialog(true)} className='btn_ok'>OK</button>
            <button onClick={()=>onDialog(false)} className='btn_on'>NO</button>
        </div> 

    </div>
  )
}

export default Dialog