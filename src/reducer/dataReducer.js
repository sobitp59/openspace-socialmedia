export const initialState = {
    users : [],
}


export const userDataReducer = (state, {type, payload}) => {
    switch(type){
        case "GET_ALL_USERS" : {
            return {...state, users : payload}
        }


        default:
            return state
    }
}