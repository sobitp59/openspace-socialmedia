import React, { useState } from 'react';
import { BiSolidBadgeCheck } from "react-icons/bi";
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import Button from '../button/Button';
import "./formstyles/loginform.css";


const LoginForm = () => {
  const [showUsers, setShowUsers] = useState(false);
  const {loginData,userLogin,setGuestLoginData, loginFormDataHandler} = useAuth();
  const {users} = useData();
  document.title = "login | openspace"

  return (
    <>
    
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
          type="button"
          onClick={() => setShowUsers(true)}
          btnType=""
        />
        {showUsers && (
          <section className='loginForm__users'>
              <Button label={"X"} onClick={() => setShowUsers(false)}/>
              
              {users?.map(({_id, firstName, lastName, avatarUrl, username, password}) => 
                <button className='loginForm__user' type='submit' onClick={() => setGuestLoginData(username, password)} key={_id}>
                    <img className='loginForm__avatar' src={avatarUrl} alt="" />
                    <p><strong>{firstName} {lastName}</strong> <BiSolidBadgeCheck /> </p>
                </button>
              )}          
          </section>
        )}
      </form>
    </>
  )
}

// key, firstname, lastname, avatar, username, currentuser, badge

export default LoginForm