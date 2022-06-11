import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./reduxSlices/UserSlice"
import { annonceSlice } from "./reduxSlices/AnnonceSlice"
import { pretSlice } from "./reduxSlices/PretSlice"
import { empruntSlice } from "./reduxSlices/EmpruntSlice"
import { bankSlice } from "./reduxSlices/BankSlice"
import { propositionSlice } from "./reduxSlices/PropositionSlice"


export default configureStore({
  reducer: {
    user: userSlice.reducer,
    annonce: annonceSlice.reducer,
    pret: pretSlice.reducer,
    emprunt: empruntSlice.reducer,
    bank: bankSlice.reducer,
    proposition: propositionSlice.reducer
  }
})