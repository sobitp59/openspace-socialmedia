import React from 'react';
import { useLocation } from "react-router";
import { NavLink, Outlet } from "react-router-dom";
import User from '../../components/user/User';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import './home.css';

const Home = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const {users} = useData();
    const {currentUser : {userInfo}} = useAuth();

    const allUsers = users?.filter(({username}) => username !== userInfo?.username)

    console.log(users)
    console.log(userInfo)

  return (
    <div className='home'>
        <aside className='home__left'>
            <section className='home__links'>
                <NavLink to={"/"}> home</NavLink>
                <NavLink to={"/explore"}> explore</NavLink>
                <NavLink to={"/bookmarks"}> bookmarks</NavLink>
                <NavLink to={"/likedposts"}> liked posts</NavLink>
                <button>create a post</button>
            </section>
            <section>
                <User 
                    firstname={userInfo?.firstName}
                    lastname={userInfo?.lastName}
                    avatar={userInfo?.avatarUrl}
                    username={userInfo?.username}
                    currentuser={true}
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
                        <User 
                            key={user?.username} 
                            firstname={user?.firstName}
                            lastname={user?.lastName}
                            avatar={user?.avatarUrl}
                            username={user?.username}
                        />
                    ))}
                </ul>
            </section>
        </aside>
    </div>
  )
}

export default Home