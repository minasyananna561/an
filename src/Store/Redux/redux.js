import { legacy_createStore,  combineReducers, applyMiddleware } from "redux";
import { Reducer } from "../Reducers/InitialReducer";
import {FirstReducer} from "../Reducers/FirstReducer"
import thunk from "redux-thunk"


let Rootreducers=combineReducers({
    UsersPage :Reducer,
   UsersFirstPage:FirstReducer
})

export let store=legacy_createStore(Rootreducers,applyMiddleware(thunk))
