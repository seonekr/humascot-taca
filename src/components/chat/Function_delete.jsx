import React from 'react'
import './function_delete.css'
import { Link } from 'react-router-dom'

const Function_delete = () => {
  return (
    <section className='box_container_function_delete'>
        <div className='container_function_delete' >
            <Link to="/" className='box_delete'>
                Hello
            </Link>
            <Link to="/" className='box_cleat_chat'>

            </Link>
        </div>
    </section>
  )
}

export default Function_delete