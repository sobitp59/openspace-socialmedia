import React from 'react'
import Post from '../../components/post/Post'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <aside className='home__left'>
            <section className='home__links'>
                <a href="#">home</a>
                <a href="#">home</a>
                <a href="#">home</a>
                <a href="#">home</a>
                <button>create a post</button>
            </section>
            <section>
                profile
            </section>
        </aside>
        
        <section className='home__main'>
            <Post/>
            <h1>posts</h1>
        </section>
        
        <aside className='home__right'>
            <section>
                <button>trending</button>
                <button>latest</button>
            </section>

            <section>
                <p>suggestions for you</p>
            </section>
        </aside>
    </div>
  )
}

export default Home