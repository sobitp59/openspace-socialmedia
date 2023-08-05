export const initialState = {
    users : [],
    posts : [],
    likedPosts : [],
    bookmarks : []
        
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

        case "LIKED_POSTS" : {
            return {...state, likedPosts : payload}
        }
        
        case "SET_BOOKMARK" : {
            return {...state, bookmarks : payload}
        }
        
        case "REMOVE_BOOKMARK" : {
            return {...state, bookmarks : payload}
        }
        


        default:
            return state
    }
}