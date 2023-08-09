import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import "./userlistsmodal.css";

export const UserListsModal = ({userId, username, isCurrentUser}) => {
    const {followUserHandler, unfollowUserHandler, users} = useData();
    const {currentUser : {userInfo, token}} = useAuth();
    const isUserAlreadyFollowing = users?.find((user) => user?.username === username)
                                ?.followers?.find((follower) => follower?.username === userInfo?.username);

    return (
        <>
            <Avatar 
                userName={username}        
            />
            {!isCurrentUser && <Button 
                                label={isUserAlreadyFollowing ? 'following' : 'follow'}
                                onClick={isUserAlreadyFollowing ? () => unfollowUserHandler(userId, token) : () => followUserHandler(userId, token)} 
                               />
            }
            
        </>

    )
}
