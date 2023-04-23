import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { request } from '../utility/common';




let initialStateHome = {
    todos: [],
    newData: {},
    comments: [],
    techno: []
}


const HomeTodosApi = createAsyncThunk(
    'HomeTodosApi',
    async (data, thunkAPI) => {
        console.log('data', data);
        const response = await request('get', "/todos",);
        return response.data;
    },
);


const Koushik = createAsyncThunk(
    'Koushik',
    async (data, thunkAPI) => {
        console.log('data', data);
        const response = await request('get', "/todos",);
        return response.data;
    },
);



const HomeTodosApi1 = createAsyncThunk(
    'HomeTodosApi1',
    async (data, thunkAPI) => {
        //   console.log('guestUserLogin', data);
        const response = await request('post', "/api/auth/register", data);
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
        emptyAllData: (state, action) => {
            state.comments = action.payload,
                state.newData = action.payload,
                state.todos = action.payload,
                Alert.alert("all data clear")
        }
    },

    extraReducers: {



        [Koushik.fulfilled]: (state, action) => {

            console.log("Koushik   action.payload", action.payload);
            state.todos = action.payload;
        },

       

        [Koushik.rejected]: (state, action) => {
            // Alert.alert("rejected")
        },
    }
});

export const { emptyAllData } = homeSlice.actions;
export { HomeTodosApi, HomeTodosApi1, Koushik, commentsApi, Api2 };
export default homeSlice.reducer;