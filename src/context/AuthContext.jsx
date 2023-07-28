import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { initialState, userAuthReducer } from "../reducer/authReducer";
import { userLoginService } from "../services/authservice";

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


    const setGuestLoginData = async () => {
        console.log('guest user')
        dispatch({
            type : "SET_GUEST_LOGIN_DATA",
            payload : {
                username : "shikamaru_nara",
                password : "Str@tegyM@ster"
            }
        })
    }

    const userLogin = async (event, username, password) => {
        event?.preventDefault();

        try {
            const response = await userLoginService(username, password)
            if(response?.status === 200){
                const data = response?.data;
                const userData = {userInfo : data?.foundUser, token : data?.encodedToken};
                localStorage.setItem("userData", JSON.stringify(userData))
                dispatch({
                    type : "USER_LOGGED_IN",
                    payload : {
                        userInfo : data?.foundUser,
                        token : data?.encodedToken
                    }
                })
                navigate("/");
            }
        } catch (error) {
            console.log(error)
        }

    }    
    
    const userLogout = () => {
        localStorage.removeItem("userData");
        dispatch({
            type : "USER_LOGGED_OUT",
        })
        navigate("/");
    }

    
    const value = {
        isLoggedIn : state.isLoggedIn,
        loginData : state.loginData,
        signupData : state.signupData,
        currentUser : state.currentUser,
        userLogin,
        userLogout,
        loginFormDataHandler,
        signupFormDataHandler,
        setGuestLoginData
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)