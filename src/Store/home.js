import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { request } from '../utility/common';




let initialStateHome = {
    todos: [],
    newData: {},
    comments:[],
    techno: []
}


const HomeTodosApi = createAsyncThunk(
    'HomeTodosApi',
    async (data, thunkAPI) => {
        //   console.log('guestUserLogin', data);
        const response = await request('get', "/todos");
        return response.data;
    },
);



const HomeTodosApi1 = createAsyncThunk(
    'HomeTodosApi1',
    async (data, thunkAPI) => {
        //   console.log('guestUserLogin', data);
        const response = await request('get', "/todos/1");
        return response.data;
    },
);

const commentsApi = createAsyncThunk(
    'commentsApi',
    async (data, thunkAPI) => {
        //   console.log('guestUserLogin', data);
        const response = await request('get', "/posts/1/comments");
        return response.data;
    },
);
const Api2 = createAsyncThunk(
    'Api2',
    async (data, thunkAPI) => {
        //   console.log('guestUserLogin', data);
        const response = await request('get', "/comments?postId=1");
        return response.data;
    },
);




const homeSlice = createSlice({
    name: 'home',
    initialState: initialStateHome,

    reducers: {
          emptyAllData: (state , action) => {
          state.comments = action.payload,
          state.newData= action.payload,
          state.todos = action.payload,
          Alert.alert("all data clear")
          }
    },

    extraReducers: {
        [HomeTodosApi.fulfilled]: (state, action) => {


            state.todos = action.payload;
        },

        [HomeTodosApi.pending]: (state, action) => {

        },

        [HomeTodosApi.rejected]: (state, action) => {
            // Alert.alert("rejected")
        },

        [HomeTodosApi1.fulfilled]: (state, action) => {
            state.newData = action.payload;
        },

        [HomeTodosApi1.pending]: (state, action) => {

        },

        [HomeTodosApi1.rejected]: (state, action) => {
            // Alert.alert("rejected")
        },
        [commentsApi.fulfilled]: (state, action) => {


            state.comments = action.payload;
        },

        [commentsApi.pending]: (state, action) => {

        },

        [commentsApi.rejected]: (state, action) => {
            // Alert.alert("rejected")
        },
        [Api2.fulfilled]: (state, action) => {


            state.techno = action.payload;
        },

        [Api2.pending]: (state, action) => {

        },

        [Api2.rejected]: (state, action) => {
            // Alert.alert("rejected")
        },
    },
});

  export const { emptyAllData } = homeSlice.actions;
export { HomeTodosApi, HomeTodosApi1 ,commentsApi,Api2};
export default homeSlice.reducer;