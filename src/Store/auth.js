import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';


// <===================register==================>>>

<<<<<<< HEAD
=======

>>>>>>> d39723e4e953aa86fdf20d429db432a2b9a4ff61
const registration = createAsyncThunk(
  'registration',
  async (data, thunkAPI) => {
      console.log('guestUserRegistration', data);
    const response = await request('post', "/api/users/register-user", data);
    return response.data;
  },
);

<<<<<<< HEAD
=======
// <===================Login==================>>>

>>>>>>> d39723e4e953aa86fdf20d429db432a2b9a4ff61
const login = createAsyncThunk(
  'login',
  async (data, thunkAPI) => {
      console.log('guestUserLogin', data);
    const response = await request('post', "/api/users/login-user", data);
    return response.data;
  },
);

// <===================product==================>>>

const product = createAsyncThunk(
  'product',
  async (data, thunkAPI) => {
    const response = await request('get', "/api/products/");
    return response.data;
  },
);

// <===================Address==================>>>

const address = createAsyncThunk(
  'address',
  async (data, thunkAPI) => {
      // console.log('guestUserLogin', data);
    const response = await request('post', "/api/userinfo", data);
    return response.data;
  },
);


// <===================contact us==================>>>

const contactus = createAsyncThunk(
  'contactus',
  async (data, thunkAPI) => {
    const response = await request('post', "/api/contactus/save", data);
    return response.data;
  },
);



const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    userData :{},
    token: null,
    isUserLoggedIn: false,
    productList:{},
    userTokenInfo: {}
  },

  reducers: {
    userLoginSuccess: (state) => {
      state.isUserLoggedIn = true;
      state.token = "gfh"
    },


    setUserTokenInfo: (state , action) => {
      state.userTokenInfo = action.payload;
     
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

    [login.fulfilled]: (state, action) => {
      state.userData=action.payload;
      console.log('fullfilldata',state.productList)
    },
    [login.pending]: (state, action) => {
    },
    [login.rejected]: (state, action) => {
      console.log('Rejected data',action)
    }
    [address.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('Address fullfield',action)
    },
    [address.pending]: (state, action) => {
    },
    [address.rejected]: (state, action) => {
      console.log(' Address Rejected',action)
    },


    [contactus.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('contactus fullfield',action)
    },
    [contactus.pending]: (state, action) => {
    },
    [contactus.rejected]: (state, action) => {
      console.log(' contactus Rejected',action)
    },
  },
});

export const { userLoginSuccess, userLogoutSuccess , setUserTokenInfo } = loginSlice.actions;
export { product , registration , login , contactus , address};
export default loginSlice.reducer;