import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    MYTASKS: []
}

export const Listslice = createSlice({
    name: 'ADDTASKS',
    initialState,
    reducers: {
        listtask: (state, action) => {
            state.MYTASKS.push(action.payload)
        },
        removetask: (state, action) => {
            const data=state.MYTASKS.filter((item,index)=>{
                return index !== action.payload
            })
            state.MYTASKS= data

        }
    },
})

// Action creators are generated for each case reducer function
export const { listtask, removetask } = Listslice.actions

export default Listslice.reducer