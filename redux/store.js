import {legacy_createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import userReducer from "./reducer"
import FriendsReducer from "./friends/Reducer";

const rootReducer = combineReducers({userReducer, FriendsReducer});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))