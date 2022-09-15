import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GStHelper } from '../utility/APIHelper';
import { request } from '../utility/common';


// <===================register==================>>>


const registration = createAsyncThunk(
  'registration',
  async (data, thunkAPI) => {
      console.log('guestUserRegistration', data);
    const response = await request('post', "/api/users/register-user", data);
    return response.data;
  },
);

// <===================Login==================>>>

const login = createAsyncThunk(
  'login',
  async (data, thunkAPI) => {
      console.log('guestUserLogin', data);
    const response = await request('post', "/api/users/login-user", data);
    return response.data;
  },
);


//<===================get user data by id==================>>>
const getUserDatabyid = createAsyncThunk(
  'getUserDatabyid',
  async (data, thunkAPI) => {
    console.log('resetpasswordresetpassword', data);
    const response = await request('get', '/api/users/all/' + data.id);
    return response.data;
  },
);

//<===================get user all data by id==================>>>
const getalldata = createAsyncThunk(
  'getalldata',
  async (data, thunkAPI) => {
    //console.log('resetpasswordresetpassword', data);
    const response = await request('post', '/api/subscription/showsub',data);
    return response.data;
  },
);


//<===================get user all data by id in query params==================>>>
//https://gstcomman.herokuapp.com/api/subscription/showsub/:id
const getalldatabyid= createAsyncThunk(
  'getalldatabyid',
  async (data, thunkAPI) => {
    //console.log('resetpasswordresetpassword', data);
    const response = await request('get', '/api/subscription/showsub/' + data.id);
    return response.data;
  },
); 



// <===================sendotp==================>>>
//https://gstcomman.herokuapp.com/api/users/email-send
// const sendotp = createAsyncThunk(
//   'sendotp',
//   async (data, thunkAPI) => {
//       //console.log('guestUserLogin', data);
//     const response = await request('post', "/api/users/email-send", data);
//     return response.data;
//   },
// );


// <===================sendotp==================>>>
const sendotp = createAsyncThunk(
  'sendotp',
  async (data, { rejectWithValue }) => {
    try {
      console.log('datdsfsdfa', data);
      let response = await GStHelper.post(
        "/api/users/email-send",
        data,
      );

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

// https://gstcomman.herokuapp.com/api/users/check-otp
// <===================verifyOtp==================>>>

const verifyOtp = createAsyncThunk(
  'verifyOtp',
  async (data, thunkAPI) => {
      //console.log('guestUserLogin', data);
    const response = await request('post', "/api/users/check-otp", data);
    return response.data;
  },
);

// <===================getdatabyuserid==================>>>
//https://gstcomman.herokuapp.com/api/users/show-user
// const getdatabyuserid = createAsyncThunk(
//   'getdatabyuserid',
//   async (data, { rejectWithValue }) => {
//     try {
//       console.log('datdsfsdfa', data);
//       let response = await GStHelper.get(
//         "/api/users/show-user/"+data.userId,
//         data.data,
//       );

//       return response.data;
//       console.log('allll user data#########',response.data);
//     } catch (e) {
//       return rejectWithValue(e.response.data);
//     }
//   },
// );



// <===================resetpassword==================>>>
//https://gstcomman.herokuapp.com/api/users/password-reset

const resetpassword = createAsyncThunk(
  'resetpassword',
  async (data, thunkAPI) => {
      //console.log('guestUserLogin', data);
    const response = await request('post', "/api/users/password-reset", data);
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

// <===================upload Image==================>>>

// const uploadimage = createAsyncThunk(
//   'uploadimage',
//   async (data, thunkAPI) => {
//     const response = await request('post', "/api/contactus/save", data);
//     return response.data;
//   },
// );





const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    userData :{},
    token: null,
    isUserLoggedIn: false,
    productList:{},
    userTokenInfo: {},
    getUserDatabyid:{},
    getuseralldata:{},
    getalldatabyid:{}
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


// <===================register==================>>>



[registration.fulfilled]: (state, action) => {
  //state.productList=action.payload;
  console.log('registrationf ullfilldata',action.payload)
},
[registration.pending]: (state, action) => {
},
[registration.rejected]: (state, action) => {
  console.log('registration Rejected data',action)
},

// <===================product==================>>>


    [product.fulfilled]: (state, action) => {
      state.productList=action.payload;
      console.log('fullfilldata',state.productList)
    },
    [product.pending]: (state, action) => {
    },
    [product.rejected]: (state, action) => {
      console.log('Rejected data',action)
    },

   // <===================get user data by id==================>>>
    [getUserDatabyid.fulfilled]: (state, action) => {
      state.getUserDatabyid=action.payload;
      console.log('state.getUserDatabyid fullfilldata',state.getUserDatabyid)
    },
    
    [getUserDatabyid.rejected]: (state, action) => {
      console.log('state.getUserDatabyid',action)
    },








// <===================login==================>>>


    [login.fulfilled]: (state, action) => {
      state.userData=action.payload;
      console.log('fullfilldata',state.userData)
    },
    [login.pending]: (state, action) => {
    },
    [login.rejected]: (state, action) => {
      console.log('Rejected data',action)
    },

// <=================== Address==================>>>


    [address.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('Address fullfield',action)
    },
    [address.pending]: (state, action) => {
    },
    [address.rejected]: (state, action) => {
      console.log(' Address Rejected',action)
    },

// <===================contact us==================>>>

    [contactus.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('contactus fullfield',action)
    },
    [contactus.pending]: (state, action) => {
    },
    [contactus.rejected]: (state, action) => {
      console.log(' contactus Rejected',action)
    },

   // <===================Extrareducer for sendotp==================>>>

    [sendotp.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('sendotp fullfield',action)
    },
    [sendotp.rejected]: (state, action) => {
      sendotp.log(' sendotp Rejected',action)
    },


     
    
     [verifyOtp.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('verifyOtp fullfield',action)
    },
    [verifyOtp.pending]: (state, action) => {
    },
    [verifyOtp.rejected]: (state, action) => {
      console.log(' verifyOtp Rejected',action)
    },


// <===================verifyOtp for sendotp==================>>>

    [resetpassword.fulfilled]: (state, action) => {
      //state.productList=action.payload;
      console.log('verifyOtp fullfield',action)
    },
    [resetpassword.pending]: (state, action) => {
    },
    [resetpassword.rejected]: (state, action) => {
      console.log(' verifyOtp Rejected',action)
    },



    //<=================== Extarareducer get user all data by id==================>>>
    [getalldata.fulfilled]: (state, action) => {
      state.getuseralldata=action.payload;
      console.log('getalldata fullfield',state.getuseralldata)

    },
    [getalldata.pending]: (state, action) => {
    },
    [getalldata.rejected]: (state, action) => {
      console.log(' getalldata Rejected',action)
    },

    //<=================== Extarareducer get user all data by id in query prams==================>>>

    [getalldatabyid.fulfilled]: (state, action) => {
      state.getalldatabyid=action.payload;
      console.log('getalldatabyidgetalldatabyidgetalldatabyidgetalldatabyid',state.getalldatabyid)
    },
    [getalldatabyid.rejected]: (state, action) => {
      console.log(' getalldatabyidgetalldatabyidgetalldatabyidgetalldatabyid',action)
    },



  //  // <===================upload Image==================>>>
  //  [uploadimage.fulfilled]: (state, action) => {
  //   //state.productList=action.payload;
  //   console.log('uploadimage fullfield',action)
  // },
  // [uploadimage.pending]: (state, action) => {
  // },
  // [uploadimage.rejected]: (state, action) => {
  //   console.log(' uploadimage Rejected',action)
  // },
    
  },
});



export const { userLoginSuccess, userLogoutSuccess , setUserTokenInfo } = loginSlice.actions;
export { product , registration ,getalldatabyid, login , contactus , address,sendotp,verifyOtp,resetpassword,getUserDatabyid,getalldata,};
export default loginSlice.reducer;