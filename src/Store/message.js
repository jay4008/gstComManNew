import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';

const postMsg = createAsyncThunk(
    'postMsg',
    async (data, thunkAPI) => {
        console.log('data', data);
        const response = await request('post','/api/message' ,data );
        return response.data;
    },
);

const getMsg = createAsyncThunk(
    'getMsg',
    async (data, thunkAPI) => {
        console.log('data', data);
        const response = await request('post','/api/message/msg' ,data );
        return response.data;
    },
);



const userSlice = createSlice({
    name: 'message',
    initialState: {
       messagesAll : [],
        
    },

    reducers: {
      
    },

    extraReducers: {

        [postMsg.fulfilled]: (state, action) => {
         
    
        }, 
        [postMsg.pending]: (state, action) => {
        },
        [postMsg.rejected]: (state, action) => {
           
        },

        [getMsg.fulfilled]: (state, action) => {
            state.messagesAll=action.payload;
            // console.log('data',state.userList)
            console.log(' ====Message======', action.payload)
        }, 
        [getMsg.pending]: (state, action) => {
        },
        [getMsg.rejected]: (state, action) => {
            console.log('Message rejected', action)
        },
    },
});
export {postMsg , getMsg};
export default userSlice.reducer;