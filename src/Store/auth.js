import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';



const registration = createAsyncThunk(
  'registration',
  async (data, thunkAPI) => {
      console.log('guestUserRegistration', data);
    const response = await request('post', "/api/auth/register", data);
    return response.data;
  },
);

const login = createAsyncThunk(
  'login',
  async (data, thunkAPI) => {
      console.log('guestUserLogin', data);
    const response = await request('post', "/api/auth/login", data);
    return response.data;
  },
);

const product = createAsyncThunk(
  'product',
  async (data, thunkAPI) => {
      console.log('guestUserLogin', data);
    const response = await request('post', "/api/products/register", data);
    return response.data;
  },
);



const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLogedin: false,
  },

  reducers: {
    userLoginSuccess: (state) => {
      state.isUserLoggedIn = true;
      state.token = "gfh"
    },

    userLogoutSuccess: (state) => {
      state.isUserLoggedIn = false;
      state.token = null;
    },

  },

  extraReducers: {


    [product.fulfilled]: (state, action) => {
    },
    [product.pending]: (state, action) => {
    },
    [product.rejected]: (state, action) => {
    },
  },
});

export const { userLoginSuccess, userLogoutSuccess } = loginSlice.actions;
export { registration,login,product};
export default loginSlice.reducer;