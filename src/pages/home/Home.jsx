import React from 'react';
import { AiFillFire, AiTwotoneHeart } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { IoIosWater, IoMdBookmarks } from "react-icons/io";
import { MdExplore } from "react-icons/md";
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
        borderRadius : isActive && '0.6rem',
        fontWeight : isActive && '700',
    })

  return (
    <div className='home'>
        <Toaster />

        <aside className='home__left'>
            <section className='home__links'>
                <NavLink style={activeStyle} className={'home__navlink'} to={"/"}> <GoHomeFill /> home</NavLink>
                <NavLink style={activeStyle} className={'home__navlink'} to={"/explore"}> <MdExplore /> explore</NavLink>
                <NavLink style={activeStyle} className={'home__navlink'} to={"/bookmarks"}> < IoMdBookmarks/> bookmarks</NavLink>
                <NavLink style={activeStyle} className={'home__navlink'} to={"/likedposts"}> < AiTwotoneHeart /> liked posts</NavLink>
                
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
                         icon={<AiFillFire/>}
                         />
                    <Button 
                         label={'latest'}
                         icon={<IoIosWater/>}
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