import React from 'react'
import "./button.css"

const Button = ({label, type, onClick, onSubmit, btnType}) => {
  return (
            <button className='btn' onClick={onClick} onSubmit={onSubmit} type={type}>{label}</button>
  )
}

export default Button