import apiInstance from "../axios.config";
import { ENABLE_ACCOUNT_URL } from '../URL_API'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchtoecobank = createAsyncThunk(
    'bank/fetchtoecobank',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')
    try {
        const response = await apiInstance.post(ENABLE_ACCOUNT_URL,values,{ 
            headers: { Authorization: `Bear ${token}` },
        });
        let data = response.data
         
        if(response.status === 200){
            console.log(data)
            return data;
        } else {
            return thunkAPI.rejectWithValue(data);
        }

    } catch(e){
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
);

export const bankSlice = createSlice({
    name: "bank",
  
        initialState: {
            isFetching : false,
            errorHappen : false,
            errorMessage : '',
            activated: false
        },
  
        reducers: {
            clearState: (state) => {
                state.isFetching = false;
                state.errorHappen = false;
                state.errorMessage = '';
                state.activated = false;

                return state;
            }
        },
  
    extraReducers: {
        [fetchtoecobank.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = false
            state.activated = true;
            return state;
        },
        [fetchtoecobank.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = true;
            state.errorMessage = payload ? payload.error: '';
        },
        [fetchtoecobank.pending]: (state) => {
            state.isFetching = true;
        },
    },
})
  
export const { clearState } = bankSlice.actions;
export const bankSelector = state => state.bank