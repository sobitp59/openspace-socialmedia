import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { BiShareAlt } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa"
import { FiBookmark } from "react-icons/fi"
import { useData } from '../../context/DataContext'
import User from '../user/User'
import './post.css'



const Post = ({content, comments, mediaURL, username, likes, createdAt}) => {
  const {users} = useData();
  const {_id, firstName, lastName, avatarUrl} = users?.find((user) => user?.username === username);
  console.log( likes)
  // {key, firstname, lastname, avatar, username, currentuser, badge}

  return (
    <div className='post'>
      <section>
        <User 
          key={_id}
          username={username}
          firstname={firstName}
          lastname={lastName}
          avatar={avatarUrl}
          createdAt={createdAt}
        />
      </section>
      <section>
          <p className='post__content'>{content}</p>
          {mediaURL && <img className='post__media' src={mediaURL} alt={`a post by ${username}`} />}
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
      </section>
    </div>
  )
}

export default Post