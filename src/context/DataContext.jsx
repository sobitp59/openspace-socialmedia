import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, userDataReducer } from "../reducer/dataReducer";
import { dislikePostService, getAllPostsService, getUserPostDetails, getUserPosts, likePostService } from "../services/postservice";
import { getAllUsersService, getUserService } from "../services/userService";

const DataContext = createContext();


export const DataContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(userDataReducer, initialState);

    // const authToken = true;
    
    
    const getAllUsers = async () => {
        try {
            const response = await getAllUsersService();
            const {status, data : {users}} = response;
            if(status === 200){
                dispatch({
                    type : "GET_ALL_USERS",
                    payload : users
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getAllPostsHandler = async () => {
        try {
            const response = await getAllPostsService();
            const {status, data : {posts} } = response;
            if(status === 200){
                dispatch({
                    type : "GET_ALL_POSTS",
                    payload : posts
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getUserHandler = async (userId, setLoadingHandle, setUserhandle) => {
        try {
                setLoadingHandle(true);
                  const response = await getUserService(userId);
                   const {status, data : {user}} = response;
                   if(status === 200){
                     setUserhandle(user)
                    } 
                    setLoadingHandle(false);
                } catch (error) {
                    console.log(error);
                }
    }

    const getUserPostsHandler = async (username, setLoadingPosts, setUserPosts) => {
        if(username){
            try {
                    setLoadingPosts(true);
                      const response = await getUserPosts(username);
                       const {status, data : {posts} } = response;
                       if(status === 200){
                        setUserPosts(posts)
                         console.log(posts)
                        } 
                        setLoadingPosts(false);
                    } catch (error) {
                        console.log(error);
                    }
    }
    }

    const getUserPost = async (postId, setPostLoading, setPost) => {
            if(postId){
                try {
                    setPostLoading(true);
                          const response = await getUserPostDetails(`${postId}`);
                           const {status, data :{post}  } = response;
                           if(status === 200){
                            setPost(post)
                            } 
                            console.log(post)
                            setPostLoading(false);
                        } catch (error) {
                            console.log(error);
                        }
            }
    }


    const likePostHandler = async (postID, token) => {
        console.log(postID)
        try{
            const response = await likePostService(postID, token);
            const {status, data : {posts} } = response;
            if(status === 201){
                dispatch({
                    type : "LIKE_POST",
                    payload : posts
                })
                console.log(posts)
            }
        }catch (error){
            console.log(error);
        }
    }
    
    const dislikePostHandler = async (postID, token) => {
        console.log(postID)
        try{
            const response = await dislikePostService(postID, token);
            const {status, data : {posts} } = response;
            if(status === 201){
                dispatch({
                    type : "DISLIKE_POST",
                    payload : posts
                })
                console.log(posts)
            }
        }catch (error){
            console.log(error);
        }
    }

    
    useEffect(() => {
        getAllUsers();
        getAllPostsHandler();
    }, [])



    const value = {
        users : state?.users,
        posts : state?.posts,
        userhandle : state?.userhandle,
        getAllUsers,
        getUserHandler,
        getUserPostsHandler,
        getUserPost,
        likePostHandler,
        dislikePostHandler
    }

    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);