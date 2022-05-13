import apiInstance from "../axios.config";
import { LOGIN_URL, REGISTER_URL, ANNONCE_LIST_URL, ANNONCE_CREATE_URL, ACCOUNT_REFIL_URL, ACCOUNT_DEBIT_URL, PRET_LIST_URL, EMPRUNT_LIST_URL, ACCOUNT_REFOUND, USER_EDIT_URL, USER_GET_URL, EDIT_PASSWORD_URL} from '../URL_API'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const login = createAsyncThunk(
    'users/login',
    async (values,thunkAPI) => {
    
    try {
        const response = await apiInstance.post(LOGIN_URL,values);
        let data = response.data
         
        if(response.status === 200){
            return data;
        } else {
            return thunkAPI.rejectWithValue(data);
        }

    } catch(e){
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
);

export const userSlice = createSlice({
    name: "user",
  
        initialState: {
            token : "",
            errorMessage: ''
        },
  
        reducers: {
            clearState: (state) => {
                state.token = "";
                state.errorMessage = "";
                return state;
            },
        },
  
    extraReducers: {
        [login.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            return state;
        },
        [login.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.errorMessage = payload ? payload.error: '';
        },
        [login.pending]: (state) => {
            state.isFetching = true;
        },
    },
})
  
export const { clearState } = userSlice.actions;
export const userSelector = state => state.user