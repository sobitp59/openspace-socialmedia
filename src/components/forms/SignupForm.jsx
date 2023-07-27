import React from 'react'
import Button from '../button/Button'
import "./signupform.css"

const SignupForm = () => {
  return (
    <form className='signupForm'>
      
      <label className='signupForm__label'>
        firstname
        <input 
          type="text"
          placeholder='enter firstname'
          required 
        />
      </label>
     
      <label className='signupForm__label'>
        lastname
        <input 
          type="text"
          placeholder='enter lastname'
          required 
        />
      </label>
     
      <label className='signupForm__label'>
        email
        <input 
          type="email"
          placeholder='enter your email'
          required 
        />
      </label>
      
      <label className='signupForm__label'>
        password
        <input 
          type="password"
          placeholder='enter your password'
        />
      </label>

      <Button
        label="create account"
        type="submit"
        onClick=""
        btnType=""
      />
      </form>
    )
}

export default SignupForm