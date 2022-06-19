import React from 'react';
//import {createStore} from "redux"
import {combineReducers, legacy_createStore as createStore} from "redux";
import contentReducer from './contentReducer';
import dialogsReducer from './dialogsReducer';


let reducers = combineReducers({
    content: contentReducer,
    dialogs:  dialogsReducer
});

let store = createStore(reducers);
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;