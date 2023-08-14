import React, { useEffect } from 'react';
import { BiSolidBadgeCheck } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import "./avatar.css";


const Avatar = ({userName, onlyAvatar, query, setQuery}) => {
    const {users} = useData();
    const {firstName, lastName, avatarUrl, username} = users?.find((user) => user?.username === userName) ?? [];
    const userDefault = firstName?.charAt(0)?.toUpperCase();

    const closeSearchedBox = () => {
      if(query?.length){
        setQuery("")
      }
      return;
      
    }

    return (
    <Link to={`/profile/${username}`}  onClick={closeSearchedBox} className='avatar'>
        {onlyAvatar ? (
          !avatarUrl ? <section className='avatar__image--default'>{userDefault}</section> : <img className='avatar__image' src={avatarUrl} alt={`avatar of ${firstName}`} />
        ) : (
          <>
          {!avatarUrl ? <section className='avatar__image--default'>{userDefault}</section> : <img className='avatar__image' src={avatarUrl} alt={`avatar of ${firstName}`} />}
          <section className='avatar_name'>
              <p><strong>{firstName} {lastName} <BiSolidBadgeCheck /> </strong></p>
              <p>{username}</p>
          </section>
          </>
        )}
    </Link>
  )
}

export default Avatar