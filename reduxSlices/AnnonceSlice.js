import apiInstance from "../axios.config";
import { ANNONCE_LIST_URL, ANNONCE_CREATE_URL, ACCOUNT_REFIL_URL, ACCOUNT_DEBIT_URL, PRET_LIST_URL, EMPRUNT_LIST_URL, ACCOUNT_REFOUND, USER_EDIT_URL, USER_GET_URL, EDIT_PASSWORD_URL} from '../URL_API'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const annoncelist = createAsyncThunk(
    'annonce/list',
    async (thunkAPI) => {
        const token = await AsyncStorage.getItem('token')

    try {
        const response = await apiInstance.get(ANNONCE_LIST_URL,{ 
            headers: { Authorization: `Bear ${token}` },
        });

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

export const annoncedebit = createAsyncThunk(
    'annonce/debit',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')
    
    try {
        const response = await apiInstance.post(ACCOUNT_DEBIT_URL,values,{ 
            headers: { Authorization: `Bear ${token}` },
        });

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

export const annoncecreate = createAsyncThunk(
    'annonce/create',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')
    
    try {
        const response = await apiInstance.post(ANNONCE_CREATE_URL,values,{ 
            headers: { Authorization: `Bear ${token}` },
        });

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

export const annonceSlice = createSlice({
    name: "annonce",
  
        initialState: {
            isFetching: false,
            errorMessage: '',
            transactStatus : 'none',
            addStatus : 'none',
            errorHappened : false,
            annonce: {}
        },
  
        reducers: {
            clearState: (state) => {
                state.isFetching = false;
                state.errorMessage = '';
                state.transactStatus = 'none'
                state.addStatus = 'none'
                state.annonce = {};
                state.errorHappened = false;

                return state;
            },
        },
  
    extraReducers: {
        [annoncelist.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.annonce = payload;
            return state;
        },
        [annoncelist.rejected]: (state, { payload }) => {
            state.isFetching = true;
            state.errorMessage = payload ? payload.error: '';
        },
        [annoncelist.pending]: (state) => {
            state.isFetching = true;
        },

        [annoncedebit.fulfilled]: (state, { payload }) => {
            state.transactStatus = 'success'
            return state;
        },
        
        [annoncedebit.rejected]: (state, { payload }) => {
            state.errorHappened = true;
            state.errorMessage = payload ? payload.error: '';
            state.transactStatus = 'rejected'
        },
        [annoncedebit.pending]: (state) => {
            state.transactStatus = 'pending'
        },

        [annoncecreate.fulfilled]: (state, { payload }) => {
            state.addStatus = 'success'
            return state;
        },
        
        [annoncecreate.rejected]: (state, { payload }) => {
            state.errorHappened = true;
            state.errorMessage = payload ? payload.error: '';
            state.addStatus = 'rejected'
        },
        [annoncecreate.pending]: (state) => {
            state.addStatus = 'pending'
        },
    },
})
  
export const { clearState } = annonceSlice.actions;
export const annonceSelector = state => state.annonce