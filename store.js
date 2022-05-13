import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./reduxSlices/UserSlice"
import { annonceSlice } from "./reduxSlices/AnnonceSlice"


export default configureStore({
  reducer: {
    user: userSlice.reducer,
    annonce: annonceSlice.reducer,
  }
})