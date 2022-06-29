import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utility/common';





const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLogedin: false,
  },

  reducers: {
    userLoginSuccess: (state) => {
      state.isUserLoggedIn = true;
      state.token = "gfhgjfjhfgjhgjhgjhgjhghjg"
    },

    userLogoutSuccess: (state) => {
        state.isUserLoggedIn = false;
        state.token = null;
      },

  },

  extraReducers: {
  },
});

export const { userLoginSuccess  , userLogoutSuccess} = loginSlice.actions;
// export { };
export default loginSlice.reducer;