import {createSlice} from "@reduxjs/toolkit";
import {testExtraReducer} from "../thunks/testThunk";

const initialState = {
    user: localStorage.getItem('user') ||
        sessionStorage.getItem('user') ||
        null,
    allUsers: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.user = payload
        },
        removeUser: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        testExtraReducer(builder)
    }
})

export const userSelector = state => state.user.user

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer
