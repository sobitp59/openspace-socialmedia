import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../button/Button';
import "./formstyles/signupform.css";

const SignupForm = () => {
  const {signupData,userSignup, signupFormDataHandler} = useAuth();
  console.log(signupData)


  document.title = "signup | openspace"

  return (
    <form className='signupForm' onSubmit={(event) => userSignup(event, signupData?.firstName, signupData?.lastName, signupData?.username, signupData?.password)}>
      
      <label className='signupForm__label'>
        firstname
        <input 
          type="text"
          name='firstName'
          value={signupData?.firstName}
          placeholder='enter firstname'
          required
          onChange={signupFormDataHandler} 
        />
      </label>
     
      <label className='signupForm__label'>
        lastname
        <input 
          type="text"
          name="lastName"
          value={signupData?.lastName}
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
        username
        <input 
          type="text"
          name="username"
          value={signupData?.username}
          placeholder='enter your username'
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
          placeholder='enter your password '
          required
          onChange={signupFormDataHandler}
        />
      </label>

      <Button
        label="create account"
        type="submit"
        btnType=""
      />
      </form>
    )
}

export default SignupForm