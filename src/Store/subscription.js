import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';






const subscription = createAsyncThunk(
    'subscription',
    async (data, thunkAPI) => {
        //console.log('guestUserLogin', data);
        const response = await request('post','/api/subscription/showsub',data);
        return response.data;
    },
);


//https://gstcomman.herokuapp.com/api/subscription

const subSlice = createSlice({
    name: 'subscription',
    initialState: {
       subscription:{} ,  
    },
    reducers: {
    },
    extraReducers: {

        [subscription.fulfilled]: (state, action) => {
            state.subscription=action.payload;
            // console.log('data',state.userList)
            console.log(' =====get subscription sucess======', state.subscription)
        }, 
        [subscription.pending]: (state, action) => {
        },
        [subscription.rejected]: (state, action) => {
            console.log('subscription rejected', action)
        },
    },
});

export const { } = subSlice.actions;
export {subscription};
export default subSlice.reducer;



// https://gstcomman.herokuapp.com/api/subscription/showsub