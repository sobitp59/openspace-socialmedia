import React from 'react'
import { BiSolidBadgeCheck } from "react-icons/bi"
import Button from '../button/Button'
import "./user.css"



const User = ({key, firstname, lastname, avatar, username}) => {
  return (
    <div className='user' key={key}>
        <div className='user_info'>
            <img className='user__avatar' src={avatar} alt={`avatar of ${firstname}`} />
            <section className='user_name'>
                <p><strong>{firstname} {lastname} <BiSolidBadgeCheck /> </strong></p>
                <p>{username}</p>
            </section>
        </div>
            
        <Button label="follow"/>
    </div>
  )
}

export default User