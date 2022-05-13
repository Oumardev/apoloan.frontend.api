import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./reduxSlices/UserSlice"


export default configureStore({
  reducer: {
    user: userSlice.reducer,
  }
})