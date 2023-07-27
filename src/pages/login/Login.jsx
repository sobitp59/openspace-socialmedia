import React from 'react';
import { NavLink } from "react-router-dom";
import LoginForm from '../../components/forms/LoginForm';
import { useAuth } from '../../context/AuthContext';
import "./login.css";

const Login = () => {
  const {loginHandler} = useAuth();

  return (
    <div className='login'>
        <section>
            <h1><span>//</span>openspace</h1>
            
            <h2>welcome back</h2>

            <p>new to openspace? <NavLink to={"/signup"}>create an account</NavLink></p>

            <LoginForm />
            
            <button onClick={loginHandler}>login</button>
        </section>

    </div>
  )
}

export default Login