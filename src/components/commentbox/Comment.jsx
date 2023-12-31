import React from 'react'
import { RxCross2 } from "react-icons/rx"
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext'
import Avatar from '../avatar/Avatar'
import Button from '../button/Button'
import "./comment.css"

const Comment = () => {
    const {currentUser : {userInfo, token}} = useAuth();
    const {hideShowCommentBox, getCommentText, commentText, addComment, commentPostId} = useData();


  return (
    <div className='comment'>
        <section className='comment__top'>
            <p><strong>post comment</strong></p>
            <Button
                icon={<RxCross2 />}
                onClick={() => hideShowCommentBox('hide')}
            />
        </section>
        <section className='comment__bottom'>
            
            <section className='comment__content'>                
                <Avatar
                    userName={userInfo?.username}
                    onlyAvatar 
                />
                <textarea autoFocus onChange={getCommentText} value={commentText} className='comment__textarea' placeholder='write your thoughts..'></textarea>
            </section>
        </section>
        <section className='comment__btn'>
            <Button 
                label={'comment'}
                onClick={() => addComment(commentPostId, commentText, token)}
            />
        </section>
    </div>
  )
}

export default Comment