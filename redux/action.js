import { SET_USER_NAME ,SET_USER_AGE } from "./actionTypeName";

export const setNameAction = (name) => {
    return (dispatch) => {
        dispatch({
            type: SET_USER_NAME,
            payload: name
        })
    }
}

export const setAgeAction = (age) => {
    return (dispatch) => {
        dispatch({
            type: SET_USER_AGE,
            payload: age
        })
    }
}

