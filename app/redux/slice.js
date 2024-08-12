import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    MYTASKS:[]
}

export const Listslice = createSlice({
    name: 'ADDTASKS',
    initialState,
    reducers: {
        listtask:(state,action)=>{
            state.MYTASKS.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { listtask } = Listslice.actions

export default Listslice.reducer