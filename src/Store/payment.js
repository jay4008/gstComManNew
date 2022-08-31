import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';






// <=================== payment==================>>>

const payment = createAsyncThunk(
    'payment',
    async (data, thunkAPI) => {
        console.log("datadatadatadatadatadatadata",data)
      const response = await request('post', "/api/payment", data);
      return response.data;
    },
  );



  const subscription1 = createAsyncThunk(
    'subscription1',
    async (data, thunkAPI) => {
        console.log("datadatadatadatadatadatadata",data)
      const response = await request('post', "/api/subscription/adduser", data);
      return response.data;
    },
  );

  //https://gstcomman.herokuapp.com/api/subscription

const userSlice = createSlice({
    name: 'pay',
    initialState: {
       makepayment:{},
       subscription:{}
        
    },

    reducers: {
      
    },

    extraReducers: {

        [payment.fulfilled]: (state, action) => {
            //state.makepayment=action.payload;
            // console.log('data',state.userList)
            console.log(' ====payment sucess======', action.payload)
        }, 
        [payment.pending]: (state, action) => {
        },
        [payment.rejected]: (state, action) => {
            console.log('payment rejected', action.payload)
        },



        [subscription1.fulfilled]: (state, action) => {
            //state.makepayment=action.payload;
            // console.log('data',state.userList)
            console.log(' ====subscription sucess======', action.payload)
        }, 
        [subscription1.pending]: (state, action) => {
        },
        [subscription1.rejected]: (state, action) => {
            console.log('subscription rejected', action.payload)
        },
    },
});
export {payment,subscription1};
export default userSlice.reducer;