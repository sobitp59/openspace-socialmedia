import React from 'react';
import { NavLink } from "react-router-dom";
import LoginForm from '../../components/forms/LoginForm';
import "./login.css";

const Login = () => {

  return (
    <div className='login'>
        <section>
            <h1><span>//</span>openspace</h1>
            
            <h2>welcome back</h2>

            <p>new to openspace? <NavLink to={"/signup"}>create an account</NavLink></p>

            <LoginForm />
          </section>

    </div>
  )
}

export default Login