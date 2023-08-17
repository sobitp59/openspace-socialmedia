import React, { useEffect, useRef, useState } from 'react';
import { MdColorLens } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import THEMEDARK from "../../assets/images/theme-dark.png";
import THEMEGRAY from "../../assets/images/theme-gray.png";
import THEMEGREEN from "../../assets/images/theme-green.png";
import THEMELIGHT from "../../assets/images/theme-light.png";
import THEMEORANGE from "../../assets/images/theme-orange.png";
import THEMERED from "../../assets/images/theme-red.png";
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import './header.css';


const Header = () => {
  const [query, setQuery] = useState('');
  const searchedBoxRef = useRef();
  const themeRef = useRef();
  const [showThemes, setShowThemes] = useState(false);

  const {users}= useData();
  const {userLogout, currentUser : {userInfo}}= useAuth();
  const {changeTheme, theme} = useTheme();
  
  const searchedUsers = users?.filter(({firstName, lastName, username}) => (firstName + lastName)?.toLowerCase()?.includes(query?.toLowerCase()) || username?.toLowerCase()?.includes(query?.toLowerCase()));

  useEffect(() => {

    const closeSearchBox = (e) => {
      if(!searchedBoxRef?.current?.contains(e?.target)){
        setQuery("")
      }
    }

    document.addEventListener('mousedown', closeSearchBox)

    return () => document.removeEventListener('mousedown', closeSearchBox)
  }, [])
  
  useEffect(() => {

    const closeTheme = (e) => {
      if(!themeRef?.current?.contains(e?.target)){
        setShowThemes(false)
      }
    }

    document.addEventListener('mousedown', closeTheme)

    return () => document.removeEventListener('mousedown', closeTheme)
  }, [])

  return (
    <div className='header'>
        <section className='header__logo'>
            <h2><span>{'//'}</span>openspace</h2>
        </section>
        
        <section className='header__search'>
            <input type="search" value={query} onChange={(e) => setQuery(e?.target?.value)} placeholder='search user...'/>
        </section>
        
        <section className='header__user'>
            <Button 
              label="logout"
              onClick={userLogout}
            />
            
            <Button 
              label={'theme '}
              icon={<MdColorLens />}
              onClick={() => setShowThemes(prev => !prev)}
            />
        </section>

          {query?.length > 0 && (
            <ul ref={searchedBoxRef} className="header__searchUsers">
                {searchedUsers?.map(({username}) => 
                  <Avatar 
                    userName={username}
                    query={query}
                    setQuery={setQuery}
                    hover
                  />
                )}
            </ul>
          )}

          {showThemes && (
            <section className='theme-options'>
              <div className="theme-div">
                <section className='theme-header'>
                  <h1>choose theme</h1>
                  <Button 
                    icon={<RxCross2 />}
                    onClick={() =>  setShowThemes(false)}
                  />
                </section>
                
                <section ref={themeRef} className='theme-lists'>
                  <article className={theme ===  'theme-dark' ? 'theme-option active-theme': 'theme-option'} onClick={() => changeTheme('theme-dark', setShowThemes)}>
                    <img src={THEMEDARK} alt="theme-dark-option" />
                  </article>
                  <article className={theme ===  'theme-light' ? 'theme-option active-theme': 'theme-option'} onClick={() => changeTheme('theme-light', setShowThemes)}>
                    <img src={THEMELIGHT} alt="theme-light-option" />
                  </article>
                  <article className={theme ===  'theme-green' ? 'theme-option active-theme': 'theme-option'} onClick={() => changeTheme('theme-green', setShowThemes)}>
                    <img src={THEMEGREEN} alt="theme-green-option" />
                  </article>
                  <article className={theme ===  'theme-red' ? 'theme-option active-theme': 'theme-option'} onClick={() => changeTheme('theme-red', setShowThemes)}>
                    <img src={THEMERED} alt="theme-red-option" />
                  </article>
                  <article className={theme ===  'theme-gray' ? 'theme-option active-theme': 'theme-option'} onClick={() => changeTheme('theme-gray', setShowThemes)}>
                    <img src={THEMEGRAY} alt="theme-gray-option" />
                  </article>
                  <article className={theme ===  'theme-orange' ? 'theme-option active-theme': 'theme-option'} onClick={() => changeTheme('theme-orange', setShowThemes)}>
                    <img src={THEMEORANGE} alt="theme-orange-option" />
                  </article>
                </section>
              </div>
          </section>
          )}
    </div>
  )
}

export default Header