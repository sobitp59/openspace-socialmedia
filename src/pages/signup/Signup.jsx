import React from 'react';
import { NavLink } from 'react-router-dom';
import SignupForm from '../../components/forms/SignupForm';
import "./signup.css";

const Signup = () => {
  return (
    <div className='signup'>
        <section>
            <h1><span>//</span>openspace</h1>
            
            <h2>get started</h2>

            <p>already have an account? <NavLink to={"/login"}>sign in</NavLink></p>

            <SignupForm />
        </section>

    </div>
  )
}

export default Signup