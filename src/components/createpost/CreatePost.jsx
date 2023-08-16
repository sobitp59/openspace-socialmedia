import React, { useEffect, useRef, useState } from 'react';
import { BiSolidImageAdd } from "react-icons/bi";
import { BsEmojiSmileFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import "./createpost.css";

const   CreatePost = ({postBox}) => {
  const [mediaUploading, setMediaUploading] = useState(false);
  const {currentUser : {userInfo, token}} = useAuth();
  const {hideShowPostBox, addPost, postData, setPostContent, removeMediaFromUploadPost} = useData();
  const postBoxref = useRef();

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
    const  closeLikeBy = (e) => {
       if(!postBoxref?.current?.contains(e?.target)){
        hideShowPostBox(false);
       }
    }
    document.addEventListener('mousedown', closeLikeBy)
  }, [])

  return (
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
        <Button 
          icon={<BsEmojiSmileFill/>}
        />
        
        <section className='createpost__uploadmedia'>
          <Button 
            icon={<BiSolidImageAdd />}
          />
          <input type="file" accept='/images' name='mediaURL' onChange={uploadMedia} className='createpost__inputmedia'/>
        </section>

        <Button 
          label={mediaUploading ? 'please wait...' : 'POST'}
          onClick={() => addPost(postData, token)}
          disabled={mediaUploading}
        />
      </section>
    
    </div>
  )
}

export default CreatePost;


