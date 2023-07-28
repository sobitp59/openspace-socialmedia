import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../button/Button';
import "./loginform.css";


const LoginForm = () => {
  const {loginData,userLogin,setGuestLoginData, loginFormDataHandler} = useAuth();
  
  console.log(loginData)

  document.title = "login | openspace"

  return (
    <form className='loginForm' onSubmit={(event) => userLogin(event, loginData?.username, loginData?.password)}>
      
      <label className='loginForm__label'>
        username
        <input 
          value={loginData?.username}
          type="text"
          name="username"
          placeholder='enter your username'
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
        btnType=""
      />

      <Button 
        label="sign in as guest"
        type="submit"
        onClick={setGuestLoginData}
        btnType=""
      />

    </form>
  )
}

export default LoginForm