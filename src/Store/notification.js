import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';




//https://gstcomman.herokuapp.com/api/notification/notify

const getNotification = createAsyncThunk(
    'getNotification',
    async (data, thunkAPI) => {
        console.log('guestUserLogin', data);
        const response = await request('get','/api/notification/notify');
        return response.data;
    },
);


const userSlice = createSlice({
    name: 'notification',
    initialState: {
       getnotification:{} 
        
    },

    reducers: {
      
    },

    extraReducers: {

        [getNotification.fulfilled]: (state, action) => {
            state.getNotification=action.payload;
            console.log(' ====getNotification sucess======', state.getNotification)
        }, 
        
        [getNotification.rejected]: (state, action) => {
            console.log('rget coupon rejected', action)
        },
    },
});

//export const { userLoginSuccess, userLogoutSuccess } = userSlice.actions;
export {getNotification};
export default userSlice.reducer;