import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';






const getCoupon = createAsyncThunk(
    'getCoupon',
    async (data, thunkAPI) => {
        console.log('guestUserLogin', data);
        const response = await request('get','/api/coupon/coupon' );
        return response.data;
    },
);


const userSlice = createSlice({
    name: 'coupon',
    initialState: {
       getCoupon:{} 
        
    },

    reducers: {
      
    },

    extraReducers: {

        [getCoupon.fulfilled]: (state, action) => {
            state.getCoupon=action.payload;
            console.log(' ====get coupon sucess======', state.getCoupon)
        }, 
        [getCoupon.pending]: (state, action) => {
        },
        [getCoupon.rejected]: (state, action) => {
            console.log('rget coupon rejected', action)
        },
    },
});

export const { userLoginSuccess, userLogoutSuccess } = userSlice.actions;
export {getCoupon};
export default userSlice.reducer;