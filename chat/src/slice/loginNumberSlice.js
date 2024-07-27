import { createSlice } from '@reduxjs/toolkit';

const loginNumberSlice = createSlice({
    name: 'LoginNumber',
    initialState: '',
    reducers: {
        loginNumber(state, action) {
            return state = action.payload
        }
    }
});

export const { loginNumber } = loginNumberSlice.actions;
export default loginNumberSlice.reducer