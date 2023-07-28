import React from 'react'
import { BiSolidBadgeCheck } from "react-icons/bi"
import Button from '../button/Button'
import "./user.css"



const User = ({key, firstname, lastname, avatar, username, currentuser, badge}) => {

  const userDefault = firstname?.charAt(0)?.toUpperCase()

  return (
    <li className='user' key={key}>
        <div className='user_info'>
            {!avatar ? <section className='user__avatar user__avatar--default'>{userDefault}</section> : <img className='user__avatar' src={avatar} alt={`avatar of ${firstname}`} /> }
            <section className='user_name'>
                <p><strong>{firstname} {lastname} <BiSolidBadgeCheck /> </strong></p>
                <p>{username}</p>
            </section>
        </div>
        {!currentuser &&   <Button label="follow"/> }    
    </li>
  )
}

export default User