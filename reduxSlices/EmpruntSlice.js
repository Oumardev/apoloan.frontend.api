import apiInstance from "../axios.config";
import { ANNONCE_LIST_URL, ANNONCE_CREATE_URL, ACCOUNT_REFIL_URL, ACCOUNT_DEBIT_URL, PRET_LIST_URL, EMPRUNT_LIST_URL, ACCOUNT_REFOUND, USER_EDIT_URL, USER_GET_URL, EDIT_PASSWORD_URL} from '../URL_API'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const empruntlist = createAsyncThunk(
    'emprunt/list',
    async (thunkAPI) => {
        const token = await AsyncStorage.getItem('token')

    try {
        const response = await apiInstance.get(EMPRUNT_LIST_URL,{ 
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


export const empruntSlice = createSlice({
    name: "emprunt",
  
        initialState: {
            isFetching: false,
            errorMessage: '',
            errorHappened : false,
            emprunt: {}
        },
  
        reducers: {
            clearState: (state) => {
                state.isFetching = false;
                state.errorMessage = '';
                state.emprunt = {};
                state.errorHappened = false;

                return state;
            },
        },
  
    extraReducers: {
        [empruntlist.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.emprunt = payload;
            return state;
        },
        [empruntlist.rejected]: (state, { payload }) => {
            state.isFetching = true;
            state.errorMessage = payload ? payload.error: '';
        },
        [empruntlist.pending]: (state) => {
            state.isFetching = true;
        }
    },
})
  
export const { clearState } = empruntSlice.actions;
export const empruntSelector = state => state.emprunt