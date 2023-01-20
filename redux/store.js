import {legacy_createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import userReducer from "./reducer"

const rootReducer = combineReducers({userReducer});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))