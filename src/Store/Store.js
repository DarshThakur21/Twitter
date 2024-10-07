import { appBarClasses } from "@mui/material";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";


const rootReducers=combineReducers({

    auth:authReducer, //this is like key given to access the state in the reducer using the auth key function of redux

    


});

export const Store=legacy_createStore(rootReducers,applyMiddleware(thunk));