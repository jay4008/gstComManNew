import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {request} from '../utility/common';

const postMsg = createAsyncThunk('postMsg', async (data, thunkAPI) => {
  console.log('data', data);
  const response = await request('post', '/api/message', data);
  return response.data;
});

const updateMsg = createAsyncThunk('updateMsg', async (data, thunkAPI) => {
  console.log('data', data);
  const response = await request('put', '/api/message/' + data.id, data.data);
  return response.data;
});

const singleMsg = createAsyncThunk('singleMsg', async (data, thunkAPI) => {
  console.log('data', data);
  const response = await request('get', '/api/message/message/' + data.id);
  return response.data;
});

const getMsg = createAsyncThunk('getMsg', async (data, thunkAPI) => {
  console.log('data', data);
  const response = await request('post', '/api/message/msg', data);
  return response.data;
});

const userSlice = createSlice({
  name: 'message',
  initialState: {
    messagesAll: [],
  },

  reducers: {},

  extraReducers: {
    [postMsg.fulfilled]: (state, action) => {},
    [postMsg.rejected]: (state, action) => {},

    [getMsg.fulfilled]: (state, action) => {
      state.messagesAll = action.payload;
      // console.log('data',state.userList)
      console.log(' ====Message======', action.payload);
    },

    [getMsg.rejected]: (state, action) => {
      console.log('Message rejected', action);
    },

    [updateMsg.fulfilled]: (state, action) => {
      console.log('====================================');
      console.log('actionactionactionaction', action.payload);
      console.log('====================================');
    },
    [updateMsg.rejected]: (state, action) => {
      console.log('Message rejected', action);
    },
  },
});
export {postMsg, getMsg, updateMsg, singleMsg};
export default userSlice.reducer;
