import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { initialState, userAuthReducer } from "../reducer/authReducer";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(userAuthReducer, initialState);
    const navigate = useNavigate();

    const loginFormDataHandler = (event) => {
        const {name, value} = event?.target;
        dispatch({
            type : 'USER_LOGIN_DATA',
            payload : {
                name : name,
                value : value
            }
        })
    }

    
    const loginHandler = () => {
        dispatch({
            type  : 'USER_LOGIN',
            payload : true,
        })
        navigate("/");
    }

    const signupFormDataHandler = (event) => {
        const {name, value} = event?.target;
        dispatch({
            type : 'USER_SIGNUP_DATA',
            payload : {
                name : name,
                value : value
            }
        })
    }
    
    const logoutHandler = () => {
        dispatch({
            type  : 'USER_LOGOUT',
            payload : false,
        })
    }

    
    const value = {
        isLoggedIn : state.isLoggedIn,
        loginData : state.loginData,
        signupData : state.signupData,
        loginHandler,
        logoutHandler,
        loginFormDataHandler,
        signupFormDataHandler
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)