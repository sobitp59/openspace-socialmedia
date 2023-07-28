
export const initialState = {
    isLoggedIn : false,
    loginData : {
        username : "",
        password : ""
    },

    currentUser : {
        userInfo : JSON.parse(localStorage.getItem("userData"))?.userInfo,
        token : JSON.parse(localStorage.getItem("userData"))?.token
    },
  
    signupData : {
        firstname : "",
        lastname : "",
        email : "",
        password : "",
        confirmpassword : ""
    }
}


export const userAuthReducer = (state, {type, payload}) => {
    switch(type){
        
        case 'USER_LOGIN_DATA' : {
            return {...state, loginData : {...state?.loginData, [payload?.name] : payload?.value}}
        }
        
        case 'USER_SIGNUP_DATA' : {
            return {...state, signupData : {...state?.signupData, [payload?.name] : payload?.value}}
        }

        
        case 'SET_GUEST_LOGIN_DATA' : {
            console.log(payload)
            return {...state, loginData : { username : payload?.username, password : payload?.password }}
        }
        
        case 'USER_LOGGED_IN' : {
            return {...state, currentUser : { userInfo : payload?.userInfo, token : payload?.token }, loginData : {username : "", password : ""}}
        }

        case 'USER_LOGGED_OUT' :{
            return {...state, currentUser : { userInfo : "", token : "" }}
        }


        default:
            return state;
    }
}