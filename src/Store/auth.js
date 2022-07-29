import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';



// const registration = createAsyncThunk(
//   'registration',
//   async (data, thunkAPI) => {
//       console.log('guestUserRegistration', data);
//     const response = await request('post', "/api/auth/register", data);
//     return response.data;
//   },
// );

// const login = createAsyncThunk(
//   'login',
//   async (data, thunkAPI) => {
//       console.log('guestUserLogin', data);
//     const response = await request('post', "/api/users/login-user", data);
//     return response.data;
//   },
// );

const product = createAsyncThunk(
  'product',
  async (data, thunkAPI) => {
      // console.log('guestUserLogin', data);
    const response = await request('get', "/api/products/");
    return response.data;
  },
);



const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isUserLoggedIn: false,
    productList:{}
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
      state.productList=action.payload;
      console.log('fullfilldata',state.productList)
    },
    [product.pending]: (state, action) => {
    },
    [product.rejected]: (state, action) => {
      console.log('Rejected data',action)
    },
  },
});

export const { userLoginSuccess, userLogoutSuccess } = loginSlice.actions;
export { product};
export default loginSlice.reducer;