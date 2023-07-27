import React from 'react'
import Button from '../button/Button'
import "./loginform.css"

const LoginForm = () => {
  return (
    <form className='loginForm'>
      
      <label className='loginForm__label'>
        email
        <input 
          type="email"
          placeholder='enter your email'
          required 
        />
      </label>
      
      <label className='loginForm__label'>
        password
        <input 
          type="password"
          placeholder='enter your password'
        />
      </label>

      <Button 
        label="sign in"
        type="submit"
        onClick=""
        btnType=""
      />

      <Button 
        label="sign in as guest"
        type="submit"
        onClick=""
        btnType=""
      />

    </form>
  )
}

export default LoginForm