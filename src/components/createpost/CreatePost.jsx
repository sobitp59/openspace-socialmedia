import EmojiPicker from 'emoji-picker-react';
import React, { useEffect, useRef, useState } from 'react';
import { BiSolidImageAdd } from "react-icons/bi";
import { BsEmojiSmileFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import "./createpost.css";

const   CreatePost = ({postBox, postBoxref}) => {
  const [mediaUploading, setMediaUploading] = useState(false);
  const {currentUser : {userInfo, token}} = useAuth();
  const [showEmojiBox, setShowEmojiBox] = useState(false);
  const {hideShowPostBox, addPost, postData, setPostContent, removeMediaFromUploadPost, addEmoji} = useData();
  const {theme} = useTheme();
  const emojiRef = useRef();

  const uploadMedia = async (e) => {
    setMediaUploading(true);
    const imageData = e?.target?.files[0];
    const formData = new FormData();
    formData.append('file', imageData);
    formData.append('upload_preset', process.env.REACT_APP_CLAUDINARY_UPLOAD_PRESET);
    formData.append('cloud_name', "dibzjsyhk");

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/dibzjsyhk/auto/upload`,{
            method : "POST",
            body : formData
        })
        const {secure_url} = await response?.json();
        setPostContent(e?.target?.name, secure_url)
        setMediaUploading(false)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    const closeEmojiModal = (e) => {
      if(!emojiRef?.current?.contains(e?.target)){
        setShowEmojiBox(false);
      }
    }

    document.addEventListener('mousedown', closeEmojiModal);
    return () => document.removeEventListener('mousedown', closeEmojiModal);
  }, [])

  return (
    <div className='createPost'>
      <div ref={postBoxref} className={postBox ? 'createpost--postBox' : 'createpost'}>
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
        
        <textarea autoFocus value={postData?.content} name='content' onChange={(e) => setPostContent(e?.target?.name, e?.target?.value)} className='createpost__textarea' placeholder="what's happening..." ></textarea>
        

      </section>
        {postData?.mediaURL && (
          <section className='createpost__image'>
            <img src={postData?.mediaURL} alt="" />
            <Button 
                  icon={<RxCross2/>}
                  onClick={removeMediaFromUploadPost}
              />
          </section>
        )}

      <section className='createpost__buttons'>
        
        <section className='createpost__uploadmedia'>
          <BiSolidImageAdd className='upload__icons'/>
          <input type="file" accept='/images' name='mediaURL' onChange={uploadMedia} className='createpost__inputmedia'/>
        </section>

        <BsEmojiSmileFill className='upload__icons' onClick={() => setShowEmojiBox(prev => !prev)}/>
        
        <Button 
          label={mediaUploading ? 'please wait...' : 'POST'}
          onClick={() => addPost(postData, token)}
          disabled={mediaUploading}
        />
      </section>

        {showEmojiBox && 
          <section ref={emojiRef} className='upload__emoji'>
            <EmojiPicker onEmojiClick={(e) => addEmoji(e?.emoji)} width={'100%'} height={300} Theme={theme === 'theme-dark' ? 'dark' : 'light'}/>
          </section>
        }
      </div>
    </div>
  )
}

export default CreatePost;


