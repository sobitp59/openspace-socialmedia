import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import "./likedby.css";

export const LikedBy = ({username}) => {
    return (
        <>
            <Avatar 
                userName={username}        
            />
            <Button
                label={'follow'}
            />
        </>

    )
}
   