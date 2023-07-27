import React from 'react'

const Button = ({label, type, onClcik, btnType}) => {
  return (
            <button type={type}>{label}</button>
  )
}

export default Button