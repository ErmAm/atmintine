import tagItemReducer, {subscribeToItemListChanges} from "./slices/tagItemSlice";
import {combineReducers, compose, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";



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



export default constructStore