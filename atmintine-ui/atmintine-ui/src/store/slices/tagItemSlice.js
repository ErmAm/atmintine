// store
//Konstantos iškėlimas.
import {createSlice} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";

//
// const ADD_TO_LIST = "ADD_TO_LIST"
// const REMOVE_FROM_LIST = "REMOVE_FROM_LIST"

// 2.1 Redux toolkitas create slice.
const tagItemSlice = createSlice({
    name: 'tagItems',
    initialState: [],
    reducers: {

        //    prisidedam funcijas.
        addToTagItemList(state, {payload: tagItem}) {
            state.push(tagItem)

        },
        removeFromItemList(state, {payload: tagItemID}) {
            //filter yra gražiau atrodantis, tik filter retuną turi todėl ir reikia
            // keisti sintaxe.
            return state.filter((tagItem) => tagItem.id !== tagItemID)
        }
        // tagItem(state, action){
        //     console.log(state)
        //     console.log("Atėjo")
        // }
    }
})

// //Reduceris
// const tagItemReducer = (state = [], action) => {
//
//     switch (action.type) {
//         case ADD_TO_LIST:
//             return [...state, action.tagItem]
//         case REMOVE_FROM_LIST:
//             return state.filter((tagItem) => tagItem.id !== action.id)
//         default:
//             return state
//     }
//
// }
//
// //Action creator
// const addToTagItemList = (tagItem) => ({
//     type: "ADD_TO_LIST",
//     tagItem
// })
//
// //Pridedu antrąjį reducerį.
// const removeFromItemList = (tagItemID) => ({
//     type: REMOVE_FROM_LIST,
//     tagItemID
// })
//
// export default tagItemReducer
// export {addToTagItemList, removeFromItemList}

export default tagItemSlice.reducer
export const {addToTagItemList, removeFromItemList} = tagItemSlice.actions // čia yra action creatoriai.