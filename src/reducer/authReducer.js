
export const initialState = {
    isLoggedIn : false,
    loginData : {
        email : "",
        password : ""
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
        case 'USER_LOGIN' :{
            return {...state, isLoggedIn : payload}
        }
        
        case 'USER_LOGIN_DATA' : {
            return {...state, loginData : {...state?.loginData, [payload?.name] : payload?.value}}
        }
        
        case 'USER_SIGNUP_DATA' : {
            return {...state, signupData : {...state?.signupData, [payload?.name] : payload?.value}}
        }

        case 'USER_LOGOUT' :{
            return {...state, isLoggedIn : payload}
        }


        default:
            return state;
    }
}