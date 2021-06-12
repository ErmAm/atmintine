import tagItem from "./slices/tagItemSlice";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";



// root reduceris yra funckija guanama iškvietus kitą f-ją.
const rootReducer = combineReducers({
    // tagItemList: tagItemReducer
    tagItem

})

const constructStore = () => {

    //debugo įjungimas
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

    return createStore(
        rootReducer,
        undefined,
        composeEnhancer())
}

export default constructStore