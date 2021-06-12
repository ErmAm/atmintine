import tagItemReducer from "./slices/tagItemSlice";
import {combineReducers, compose, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import {saveToLocalStorage} from "../utils/localStorage";

// root reduceris yra funckija guanama iškvietus kitą f-ją.
// const rootReducer = combineReducers({
//     // tagItemList: tagItemReducer
//     tagItemsListed
//
// })

const constructStore = () => {

    const store = configureStore({
        reducer: {
            tagItemReducer
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
    })

    subscribeToItemListChanges(store)

    return store

    // //debugo įjungimas
    // const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
    //
    // return createStore(
    //     rootReducer,
    //     undefined,
    //     composeEnhancer())
}

let prevTagListState = []

const subscribeToItemListChanges = (store) => {
    // store.subscribe(() => console.log("state pasikeite",store.getState()))

    const currentTagListState = store.getState().tagItemReducer

    if (prevTagListState !== currentTagListState) {

        prevTagListState = currentTagListState

        store.subscribe(() => {
            saveToLocalStorage('tagList', store.getState().tagItemReducer)
        })
    }
}

export default constructStore