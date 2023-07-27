import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../button/Button';
import "./loginform.css";



const LoginForm = () => {
  const {loginData, loginFormDataHandler} = useAuth();
  
  console.log(loginData)


  return (
    <form className='loginForm'>
      
      <label className='loginForm__label'>
        email
        <input 
          value={loginData?.email}
          type="email"
          name="email"
          placeholder='enter your email'
          required 
          onChange={loginFormDataHandler}
          />
      </label>
      
      <label className='loginForm__label'>
        password
        <input
          value={loginData?.password} 
          type="password"
          name="password"
          placeholder='enter your password'
          required
          onChange={loginFormDataHandler}
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