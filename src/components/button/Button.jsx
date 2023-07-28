import React from 'react'

const Button = ({label, type, onClick, onSubmit, btnType}) => {
  return (
            <button onClick={onClick} onSubmit={onSubmit} type={type}>{label}</button>
  )
}

export default Button