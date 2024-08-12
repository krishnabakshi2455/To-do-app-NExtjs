
import { configureStore } from '@reduxjs/toolkit'
import slice, { Listslice } from './slice'

export const store = configureStore({
    reducer: {
        ADDTASKS: slice
    },
    devTools:true,
})