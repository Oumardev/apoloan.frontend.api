import apiInstance from "../axios.config";
import { PROPOSITION_LIST_URL } from '../URL_API'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const listproposition = createAsyncThunk(
    'proposition/list',
    async (values,thunkAPI) => {
        const token = await AsyncStorage.getItem('token')
    try {
        const response = await apiInstance.post(PROPOSITION_LIST_URL,values,{ 
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

export const propositionSlice = createSlice({
    name: "proposition",
  
        initialState: {
            isFetching : false,
            errorHappen : false,
            errorMessage : '',
            proposition: {}
        },
  
        reducers: {
            clearState: (state) => {
                state.isFetching = false;
                state.errorHappen = false;
                state.errorMessage = '';
                state.proposition = {};

                return state;
            }
        },
  
    extraReducers: {
        [listproposition.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = false
            state.proposition = payload;
            return state;
        },
        [listproposition.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.errorHappen = true;
            state.errorMessage = payload ? payload.error: '';
        },
        [listproposition.pending]: (state) => {
            state.isFetching = true;
        },
    },
})
  
export const { clearState } = propositionSlice.actions;
export const propositionSelector = state => state.proposition