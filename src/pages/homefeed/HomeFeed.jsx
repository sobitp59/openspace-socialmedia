import React, { useState } from 'react'
import CreatePost from '../../components/createpost/CreatePost'
import Post from '../../components/post/Post'
import { useData } from "../../context/DataContext"
import "./homefeed.css"


const HomeFeed = () => {
  const {posts} = useData();

  console.log(posts)

  return (
    <div className='homefeed'>
        <CreatePost />
        {posts?.length === 0  ? <p>posts loading...</p> : (
          <ul className='homefeed__posts'>
              {posts?.map(({_id, content, likes,  comments, mediaURL, username, createdAt}) => (
                <li className='post' key={_id}>
                  <Post 
                    postId={_id}
                    content={content}
                    mediaURL={mediaURL}
                    username={username}
                    likes={likes}
                    comments={comments}
                    createdAt={createdAt}
                  
                  />
                </li>
              ) )}
          </ul>
        ) }
    </div>
  )
}

export default HomeFeed;
