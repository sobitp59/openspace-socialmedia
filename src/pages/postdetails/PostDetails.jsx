import React, { useEffect, useRef, useState } from 'react';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Avatar from '../../components/avatar/Avatar';
import Button from '../../components/button/Button';
import Post from '../../components/post/Post';
import { UserListsModal } from '../../components/userslistsmodal/UserListsModal';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import "./postdetails.css";

const PostDetails = () => {
    const {getUserPost, posts, getCommentText, commentText, addComment} = useData();
    const {currentUser : {userInfo, token}} = useAuth();
    const [post,setPost] = useState({})
    const {postId} = useParams();
    const [postLoading, setPostLoading] = useState(true);
    const [showLikedBy, setShowLikedBy] = useState(false);
    const textareaRef = useRef(null);
    const  likedByRef = useRef();

    const userPost = posts?.find(({_id}) => _id === post?._id);

    const focusCommentBox = () => {
       textareaRef?.current?.focus()
    } 
    
    useEffect(() => {
            getUserPost(postId, setPostLoading, setPost)
    }, [postId]);


    useEffect(() => {
      const  closeLikeBy = (e) => {
         if(!likedByRef?.current?.contains(e?.target)){
          setShowLikedBy(false);
         }
      }
      document.addEventListener('mousedown', closeLikeBy)
    }, [])

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
                postdetails
                focusCommentBox={focusCommentBox}
                textareaRef={textareaRef}
            />
            <p className='postdetails__likes' onClick={() => setShowLikedBy(true)}>{userPost?.likes?.likeCount} likes</p>
            

            {/* comments */}
            <section className='postdetailsCommentBox'>
              <textarea value={commentText} ref={textareaRef} onChange={getCommentText} placeholder='enter your comment..'></textarea>
              <Button 
                label={'comment'}
                onClick={() => addComment(postId, commentText, token)}
              />
            </section>

            {userPost?.comments?.length > 0 && (
              <ul className='postdetails__comments'>
                {userPost?.comments?.map(({_id, text, username}) => {
                  return(
                  <li className='postdetails__comment' key={_id}>
                    <section className='postdetails__top' >
                      <Avatar 
                        userName={username}
                      />
                      <Button 
                        icon={<BiDotsHorizontalRounded />}
                      />
                      
                    </section>
                    <p className='postdetails__text'>{text}</p>
                    {/* {showCommentModal && userPost && <Button label={"edit"}/>} */}
                  </li>
                  )
                })}
              </ul>
            )}
          </>
        )}
        {showLikedBy && (
           <ul className='likedby'>
            <section className='likedBy__div' ref={likedByRef}>
                <section className='likedBy__top'>
                  <span>liked by</span>
                  <Button
                        icon={<RxCross2 />}
                        onClick={() => setShowLikedBy(false)}
                    />
                </section>
              {userPost?.likes?.likedBy?.map(({_id, username}) => (
                <li className="likedby__section" key={_id}>
                    <UserListsModal userId={_id} username={username} isCurrentUser={userInfo?.username === username}/>   
                </li>
              ))}
            </section>
       </ul>
        )}
    
    </div>
  )
}

export default PostDetails;

