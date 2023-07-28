import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './header.css';
import Button from '../button/Button';

const Header = () => {
  const {userLogout}= useAuth();

  return (
    <div className='header'>
        <section className='header__logo'>
            <h2>openspace</h2>
        </section>
        
        <section className='header__search'>
            <input type="search" placeholder='search user...'/>
        </section>
        
        <section className='header__user'>
            {/* <button onClick={logoutHandler}>logout</button> */}
            <Button 
              label="logout"
              onClick={userLogout}
            />
            
            <button className='header__theme'>light/dark</button>
            <span className='header__profile'>profile</span>
        </section>
    </div>
  )
}

export default Header