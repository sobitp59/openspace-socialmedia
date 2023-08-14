import React from 'react';
import { useLocation } from "react-router";
import { NavLink, Outlet } from "react-router-dom";
import User from '../../components/user/User';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
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

  return (
    <div className='home'>
        <Toaster />

        <aside className='home__left'>
            <section className='home__links'>
                <NavLink to={"/"}> home</NavLink>
                <NavLink to={"/explore"}> explore</NavLink>
                <NavLink to={"/bookmarks"}> bookmarks</NavLink>
                <NavLink to={"/likedposts"}> liked posts</NavLink>
                
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
                />
            </section>
        </aside>
        
        <section className='home__main'>
            <Outlet />
        </section>
        
        <aside className='home__right'>
            {isHomePage && 
                <section>
                    <button>trending</button>
                    <button>latest</button>
                </section>
            }

            <section>
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