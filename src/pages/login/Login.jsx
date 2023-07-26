import React from 'react'
import LoginForm from '../../components/forms/LoginForm'
import { useAuth } from '../../context/AuthContext'
import "./login.css"

const Login = () => {
  const {loginHandler} = useAuth();

  return (
    <div className='login'>
        <section>
            <h1>LOGIN HERE TO CONTINUE</h1>
        </section>
        
        <section>
            <LoginForm />
        </section>

        <button onClick={loginHandler}>login</button>
    </div>
  )
}

export default Login