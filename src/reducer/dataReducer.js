export const initialState = {
    users : [],
    posts : [],
    likedPosts : [],
    bookmarks : [],
    commentText : '',
    commentPostId : '',
    showCommentBox : false,
    showPostBox : false,
    postData : {
        content: "",
        mediaURL: "",
        comments : []
    }
        
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

        case "HIDE_SHOW_POST_BOX": {
            return {...state, showPostBox : payload?.show}
        }
        
        case "SET_POST_CONTENT": {
            return {...state,  postData : { content: payload, mediaURL: "", comments : []} }
        }

        case "ADD_POST": {
            return {...state, posts : payload,  postData : { ...state?.postData, content: "", mediaURL: "",}, showPostBox : false}
        }
        


        default:
            return state
    }
}