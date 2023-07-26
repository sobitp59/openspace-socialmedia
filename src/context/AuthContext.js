import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { initialState, userAuthReducer } from "../reducer/authReducer";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(userAuthReducer, initialState);
    const navigate = useNavigate();


    const loginHandler = () => {
        dispatch({
            type  : 'USER_LOGIN',
            payload : true,
        })
        navigate("/");
    }
    
    const logoutHandler = () => {
        dispatch({
            type  : 'USER_LOGOUT',
            payload : false,
        })
    }

    
    const value = {
        isLoggedIn : state.isLoggedIn,
        loginHandler,
        logoutHandler
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)