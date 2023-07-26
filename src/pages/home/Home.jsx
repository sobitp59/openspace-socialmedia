import React from 'react';
import { useLocation } from "react-router";
import { NavLink, Outlet } from "react-router-dom";
import './home.css';

const Home = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';


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
                profile
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
            </section>
        </aside>
    </div>
  )
}

export default Home