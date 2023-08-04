import React, { useEffect, useState } from 'react';
import { BiSolidBadgeCheck } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import Avatar from '../../components/avatar/Avatar';
import Button from '../../components/button/Button';
import Post from '../../components/post/Post';
import { useData } from '../../context/DataContext';
import { formateDate } from '../../utils/formateDate';
import "./userpage.css";


const UserPage = () => {
    const {username} = useParams();
    const {users, getUserPostsHandler, getUserHandler} = useData(); 
    const [userhandle, setUserhandle] = useState({});
    const [loadingHandle, setLoadingHandle] = useState(true);   
    const [loadingPosts, setLoadingPosts] = useState(true);   
    const [userPosts, setUserPosts] = useState([]);
    
    const user = users?.find((user) => user?.username === username );

    document.title = 'profile | openspace'
    

    useEffect(() => {
        if(username){
            getUserPostsHandler(username, setLoadingPosts, setUserPosts);
        }
    }, [getUserPostsHandler, username])
    
    useEffect(() => {
        if(user?._id){
            getUserHandler(user?._id, setLoadingHandle, setUserhandle);
        }
    }, [getUserHandler, user?._id])

    return (
    <div className='userprofile'>
        {loadingHandle ? <p>data is loading...</p> : (

        <section className='userprofile__data' key={userhandle?._id}>
            
            <section className='userprofile__details'>
                <section className='user_info'>
                    <Avatar 
                        userName={userhandle?.username}
                    />
                </section>
                <Button label="follow"/>
            </section>

            <section>
                <p>{userhandle?.bio}</p>
                <Link to='#'>{userhandle?.website}</Link>
                <p><MdDateRange /> {formateDate(userhandle?.createdAt)}</p>
            </section>
            <p>
                <span>{userPosts?.length} {userPosts?.length <= 1 ? 'post' : 'posts'}</span>
                <span>{userhandle?.followers?.length} followers</span>
                <span>{userhandle?.following?.length} following</span>
            </p>
        </section>
        )}
        {loadingPosts ? <p>fetchning posts</p> : (
            <ul className='user__posts'>
                {userPosts?.map(({_id, content, comments, mediaURL, username, likes, createdAt}) => (
                        <li key={_id}>
                            <Post
                                postId={_id} 
                                content={content}
                                comments={comments}
                                mediaURL={mediaURL}
                                username={username}
                                likes={likes}
                                createdAt={createdAt}
                            />
                        </li>
                    )
                )}
            </ul>
        ) }
    </div>
  )
}

export default UserPage;
