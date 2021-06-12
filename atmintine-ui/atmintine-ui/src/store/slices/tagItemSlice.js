// store

//Konstantos iškėlimas.
const ADD_TO_LIST="ADD_TO_LIST"
const REMOVE_FROM_LIST="REMOVE_FROM_LIST"

//Reduceris
const tagItemReducer = (state=[], action)=>{

    switch (action.type){
        case ADD_TO_LIST:
            return [...state, action.tagItem]
        case REMOVE_FROM_LIST:
            return state.filter((tagItem) => tagItem.id !== action.id)
        default:
            return state
    }

}

//Action creator
const addToTagItemList = (tagItem) => ({
        type: "ADD_TO_LIST",
        tagItem
})

//Pridedu antrąjį reducerį.
const removeFromItemList = (tagItemID) => ({
    type: REMOVE_FROM_LIST,
    tagItemID
})

export default tagItemReducer
export {addToTagItemList, removeFromItemList}