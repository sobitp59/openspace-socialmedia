import React from 'react';
import { BiSolidImageAdd } from "react-icons/bi";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useAuth } from '../../context/AuthContext';
import "./createpost.css";

const CreatePost = () => {
  const {currentUser : {userInfo}} = useAuth();

  return (
    <div className='createpost'>
      
      <section className='createpost__top'>
        <section className='createpost__message'>
          <textarea className='createpost__textarea' name="" id="" placeholder='whats happening...'></textarea>
          <img  className='createpost__avatar' src={userInfo?.avatarUrl} alt="" />
        </section>
      </section>

      <section className='createpost__bottom'>
        <section>
          <button><BiSolidImageAdd /></button>
          <button><BsEmojiSmileFill/></button>
        </section>
          <button>post</button>
      </section>
    
    </div>
  )
}

export default CreatePost