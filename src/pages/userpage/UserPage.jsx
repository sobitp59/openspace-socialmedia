import React, { useEffect, useState } from 'react';
import { BiSolidBadgeCheck } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import Avatar from '../../components/avatar/Avatar';
import Button from '../../components/button/Button';
import Post from '../../components/post/Post';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { formateDate } from '../../utils/formateDate';
import "./userpage.css";


const UserPage = () => {
    const {username} = useParams();
    const {users, getUserPostsHandler, getUserHandler, posts, followUserHandler, unfollowUserHandler} = useData();
    const {currentUser : {userInfo, token}, userLogout} = useAuth(); 
    const [userhandle, setUserhandle] = useState({});
    const [loadingHandle, setLoadingHandle] = useState(true);   
    const [loadingPosts, setLoadingPosts] = useState(true);   
    const [userPosts, setUserPosts] = useState([]);
    
    const user = users?.find((user) => user?.username === username );
    const isUserAlreadyFollowing = user?.followers?.find(({username})  => username === userInfo?.username);

    document.title = 'profile | openspace'
    
    
    useEffect(() => {
            getUserPostsHandler(username, setLoadingPosts, setUserPosts);
    }, [username])
    
    useEffect(() => {
        getUserHandler(user, setLoadingHandle, setUserhandle);
    }, [user])

    return (
    <div className='userprofile'>
        {loadingHandle ? <p>data is loading...</p> : (

        <section className='userprofile__data' key={userhandle?._id}>
            
            <section className='userprofile__details'>
                    <Avatar 
                        userName={userhandle?.username}
                    />
                    {userInfo?.username === userhandle?.username ? (
                        <section className='userprofile__userBtns'>
                            <Button 
                                label="edit"
                            />
                            <Button 
                                label="logout"
                                onClick={userLogout}
                            />
                        </section>
                    ) : (
                        <Button 
                            label={isUserAlreadyFollowing ? "following" : "follow"}
                            onClick={isUserAlreadyFollowing ? () => unfollowUserHandler(userhandle?._id, token): () => followUserHandler(userhandle?._id, token)}
                        />
                    )}
            </section>

            <section className='userprofile__bio'>
                <p>{userhandle?.bio}</p>
                <Link to='#'>{userhandle?.website}</Link>
                <p><MdDateRange /> {formateDate(userhandle?.createdAt)}</p>
            </section>
            <p className='userprofile__followings'>
                <span><strong>{userPosts?.length}</strong> {userPosts?.length <= 1 ? 'post' : 'posts'}</span>
                <span><strong>{userhandle?.followers?.length}</strong> followers</span>
                <span><strong>{userhandle?.following?.length}</strong> following</span>
            </p>
        </section>
        )}
        {loadingPosts ? <p>fetchning posts</p> : (
            <ul className='user__posts'>
                {userPosts?.map(({_id}) => {
                        const userPost = posts?.find((post) => post?._id === _id )
                        return(<li key={_id}>
                            <Post
                                postId={userPost?._id} 
                                content={userPost?.content}
                                comments={userPost?.comments}
                                mediaURL={userPost?.mediaURL}
                                username={userPost?.username}
                                likes={userPost?.likes}
                                createdAt={userPost?.createdAt}
                            />
                        </li>
                        )
}
                )}
            </ul>
        ) }
    </div>
  )
}

export default UserPage;
