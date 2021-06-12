// store

//Konstantos iškėlimas.
const ADD_TO_LIST="ADD_TO_LIST"

//Reduceris
const tagItemReducer = (state=[], action)=>{

    switch (action.type){
        case ADD_TO_LIST:
            return state
        default:
            return state
    }

}

//Action creator
const addToTagItemList = (tagItem) => ({
        type: "ADD_TO_LIST",
        tagItem
})

export default tagItemReducer
export {addToTagItemList}