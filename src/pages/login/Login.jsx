import React from 'react'
import LoginForm from '../../components/forms/LoginForm'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <section>
            <h1>LOGIN HERE TO CONTINUE</h1>
        </section>
        
        <section>
            <LoginForm />
        </section>
    </div>
  )
}

export default Login