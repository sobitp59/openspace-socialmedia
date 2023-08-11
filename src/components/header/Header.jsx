import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../button/Button';
import './header.css';

const Header = () => {
  const {userLogout, currentUser : {userInfo}}= useAuth();
  const userDefault = userInfo?.firstName?.charAt(0)?.toUpperCase()
  return (
    <div className='header'>
        <section className='header__logo'>
            <h2>//openspace</h2>
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
            {/* <span className='header__profile'>
            {!userInfo?.avatarUrl ? <section className='header__avatar'>{userDefault}</section> : <img className='header__avatar' src={userInfo?.avatarUrl} alt={`avatar of ${userInfo?.firstName}`} /> }
              
            </span> */}
        </section>
    </div>
  )
}

export default Header