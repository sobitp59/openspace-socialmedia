export const initialState = {
    users : [],
    posts : [],
    likedPosts : [],
    bookmarks : [],
    commentText : '',
    showCommentBox : false,
        
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

        case "GET_COMMENT_TEXT" : {
            return {...state, commentText : payload}
        }

        case "HIDE_SHOW_COMMENT_BOX" : {
            console.log(payload)
            return {...state, showCommentBox : payload, commentText : payload === false ? '' : state?.commentText}
        }
        


        default:
            return state
    }
}