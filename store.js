import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./reduxSlices/UserSlice"
import { annonceSlice } from "./reduxSlices/AnnonceSlice"
import { pretSlice } from "./reduxSlices/PretSlice"
import { empruntSlice } from "./reduxSlices/EmpruntSlice"


export default configureStore({
  reducer: {
    user: userSlice.reducer,
    annonce: annonceSlice.reducer,
    pret: pretSlice.reducer,
    emprunt: empruntSlice.reducer
  }
})