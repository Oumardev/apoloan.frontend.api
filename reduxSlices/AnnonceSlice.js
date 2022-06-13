import apiInstance from "../axios.config";
import { ANNONCE_LIST_URL, ANNONCE_CREATE_URL, ACCOUNT_DEBIT_URL, ACCOUNT_REFOUND, POST_LIST_URL, ANNONCE_EDIT_URL, ANNONCE_DELETE_URL, TO_PROPOSE_URL} from '../URL_API'
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

export const annonceedit = createAsyncThunk(
    'annonce/edit',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')

    try {
        const response = await apiInstance.patch(ANNONCE_EDIT_URL,values,{ 
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

export const annoncedelete = createAsyncThunk(
    'annonce/delete',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')

    try {
        const response = await apiInstance.delete(ANNONCE_DELETE_URL,{ 
            headers: { Authorization: `Bear ${token}` },
            data: values
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

export const postlist = createAsyncThunk(
    'post/list',
    async (thunkAPI) => {
        const token = await AsyncStorage.getItem('token')

    try {
        const response = await apiInstance.get(POST_LIST_URL,{ 
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

export const topropose = createAsyncThunk(
    'proposition/topropose',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')

    try {
        const response = await apiInstance.post(TO_PROPOSE_URL,values,{ 
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

export const annoncerefund = createAsyncThunk(
    'annonce/refund',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')
    
    try {
        const response = await apiInstance.post(ACCOUNT_REFOUND,values,{ 
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
            errorsignMsg: null,
            hideModal : false,
            errorMessage: '',
            transactStatus : 'none',
            addStatus : 'none',
            isEdited : false,
            successMsg : '',
            errorHappened : false,
            annonce: {},
            post : {}
        },
  
        reducers: {
            clearState: (state) => {
                state.isFetching = false;
                state.isEdited = false;
                state.hideModal = false;
                state.errorMessage = '';
                state.successMsg = '';
                state.transactStatus = 'none'
                state.addStatus = 'none'
                state.errorHappened = false;
                state.errorsignMsg = null;

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

        [annoncerefund.fulfilled]: (state, { payload }) => {
            state.transactStatus = 'success'
            return state;
        },
        
        [annoncerefund.rejected]: (state, { payload }) => {
            state.errorHappened = true;
            state.errorMessage = payload ? payload.error: '';
            state.transactStatus = 'rejected'
        },
        [annoncerefund.pending]: (state) => {
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

        [annonceedit.fulfilled]: (state, { payload }) => {
            state.isEdited = true
            return state;
        },
        
        [annonceedit.rejected]: (state, { payload }) => {
            state.errorHappened = true;
            state.errorMessage = payload ? payload.error: '';
            state.addStatus = 'rejected'
        },
        [annonceedit.pending]: (state) => {
            state.addStatus = 'pending'
        },

        [annoncedelete.fulfilled]: (state, { payload }) => {
            state.isEdited = true
            return state;
        },
        
        [annoncedelete.rejected]: (state, { payload }) => {
            state.errorHappened = true;
            state.errorMessage = payload ? payload.error: '';
            state.addStatus = 'rejected'
        },
        [annoncedelete.pending]: (state) => {
            state.addStatus = 'pending'
        },

        [topropose.fulfilled]: (state, { payload }) => {
            state.successMsg = payload.success
            state.hideModal = true;
            return state;
        },
        
        [topropose.rejected]: (state, { payload }) => {
            state.errorHappened = true;
            state.hideModal = false;

            if(payload.errorsign)
                state.errorsignMsg = payload ? payload.errorsign: '';

            state.errorMessage = payload ? payload.error: '';
            state.addStatus = 'rejected'
        },
        [topropose.pending]: (state) => {
            state.addStatus = 'pending'
        },

        [postlist.fulfilled]: (state, { payload }) => {
            state.post = payload
            return state;
        },
        
        [postlist.rejected]: (state, { payload }) => {
            state.errorHappened = true;
            state.errorMessage = payload ? payload.error: '';
            state.addStatus = 'rejected'
        },
        [postlist.pending]: (state) => {
            state.addStatus = 'pending'
        },
    },
})
  
export const { clearState } = annonceSlice.actions;
export const annonceSelector = state => state.annonce