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

export const register = createAsyncThunk(
    'users/login',
    async (values,thunkAPI) => {
    
    try {
        const response = await apiInstance.post(REGISTER_URL,values);
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

export const useredit = createAsyncThunk(
    'users/edit',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')

    try {
        const response = await apiInstance.patch(USER_EDIT_URL,values,{ 
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

export const userpassword = createAsyncThunk(
    'users/password',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')
    try {
        const response = await apiInstance.patch(EDIT_PASSWORD_URL,values,{ 
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

export const refil = createAsyncThunk(
    'users/refil',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')
    try {
        const response = await apiInstance.post(ACCOUNT_REFIL_URL,values,{ 
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
            errorHappen: false,
            isRegister : false,
            edited : false,
            pwdedited: false,
            refiled: false
        },
  
        reducers: {
            clearState: (state) => {
                state.token = "";
                state.errorMessage = "";
                state.loginSuccess = false;
                state.errorHappen = false;
                state.edited = false;
                state.pwdedited = false;
                state.refiled = false;
                state.user = {};
                state.isRegister = false

                return state;
            }
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
            state.errorHappen = true
            state.errorMessage = payload ? payload.error: '';
        },
        [login.pending]: (state) => {
            state.isFetching = true;
        },

        [register.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isRegister = true;
            state.errorHappen = false
            return state;
        },
        [register.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = true
            state.errorMessage = payload ? payload.error: '';
            state.isRegister = false;
        },
        [register.pending]: (state) => {
            state.isFetching = true;
        },

        [userget.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = false;
            state.user = payload;
            return state;
        },
        [userget.rejected]: (state, { payload }) => {
            state.isFetching = true;
            state.errorHappen = true
            state.errorMessage = payload ? payload.error: '';
        },
        [userget.pending]: (state) => {
            state.isFetching = true;
        },

        [useredit.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.edited = true;
            return state;
        },
        [useredit.rejected]: (state, { payload }) => {
            state.isFetching = true;
            state.errorHappen = true;
            state.edited = false;
            state.errorMessage = payload ? payload.error: '';
        },
        [useredit.pending]: (state) => {
            state.isFetching = true;
        },

        [userpassword.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.pwdedited = true;
            return state;
        },
        [userpassword.rejected]: (state, { payload }) => {
            state.isFetching = true;
            state.pwdedited = false;
            state.errorMessage = payload ? payload.error: '';
        },
        [userpassword.pending]: (state) => {
            state.isFetching = true;
        },

        [refil.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.refiled = true;
            return state;
        },
        [refil.rejected]: (state, { payload }) => {
            state.isFetching = true;
            state.refiled = false;
            state.errorMessage = payload ? payload.error: '';
        },
        [refil.pending]: (state) => {
            state.isFetching = true;
        },
    },
})
  
export const { clearState } = userSlice.actions;
export const userSelector = state => state.user