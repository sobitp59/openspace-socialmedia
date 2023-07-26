
export const initialState = {
    isLoggedIn : false,
}


export const userAuthReducer = (state, {type, payload}) => {
    switch(type){
        case 'USER_LOGIN' :{
            return {...state, isLoggedIn : payload}
        }
        
        case 'USER_LOGOUT' :{
            return {...state, isLoggedIn : payload}
        }


        default:
            return state;
    }
}