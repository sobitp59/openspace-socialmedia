import React, { useEffect, useRef, useState } from 'react';
import { BiSolidBadgeCheck } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link, useParams } from 'react-router-dom';
import Avatar from '../../components/avatar/Avatar';
import Button from '../../components/button/Button';
import ProfileEditForm from '../../components/forms/ProfileEditForm';
import Post from '../../components/post/Post';
import { UserListsModal } from '../../components/userslistsmodal/UserListsModal';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { formateDate } from '../../utils/formateDate';
import "./userpage.css";


const UserPage = () => {
    const [userhandle, setUserhandle] = useState({});
    const [loadingHandle, setLoadingHandle] = useState(true);   
    const [loadingPosts, setLoadingPosts] = useState(true);   
    const [userPosts, setUserPosts] = useState([]);
    const [showUserConnections, setShowUserConnections] = useState({
        showConnection : false,
        connectionType : ''
    })
    const [showEditForm, setShowEditForm] = useState(false);
    const userFollowList = useRef();

    const {username} = useParams();
    const {users, getUserPostsHandler, getUserHandler, posts, followUserHandler, unfollowUserHandler} = useData();
    const {currentUser : {userInfo, token}, userLogout} = useAuth(); 
    const user = users?.find((user) => user?.username === username );
    const isUserAlreadyFollowing = user?.followers?.find(({username})  => username === userInfo?.username);

    document.title = 'profile | openspace'
    
    
    useEffect(() => {
            if(posts){
                getUserPostsHandler(username, setLoadingPosts, setUserPosts);
            }
    }, [posts, username]);
    
    useEffect(() => {
        getUserHandler(user, setLoadingHandle, setUserhandle);
    }, [user]);

    useEffect(() => {
        const closeUserFollowModal = (e) => {
            if(!userFollowList?.current?.contains(e?.target)){
                setShowUserConnections({
                    showConnection : false,
                    connectionType : ''
                })
            }
        }
        document.addEventListener('mousedown', closeUserFollowModal)
    }, []);

    return (
    <div className='userprofile'>
        {showEditForm && <ProfileEditForm setShowEditForm={setShowEditForm} user={user}/>}
        
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
                                onClick={() => setShowEditForm(true)}
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
                <span onClick={() => {
                   setShowUserConnections((prev) => ({...prev,  showConnection : true, connectionType : 'FOLLOWERS'}))
                }}><strong>{userhandle?.followers?.length}</strong> followers</span>
                
                <span onClick={() => {
                    setShowUserConnections((prev) => ({...prev,  showConnection : true, connectionType : 'FOLLOWINGS'}))
                }}><strong>{userhandle?.following?.length}</strong> followings</span>
            </p>
        </section>
        )}
        {loadingPosts ? <p>fetchning posts</p> : (
            <ul className='user__posts'>
                {userPosts?.map(({_id}) => {
                        const userPost = posts?.find((post) => post?._id === _id )
                        return(<li className='user__post'  key={_id}>
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


    
        {showUserConnections?.showConnection && (
            <ul ref={userFollowList} className='userprofile__followLists'>
                <section className='userprofile__followList'>
                    <section className='userprofile__followHeader'>
                    <span>{showUserConnections?.connectionType === 'FOLLOWERS' ? 'followers' : 'followings'}</span>
                    <Button
                        icon={<RxCross2 />}
                        onClick={() => setShowUserConnections({
                            showConnection : false,
                            connectionType : ''
                        })}
                    />
                    </section>

                    
                    {(showUserConnections?.connectionType === 'FOLLOWERS' && userhandle?.followers?.length === 0) ? <p>no followers found</p> : (showUserConnections?.connectionType === 'FOLLOWINGS' && userhandle?.following?.length === 0) &&  <p>no followings found</p>} 

                    {showUserConnections?.connectionType === 'FOLLOWERS' ? 
                    userhandle?.followers?.map((follower) => (
                        <li className="userprofile__followUser" key={follower?._id}>
                            <UserListsModal username={follower?.username} userId={follower?._id} isCurrentUser={follower?.username === userInfo?.username}/>
                        </li>
                    )) : 
                    
                    userhandle?.following?.map((followings) => (
                        <li className="userprofile__followUser" key={followings?._id}>
                            <UserListsModal username={followings?.username} userId={followings?._id} isCurrentUser={followings?.username === userInfo?.username}/>
                        </li>
                    ))  
                    }
                </section>
        </ul>
        )}
    

    </div>
  )
}

export default UserPage;
