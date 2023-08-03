import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../../components/avatar/Avatar';
import { LikedBy } from '../../components/likedby/LikedBy';
import Post from '../../components/post/Post';
import { useData } from '../../context/DataContext';
import "./postdetails.css";

const PostDetails = () => {
    const {getUserPost} = useData();
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [postLoading, setPostLoading] = useState(true);
    const [showLikedBy, setShowLikedBy] = useState(false);

    useEffect(() => {
        if(post?._id) return;
        else if(postId){
            getUserPost(postId, setPostLoading, setPost)
        }
    }, [getUserPost, postLoading, postId, post]);
    
    console.log(post)

  return (
    <div className='postdetails'>
        {postLoading ? (
          <p>post loading...</p>
        ) : (
          <>
            <Post
                postId={post?._id} 
                content={post?.content}
                comments={post?.comments}
                mediaURL={post?.mediaURL}
                username={post?.username}
                likes={post?.likes}
                createdAt={post?.createdAt}
            />
            <hr />
            <p className='postdetails__likes' onClick={() => setShowLikedBy(true)}>{post?.likes?.likeCount} likes</p>
            <hr />
            
            <ul className='postdetails__comments'>
              {post?.comments?.map(({_id, text, username}) => {
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
              {post?.likes?.likedBy?.map(({_id, username}) => (
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

