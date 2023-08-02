export const initialState = {
    users : [],
    userhandle : {}
}


export const userDataReducer = (state, {type, payload}) => {
    switch(type){
        case "GET_ALL_USERS" : {
            return {...state, users : payload}
        }
       
        // case "GET_USER" : {
        //     return {...state, userhandle : payload}
        // }


        default:
            return state
    }
}