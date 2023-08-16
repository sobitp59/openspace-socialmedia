import React, { useEffect, useRef, useState } from 'react';
import { BiSolidImageAdd } from "react-icons/bi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { formateDate } from '../../utils/formateDate';
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import "./user.css";



const User = ({isCurrentuser, username, createdAt, userId, postData, userNotStyle}) => {
  const [showUserPostBox, setShowUserPostBox] = useState(false);    
  const [showEditPost, setShowEditPost] = useState(false);
   
  const [userPostData, setUserPostData] = useState({
    content : postData?.content,
    mediaURL : postData?.mediaURL
  })
  const [imageUploading, setImageUploading] = useState(false);

  const postBoxRef = useRef();
  const editPostBoxRef = useRef();

  const {users, followUserHandler, unfollowUserHandler, updatePostHandler, deletePostHandler} = useData();
  const {currentUser :  {token, userInfo}} = useAuth();


  const isUserAlreadyFollowing = users?.find((user) => user?.username === username)
    ?.followers?.find((follower) => follower?.username === userInfo?.username) ? true : false;



  const uploadMedia = async (e) => {
    setImageUploading(true);
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
        setUserPostData((prev) => ({...prev, [e?.target?.name] : secure_url}))
        setImageUploading(false)
    } catch (error) {
        console.log(error)
    }
  }                                 
                                
  useEffect(() => {
    const  closePostBox = (e) => {
      if(!postBoxRef?.current?.contains(e.target)){
        setShowUserPostBox(false)
      }
      if(!editPostBoxRef?.current?.contains(e.target)){
        setShowEditPost(false)
        setUserPostData((prev) => ({...prev, mediaURL : postData?.mediaURL, content : postData?.content}))      }
    }
    
    document.addEventListener('mousedown', closePostBox)
    return () => document.removeEventListener('mousedown', closePostBox)
  }, [])
  

                               

  return (
    <div className={!userNotStyle ? 'user user__style' : 'user'}>
        <Avatar 
          userName={username}
        />
        
        <section className='user__editpost'>
          {createdAt  && <p className='user__date'>{formateDate(createdAt)}</p> }     
          {createdAt  && <Button 
                            icon={<PiDotsThreeOutlineFill />}
                            onClick={() => setShowUserPostBox(true)}
                          /> 
          }
          {showUserPostBox && (
            <section className='user__postmodal' ref={postBoxRef}>
              {!isCurrentuser ? (
                  <>
                    <Button label={isUserAlreadyFollowing ? "unfollow" : "follow"} onClick={isUserAlreadyFollowing ? () => unfollowUserHandler(userId, token) : () => followUserHandler(userId, token)}/> 
                  </>
                ) : (
                  <>
                    <Button label={"edit"} onClick={() => setShowEditPost(true)}/>  
                    <Button label={"delete"} onClick={() => deletePostHandler(postData?.postId, token, setShowUserPostBox)}/>  
                  </>
                )}
            </section>     
          )}
        </section>

        
        {!createdAt && !isCurrentuser &&   <Button label={isUserAlreadyFollowing ? "unfollow" : "follow"} onClick={isUserAlreadyFollowing ? () => unfollowUserHandler(userId, token) : () => followUserHandler(userId, token)}/> } 


        {showEditPost && 
          <section className='user__updatepost' ref={editPostBoxRef}>
            <section className='user__updateContent'>
              <Avatar userName={username} onlyAvatar/>
              <textarea className='user__updateTextArea' name="content" onChange={(e) => setUserPostData((prev) =>({...prev, [e?.target?.name] : e?.target?.value}) )} value={userPostData?.content}></textarea>
            {userPostData?.mediaURL && (
              // <section className='user__updateImage'>
              <div className='user__updateImage'>
                <img className='user__updatemedia' src={userPostData?.mediaURL} alt="" />
                <Button 
                  icon={<RxCross2/>}
                  onClick={() => setUserPostData((prev) => ({...prev, mediaURL : ""}))}
                />
              </div>
              // </section>
            )}
            </section>
            <section className='user__updateBtns'>
              <section className='user__uploadUserMedia'>
                
                <section className='user__uploadMedia'>
                  <BiSolidImageAdd  className='upload__icons'/>
                  <input type='file' onChange={uploadMedia} name='mediaURL' accept='/image' className='user__mediaFile'/>
                </section>

                <section>
                <BsFillEmojiSmileFill className='upload__icons'/>
                </section>

              </section>
              <section className='user__actionBtns'>
                <Button onClick={() => updatePostHandler(postData.postId, userPostData,token, setShowEditPost )} label={imageUploading ? 'please wait...' : 'update'} disabled={imageUploading}/>
                <Button label={'discard'} onClick={() =>{
                  setShowEditPost(false)
                  setUserPostData((prev) => ({...prev, mediaURL : postData?.mediaURL, content : postData?.content}))
                } }/>
              </section>
            </section>
          </section>
        } 
    </div>
  )
}

export default User;