import React from 'react';

import Post from '../../components/post/Post';
import { useData } from '../../context/DataContext';
import "./liked.css";

const Liked = () => {
  const {likedPosts} = useData();
  console.log(likedPosts)
  return (
    <div className='likedposts'>
      <h2>liked posst</h2>
      <ul className='likedposts__lists'>
          {likedPosts?.map(({_id, content, comments, mediaURL, username, likes, createdAt}) => (
            <li className='post' key={_id}>
              <Post 
                postId={_id} 
                content={content}
                comments={comments}
                mediaURL={mediaURL} 
                username={username} 
                likes={likes}
                createdAt={createdAt}
              />
            </li>
          ))}
      </ul>
    </div>
  )
  
}

export default Liked