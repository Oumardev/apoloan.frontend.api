import apiInstance from "../axios.config";
import { LOGIN_URL, REGISTER_URL, ANNONCE_LIST_URL, ANNONCE_CREATE_URL, ACCOUNT_REFIL_URL, ACCOUNT_DEBIT_URL, PRET_LIST_URL, EMPRUNT_LIST_URL, ACCOUNT_REFOUND, USER_EDIT_URL, USER_GET_URL, EDIT_PASSWORD_URL} from '../URL_API'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk(
    'users/login',
    async (values,thunkAPI) => {
    
    try {
        const response = await apiInstance.post(LOGIN_URL,values);
        let data = response.data
         
        if(response.status === 200){
            AsyncStorage.setItem('token', response.data.token);
            AsyncStorage.setItem('isLogin', String(response.data.isLogin));
            return data;
        } else {
            return thunkAPI.rejectWithValue(data);
        }

    } catch(e){
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
);

export const userget = createAsyncThunk(
    'users/user',
    async (thunkAPI) => {
        const token = await AsyncStorage.getItem('token')

    try {
        const response = await apiInstance.get(USER_GET_URL,{ 
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

export const userSlice = createSlice({
    name: "user",
  
        initialState: {
            token : "",
            errorMessage: '',
            user: {},
            loginSuccess: false,
            errorHappen: false
        },
  
        reducers: {
            clearState: (state) => {
                state.token = "";
                state.errorMessage = "";
                state.loginSuccess = false;
                state.errorHappen = false;
                state.user = {}
                return state;
            },
        },
  
    extraReducers: {
        [login.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.loginSuccess = true;
            state.errorHappen = false
            return state;
        },
        [login.rejected]: (state, { payload }) => {
            state.isFetching = false;
            console.log(payload)
            state.errorHappen = true
            state.errorMessage = payload ? payload.error: '';
        },
        [login.pending]: (state) => {
            state.isFetching = true;
        },

        [userget.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = false;
            console.log(payload)
            state.user = payload;
            return state;
        },
        [userget.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = true
            state.errorMessage = payload ? payload.error: '';
        },
        [userget.pending]: (state) => {
            state.isFetching = true;
        },
    },
})
  
export const { clearState } = userSlice.actions;
export const userSelector = state => state.user