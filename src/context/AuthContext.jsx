import { createContext, useContext, useReducer } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { initialState, userAuthReducer } from "../reducer/authReducer";
import { userLoginService, userSignupService } from "../services/authservice";


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


    const setGuestLoginData = (username,password) => {
        console.log('guest user')
        dispatch({
            type : "SET_GUEST_LOGIN_DATA",
            payload : {
                username : username,
                password : password
            }
        })
    }

    const userLogin = async (event, username, password) => {
        event?.preventDefault();

        try {
            const response = await userLoginService(username, password);
            const {status, data : {foundUser, encodedToken}} = response;
            if(status === 200){
                const userData = {userInfo : foundUser, token : encodedToken};
                localStorage.setItem("userData", JSON.stringify(userData))
                dispatch({
                    type : "USER_LOGGED_IN",
                    payload : {
                        userInfo : foundUser,
                        token : encodedToken
                    }
                })
                navigate("/");
                setTimeout(() => {
                    toast.success(`welcome back! ${foundUser?.firstName}`)
                }, 100)
            }
        } catch (error) {
            console.log(error)
        }

    }    
    
    const userSignup = async (event, firstName, lastName, username, password) => {
        
        event?.preventDefault();

        console.log(firstName, lastName, username, password)

        try {
            const response = await userSignupService(firstName, lastName, username, password)
            const {status, data : {createdUser, encodedToken}} = response;
            
            console.log(status, createdUser, encodedToken)
            if(status === 201){
                const userData = {userInfo : createdUser, token : encodedToken};
                localStorage.setItem("userData", JSON.stringify(userData))
                dispatch({
                    type : "USER_LOGGED_IN",
                    payload : {
                        userInfo : createdUser,
                        token : encodedToken
                    }
                })
                navigate("/");
                toast.success(`welcome back! ${createdUser?.firstName}`)
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
        userSignup,
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