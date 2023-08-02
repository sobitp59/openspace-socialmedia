import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, userDataReducer } from "../reducer/dataReducer";
import { getUserPosts } from "../services/postservice";
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

    const getPosts = async (username, setLoadingPosts, setUserPosts) => {
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

    
    useEffect(() => {
        getAllUsers();
    }, [])



    const value = {
        users : state?.users,
        userhandle : state?.userhandle,
        getAllUsers,
        getUserHandler,
        getPosts
    }

    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);