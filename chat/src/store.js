import { configureStore } from '@reduxjs/toolkit'
import clickdContactReducer from './slice/clickdContactSlice'
import loginNumber from './slice/loginNumberSlice'


export const store = configureStore({
    devTools: true,
    reducer: {
        contact: clickdContactReducer,
        loginNumber
    }
})