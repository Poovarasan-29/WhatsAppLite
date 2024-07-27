import { createSlice } from "@reduxjs/toolkit";

const initialState = '';
const clickedContactSlice = createSlice({
    name: "clickedContact",
    initialState,
    reducers: {
        clickedContact(state, action) {
            state = action.payload
            return state
        }
    }
})

export const { clickedContact } = clickedContactSlice.actions;
export default clickedContactSlice.reducer
