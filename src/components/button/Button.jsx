import React from 'react'
import "./button.css"

const Button = ({label, type, onClick, onSubmit, btnType, icon}) => {
  return (
            <button className='btn' onClick={onClick} onSubmit={onSubmit} type={type}>{label} {icon}</button>
  )
}

export default Button