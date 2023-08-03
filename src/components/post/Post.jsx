import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { BiShareAlt } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa"
import { FiBookmark } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import User from '../user/User'
import './post.css'



const Post = ({postId, content, comments, mediaURL, username, likes, createdAt}) => {
  const {users} = useData();
  const {firstName, lastName, avatarUrl} = users?.find((user) => user?.username === username);


  return (
    <div className='post'>
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
            <button>
              {likes?.likeCount}
              <AiOutlineHeart />
            </button>
            <button>
              {comments?.length}
              < FaRegComment/>        
            </button>
            <button>
              < FiBookmark />
            </button>
            <button>
              <BiShareAlt />
            </button>
          </section>
    </div>
  )
}

export default Post