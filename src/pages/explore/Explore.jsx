import React from 'react';
import Post from '../../components/post/Post';
import { useData } from '../../context/DataContext';
import "./explore.css";

const Explore = () => {
  const {posts} = useData();
  return (
    <div className='exploreposts'>
      <h2>explore posts</h2>
      <ul className='exploreposts__lists'>
          {posts?.map(({_id, content, comments, mediaURL, username, likes, createdAt}) => (
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

export default Explore