import React from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BiShareAlt } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa"
import { FiBookmark } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext'
import Button from '../button/Button'
import User from '../user/User'
import './post.css'



const Post = ({postId, content, comments, mediaURL, username, likes, createdAt}) => {
  const {users, likePostHandler, dislikePostHandler} = useData();
  const {currentUser : {userInfo}} = useAuth();
  const {currentUser : {token}} = useAuth();
  const {firstName, lastName, avatarUrl} = users?.find((user) => user?.username === username);

  const isPostAlreadyLiked = likes?.likedBy?.find((user) => user?.username === userInfo?.username );
  return (
    <>
        <User 
          username={username}
          firstname={firstName}
          lastname={lastName}
          avatar={avatarUrl}
          createdAt={createdAt}
        />
      <Link to={`/posts/${postId}`} className='post__info'>
          <p className='post__content'>{content}</p>
          {mediaURL && <img className='post__media' src={mediaURL} alt={`a post by ${username}`} />}
      </Link>
          <section className='post__buttons'>
            <Button 
              label={likes?.likeCount}
              icon={isPostAlreadyLiked ? <AiFillHeart /> : <AiOutlineHeart />}
              onClick={isPostAlreadyLiked ? () => dislikePostHandler(postId, token): () => likePostHandler(postId, token)}
            />
            
            <Button 
              label={comments?.length}
              icon={< FaRegComment/>}
            />
            <button>
              < FiBookmark />
            </button>
            <button>
              <BiShareAlt />
            </button>
          </section>
    </>
  )
}

export default Post