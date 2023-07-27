import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../button/Button';
import "./signupform.css";

const SignupForm = () => {
  const {signupData, signupFormDataHandler} = useAuth();
  console.log(signupData)

  return (
    <form className='signupForm'>
      
      <label className='signupForm__label'>
        firstname
        <input 
          type="text"
          name='firstname'
          value={signupData?.firstname}
          placeholder='enter firstname'
          required
          onChange={signupFormDataHandler} 
        />
      </label>
     
      <label className='signupForm__label'>
        lastname
        <input 
          type="text"
          name="lastname"
          value={signupData?.lastname}
          placeholder='enter lastname'
          required
          onChange={signupFormDataHandler} 
        />
      </label>
     
      <label className='signupForm__label'>
        email
        <input 
          type="email"
          name="email"
          value={signupData?.email}
          placeholder='enter your email'
          required
          onChange={signupFormDataHandler} 
        />
      </label>
      
      <label className='signupForm__label'>
        password
        <input 
          type="password"
          name="password"
          value={signupData?.password}
          placeholder='enter your password'
          required
          onChange={signupFormDataHandler}
        />
      </label>
      
      <label className='signupForm__label'>
        confirm password
        <input 
          type="password"
          name="confirmpassword"
          value={signupData?.confirmpassword}
          placeholder='enter confirm password '
          required
          onChange={signupFormDataHandler}
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