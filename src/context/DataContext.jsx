import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, userDataReducer } from "../reducer/dataReducer";
import { getAllUsersService } from "../services/userService";


const DataContext = createContext();


export const DataContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(userDataReducer, initialState);

    // const authToken = true;
    
    
    const getAllUsers = async () => {
        try {
            const response = await getAllUsersService();
            if(response.status === 200){
                const data = await response.data;
                dispatch({
                    type : "GET_ALL_USERS",
                    payload : data?.users
                })
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllUsers();
    }, [])


    const value = {
        users : state?.users
    }

    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);