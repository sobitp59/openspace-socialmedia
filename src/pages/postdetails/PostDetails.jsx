import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../../components/avatar/Avatar';
import { LikedBy } from '../../components/likedby/LikedBy';
import Post from '../../components/post/Post';
import { useData } from '../../context/DataContext';
import "./postdetails.css";

const PostDetails = () => {
    const {getUserPost, posts} = useData();
    const [post,setPost] = useState({})
    const {postId} = useParams();
    const [postLoading, setPostLoading] = useState(true);
    const [showLikedBy, setShowLikedBy] = useState(false);



    const userPost = posts?.find(({_id}) => _id === post?._id);

    useEffect(() => {
            getUserPost(postId, setPostLoading, setPost)
    }, [postId]);


    console.log('POSTS', posts)
  return (
    <div className='postdetails'>
        {postLoading ? (
          <p>post loading...</p>
        ) : (
          <>
            <Post
                postId={userPost?._id} 
                content={userPost?.content}
                comments={userPost?.comments}
                mediaURL={userPost?.mediaURL}
                username={userPost?.username}
                likes={userPost?.likes}
                createdAt={userPost?.createdAt}
            />
            <hr />
            <p className='postdetails__likes' onClick={() => setShowLikedBy(true)}>{userPost?.likes?.likeCount} likes</p>
            <hr />
            
            <ul className='postdetails__comments'>
              {userPost?.comments?.map(({_id, text, username}) => {
                return(
                <li className='postdetails__comment' key={_id}>
                  <Avatar 
                    userName={username}
                  />
                  <p className='postdetails__text'>{text}</p>
                </li>
                )
              })}
            </ul>
          </>
        )}
        {showLikedBy && (
           <ul className='likedby'>
            <section className='likedBy__div'>
                <section className='likedBy__top'>
                  <span>liked by</span>
                  <button onClick={() => setShowLikedBy(false)}>X</button>
                </section>
                <hr />  
              {userPost?.likes?.likedBy?.map(({_id, username}) => (
                <li className="likedby__section" key={_id}>
                    <LikedBy username={username}/>   
                </li>
              ))}
            </section>
       </ul>
        )}
    
    </div>
  )
}

export default PostDetails;

