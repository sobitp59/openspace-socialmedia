import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import User from '../user/User';
import './header.css';

const Header = () => {
  const searchedBoxRef = useRef();

  const {userLogout, currentUser : {userInfo}}= useAuth();
  const {users}= useData();

  const userDefault = userInfo?.firstName?.charAt(0)?.toUpperCase();

  const [query, setQuery] = useState('');
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
              label={'light/dark'}
            />
            {/* <span className='header__profile'>
            {!userInfo?.avatarUrl ? <section className='header__avatar'>{userDefault}</section> : <img className='header__avatar' src={userInfo?.avatarUrl} alt={`avatar of ${userInfo?.firstName}`} /> }
              
            </span> */}
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
    </div>
  )
}

export default Header