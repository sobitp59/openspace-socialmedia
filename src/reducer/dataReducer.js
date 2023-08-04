export const initialState = {
    users : [],
    posts : [],
    userhandle : {}
}


export const userDataReducer = (state, {type, payload}) => {
    switch(type){
        case "GET_ALL_USERS" : {
            return {...state, users : payload}
        }
        
        case "GET_ALL_POSTS" : {
            return {...state, posts : payload}
        }
        
        case "LIKE_POST" : {
            return {...state, posts : payload}
        }
        
        case "DISLIKE_POST" : {
            return {...state, posts : payload}
        }
        


        default:
            return state
    }
}