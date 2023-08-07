export const initialState = {
    users : [],
    posts : [],
    likedPosts : [],
    bookmarks : [],
    commentText : '',
    commentPostId : '',
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
            return {...state, showCommentBox : payload.show, commentText : payload.show === false ? '' : state?.commentText, commentPostId : payload.show === false ? '' : payload?.id }
        }
        
        case "ADD_COMMENT" : {
            return {...state, posts : payload,  commentText : '', commentPostId : '', showCommentBox :false}
        }
        


        default:
            return state
    }
}