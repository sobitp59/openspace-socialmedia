import React from 'react';
import "../../App.css";
import Post from '../../components/post/Post';
import { useData } from '../../context/DataContext';
import "./bookmark.css";

const Bookmark = () => {
  const {posts, bookmarks} = useData();
  console.log(bookmarks) 
  return (
    <div className='bookmarks'>
      <h2>bookmarks</h2>
      <ul className='bookmarks__lists'>
          {bookmarks?.map(({_id}) => {
            const bookmarkPost = posts?.find((post) => post?._id === _id);
            return(
              <li className='post' key={_id}>
                <Post 
                  postId={bookmarkPost?._id} 
                  content={bookmarkPost?.content}
                  comments={bookmarkPost?.comments}
                  mediaURL={bookmarkPost?.mediaURL} 
                  username={bookmarkPost?.username} 
                  likes={bookmarkPost?.likes}
                  createdAt={bookmarkPost?.createdAt}
                />
              </li>
              )
          })}
      </ul>
    </div>
  )
}

export default Bookmark