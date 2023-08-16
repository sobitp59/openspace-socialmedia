import React from 'react'
import "./button.css"

const Button = ({label, type, onClick, onSubmit, btnType, icon, disabled}) => {
  return (
            <button className='button button-secondary' onClick={onClick} onSubmit={onSubmit} disabled={disabled} type={type}>{label} {icon}</button>
  )
}

export default Button