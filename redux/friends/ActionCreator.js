import { ADD_NEW_FRIEND,FETCH_ALL_FRIENDS } from "./ActionTypeName";


export const addNewFriend = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_NEW_FRIEND,
            payload: data
        })
    }
}

export const fetchAllFriends = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_ALL_FRIENDS
        })
    }
}