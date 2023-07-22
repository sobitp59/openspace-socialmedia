import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <section className='header__logo'>
            <h2>openspace</h2>
        </section>
        
        <section className='header__search'>
            <input type="search" placeholder='search user...'/>
        </section>
        
        <section className='header__user'>
            <button className='header__theme'>light/dark</button>
            <span className='header__profile'>profile</span>
        </section>
    </div>
  )
}

export default Header