import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        bar: false
    },
    reducers: {
        handleSlide: (state, action) => {
            state.bar = action.payload
        }
    }
})

export default sidebarSlice.reducer
export const { handleSlide } = sidebarSlice.actions