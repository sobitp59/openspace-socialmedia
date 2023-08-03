import React from 'react';
import { formateDate } from '../../utils/formateDate';

import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import "./user.css";



const User = ({username, currentuser, createdAt}) => {
  return (
    <div className='user'>
        <Avatar 
          userName={username}
        />
        
        {createdAt  && <p className='user__date'>{formateDate(createdAt)}</p> }     
        
        {!currentuser && !createdAt &&   <Button label="follow"/> }    
    </div>
  )
}

export default User