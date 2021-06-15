import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loggedInUsser: null,
    jwt: null
}



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(user, {payload}) {
            return payload
        },
        logout(){
            return initialState
        }
}

})

export default userSlice.reducer
export const {login, logout} = userSlice.actions