import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { Colors } from '../assets/common/common';
import { request } from '../utility/common';





const Slice = createSlice({
    name: 'popUp',
    initialState: {
        messagePop: false,
        //messagePopUpActions  
        headerText: "",
        headerColor: "",
        desc: "",
        butnTxt: "",
        btnBackgroundColor: "",

        //ToastWork

        message : "",



        //textInputActions 
       
        textInput: false,
        headerText:"",
        cancelButtonText:"Cancel",
        continueButtonText:"Continue",

        textInputFuctionType: null,
           //successFailureActions 
           successFailure: false,
    },

    reducers: {
        messagePopUpActions: (state, action) => {
            state.messagePop = true;
            state.headerText = (action.payload.headerText !== "" || action.payload.headerText !== undefined) ? action.payload.headerText : "Welcome TO  GSTCOMMAN";
            state.headerColor = action?.payload?.headerColor ? action.payload.headerColor : Colors.primaryColor;
            state.desc = action.payload.desc;

            state.butnTxt = action.payload.butnTxt,
                state.btnBackgroundColor = action?.payload?.btnBackgroundColor ? action.payload.btnBackgroundColor : Colors.primaryColor;
        },
        setToastMsgToNUll:(state, action) =>{
            state.message = "";
        },

        setToastMsg:(state, action) =>{
            state.message = action.payload;
        },
        inputPopupAction: (state, action) => {
            state.textInput = true;
            state.headerText =action?.payload?.headerText ? action.payload.headerText : "Welcome TO  GSTCOMMAN";
            state.cancelButtonText = action?.payload?.cancelButtonText ? action.payload.cancelButtonText : "Cancel";
            state.continueButtonText = action?.payload?.continueButtonText ? action.payload.continueButtonText : "Continue";
                state.textInputFuctionType = action?.payload?.textInputFuctionType
        },


        inputPopupClose: (state, action) => {
            state.textInput = false;
            state.headerText ="";
            state.cancelButtonText = "";
            state.continueButtonText = "";
                state.textInputFuctionType = "";
        },


        messagePopUpClose: (state) => {
            state.messagePop = false;
            state.headerText = "";
            state.headerColor = "";
            state.desc = ``;

            state.butnTxt = "",
                state.btnBackgroundColor = "";
        },
    },

    extraReducers: {
    },
});

export const { setToastMsgToNUll ,setToastMsg ,  messagePopUpActions, messagePopUpClose,inputPopupAction  , inputPopupClose} = Slice.actions;
export default Slice.reducer;