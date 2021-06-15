import tagItemReducer, {loadItemListFromLocalStorage, subscribeToItemListChanges} from "./slices/tagItemSlice";
import {combineReducers, compose, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import user from './slices/userSlice'



// root reduceris yra funckija guanama iškvietus kitą f-ją.
// const rootReducer = combineReducers({
//     // tagItemList: tagItemReducer
//     tagItemsListed
//
// })

const constructStore = () => {

    const store = configureStore({
        reducer: {
            tagItemReducer,
            user
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
        preloadedState:{
            tagItemReducer: loadItemListFromLocalStorage()
        }
    })

    subscribeToItemListChanges(store)

    return store

}

const store = constructStore()

export default store