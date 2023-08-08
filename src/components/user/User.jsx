import React from 'react';
import { formateDate } from '../../utils/formateDate';

import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import "./user.css";



const User = ({isCurrentuser, username, createdAt, userId}) => {
  const {currentUser :  {token, userInfo}} = useAuth();
  const {users, followUserHandler, unfollowUserHandler} = useData();

  const isUserAlreadyFollowing = users?.find((user) => user?.username === username)
                                ?.followers?.find((follower) => follower?.username === userInfo?.username);
  
  return (
    <div className='user'>
        <Avatar 
          userName={username}
        />
        
        {createdAt  && <p className='user__date'>{formateDate(createdAt)}</p> }     
        
        {!createdAt && !isCurrentuser &&   <Button label={isUserAlreadyFollowing ? "unfollow" : "follow"} onClick={isUserAlreadyFollowing ? () => unfollowUserHandler(userId, token) : () => followUserHandler(userId, token)}/> }  
    </div>
  )
}

export default User;