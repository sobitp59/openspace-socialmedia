import React from 'react';
import { useLocation } from "react-router";
import { NavLink, Outlet } from "react-router-dom";
import User from '../../components/user/User';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import '../../index.css';
import './home.css';

import { Toaster } from 'react-hot-toast';
import Button from '../../components/button/Button';

const Home = () => {
    const {hideShowPostBox} = useData()
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    document.title = "home | openspace"

    const {users} = useData();
    const {currentUser : {userInfo}} = useAuth();

    const allUsers = users?.filter(({_id}) => _id !== userInfo?._id)

    const activeStyle = ({isActive}) => ({
        color : isActive ?   'var(--text-dark)' : 'var(--text-dark)',
        background : isActive ? 'var(--background-secondary-CTA)' : 'transparent',
        padding : isActive && '0.8rem 1rem',
        borderRadius : isActive && '0.6rem',
        fontWeight : isActive && '700',
    })

  return (
    <div className='home'>
        <Toaster />

        <aside className='home__left'>
            <section className='home__links'>
                <NavLink style={activeStyle} to={"/"}> home</NavLink>
                <NavLink style={activeStyle} to={"/explore"}> explore</NavLink>
                <NavLink style={activeStyle} to={"/bookmarks"}> bookmarks</NavLink>
                <NavLink style={activeStyle} to={"/likedposts"}> liked posts</NavLink>
                
                <Button 
                    label={'create post'}
                    onClick={() => hideShowPostBox('show')}
                />

            </section>
            <section>
                <User 
                    firstname={userInfo?.firstName}
                    lastname={userInfo?.lastName}
                    avatar={userInfo?.avatarUrl}
                    username={userInfo?.username}
                    isCurrentuser={true}
                    userNotStyle
                />
            </section>
        </aside>
        
        <section className='home__main'>
            <Outlet />
        </section>
        
        <aside className='home__right'>
            {isHomePage && 
                <section className='home__right__header'>
                    <Button 
                         label={'trending'}
                    />
                    <Button 
                         label={'latest'}
                    />
                </section>
            }

            <section className='home__right__users'>
                <p>suggestions for you</p>
                <ul className='users__lists'>
                    {allUsers?.map((user) => (
                        <li className='user__list' key={user?._id}>
                            <User
                                username={user?.username}
                                userId={user?._id}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    </div>
  )
}

export default Home