import apiInstance from "../axios.config";
import { ENABLE_ACCOUNT_URL, SHOW_PAYMENT_URL, MAKE_PAYMENT_URL } from '../URL_API'
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

export const showpayment = createAsyncThunk(
    'payment/showpayment',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')
    try {
        const response = await apiInstance.post(SHOW_PAYMENT_URL,values,{ 
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

export const makepayment = createAsyncThunk(
    'payment/makepayment',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')
    try {
        const response = await apiInstance.post(MAKE_PAYMENT_URL,values,{ 
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
            activated: false,
            paySuccess : false,
            payment : {}
        },
  
        reducers: {
            clearState: (state) => {
                state.isFetching = false;
                state.errorHappen = false;
                state.errorMessage = '';
                state.activated = false;
                state.payment = {}

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

        [showpayment.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = false
            state.payment = payload;
            return state;
        },
        [showpayment.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = true;
            state.errorMessage = payload ? payload.error: '';
        },
        [showpayment.pending]: (state) => {
            state.isFetching = true;
        },

        [makepayment.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = false;
            state.paySuccess = true;
            return state;
        },
        [makepayment.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = true;
            state.errorMessage = payload ? payload.error: '';
        },
        [makepayment.pending]: (state) => {
            state.isFetching = true;
        },
    },
})
  
export const { clearState } = bankSlice.actions;
export const bankSelector = state => state.bank