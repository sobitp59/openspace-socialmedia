import React, { useEffect, useState } from 'react';
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
    const [showFollowersModal, setShowFollowersModal] = useState(false);
    const [showFollowingsModal, setShowFollowingsModal] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);


    const {username} = useParams();
    const {users, getUserPostsHandler, getUserHandler, posts, followUserHandler, unfollowUserHandler} = useData();
    const {currentUser : {userInfo, token}, userLogout} = useAuth(); 
    const user = users?.find((user) => user?.username === username );
    const isUserAlreadyFollowing = user?.followers?.find(({username})  => username === userInfo?.username);

    document.title = 'profile | openspace'
    
    
    useEffect(() => {
            if(showFollowersModal) setShowFollowersModal(false)
            if(showFollowingsModal) setShowFollowingsModal(false)
            getUserPostsHandler(username, setLoadingPosts, setUserPosts);
    }, [username])
    
    useEffect(() => {
        getUserHandler(user, setLoadingHandle, setUserhandle);
    }, [user])

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
                    setShowFollowersModal(true)
                    setShowFollowingsModal(false)
                }}><strong>{userhandle?.followers?.length}</strong> followers</span>
                
                <span onClick={() => {
                    setShowFollowingsModal(true)
                    setShowFollowersModal(false)
                }}><strong>{userhandle?.following?.length}</strong> following</span>
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


        {/* followers-follwoing lists */}
        {showFollowersModal ? (
            <ul className='userprofile__followLists'>
                <section className='userprofile__followList'>
                    <section className='userprofile__followHeader'>
                    <span>followers</span>
                    <Button
                        icon={<RxCross2 />}
                        onClick={() => setShowFollowersModal(false)}
                    />
                    </section>
                    <hr />
                    {user?.followers?.length === 0 && <p>no followers found</p>}
                    {user?.followers?.map((follower) => (
                        <li className="userprofile__followUser" key={follower?._id}>
                            <UserListsModal username={follower?.username} userId={follower?._id} isCurrentUser={follower?.username === userInfo?.username}/>
                        </li>
                    ))}
                </section>
        </ul>
        ) : showFollowingsModal && (
            <ul className='userprofile__followLists'>
            <section className='userprofile__followList'>
                <section className='userprofile__followHeader'>
                <span>followings</span>
                <Button
                    icon={<RxCross2 />}
                    onClick={() => setShowFollowingsModal(false)}
                />
                </section>
                <hr />
                {user?.following?.length === 0 && <p>no followings found</p>}
                {user?.following?.map((following) => (
                    <li className="userprofile__followUser" key={following?._id}>
                        <UserListsModal userId={following?._id} username={following?.username} isCurrentUser={following?.username === userInfo?.username}/>
                    </li>
                ))}
            </section>
        </ul>
        )}


    </div>
  )
}

export default UserPage;
