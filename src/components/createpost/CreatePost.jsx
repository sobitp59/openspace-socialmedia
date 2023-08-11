import React, { useState } from 'react';
import { BiSolidImageAdd } from "react-icons/bi";
import { BsEmojiSmileFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import "./createpost.css";

const  CreatePost = ({postBox}) => {
  const {currentUser : {userInfo, token}} = useAuth();
  const {hideShowPostBox, addPost, postData, setPostContent} = useData();



  return (
    <div className={postBox ? 'createpost--postBox' : 'createpost'}>
      
        {postBox && (
          <section className='createpost__header'>
            <p><strong>new post</strong></p>
            <Button 
              icon={<RxCross2 />}
              onClick={() => hideShowPostBox('hide')}
            />
          </section>
        )}
      <section className='createpost__postcontent'>
        
        <Avatar 
          userName={userInfo?.username}
          onlyAvatar
        />
        <pre>

          <textarea autoFocus value={postData?.content} onChange={setPostContent} className='createpost__textarea' placeholder="what's happening..." ></textarea>
        </pre>
      </section>

      <section className='createpost__buttons'>
        <Button 
          icon={<BsEmojiSmileFill/>}
        />
        
        <Button 
          icon={<BiSolidImageAdd />}
        />

        <Button 
          label={'POST'}
          onClick={() => addPost(postData, token)}
        />
      </section>
    
    </div>
  )
}

export default CreatePost;


