import { configureStore } from "@reduxjs/toolkit"
import SidebarSlice from "./SidebarSlice"

export default configureStore({
    reducer: {
        sidebar: SidebarSlice
    }
})