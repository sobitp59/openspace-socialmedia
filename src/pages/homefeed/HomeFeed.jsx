import React, { useState } from 'react'
import CreatePost from '../../components/createpost/CreatePost'
import Post from '../../components/post/Post'
import { useData } from "../../context/DataContext"
import "./homefeed.css"


const HomeFeed = () => {
  const {posts} = useData();



  return (
    <div className='homefeed'>
        <CreatePost />
        {posts.length < 1 ? <p>posts loading...</p> : (
          <ul className='homefeed__posts'>
              {posts?.map(({_id, content, likes,  comments, mediaURL, username, createdAt}) => (
                <Post 
                  postId={_id}
                  content={content}
                  mediaURL={mediaURL}
                  username={username}
                  likes={likes}
                  comments={comments}
                  createdAt={createdAt}
                
                />
              ) )}
          </ul>
        ) }
    </div>
  )
}

export default HomeFeed;
