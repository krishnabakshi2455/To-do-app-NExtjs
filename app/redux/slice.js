import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    MYTASKS: [],
    edittask: ''
}

export const Listslice = createSlice({
    name: 'ADDTASKS',
    initialState,
    reducers: {
        listtask: (state, action) => {
            state.MYTASKS.push(action.payload)

        },
        removetask: (state, action) => {
            const data = state.MYTASKS.filter((item, index) => {
                return index !== action.payload
            })
            state.MYTASKS = data

        },
        edittask: (state, action) => {
            // state.edittask = action.payload.edittask
            state.edittask = action.payload
            const data = state.MYTASKS.filter((index) => {
                return index !== action.payload
            })
            state.MYTASKS = data


        }
    },
})

// Action creators are generated for each case reducer function
export const { listtask, removetask, edittask } = Listslice.actions

export default Listslice.reducer