import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const Slice = createSlice({
  name: 'pdfCreat',
  initialState: {
    pdfArray: [],
    pdfDocumentArr: [],
  },
  reducers: {
    setNewPdf: (state, action) => {
      state.pdfArray.push(action.payload);
    },
    addImageToDocumentList: (state, action) => {
      for (let index = 0; index < state.pdfArray.length; index++) {
        if (state.pdfArray[index].time === action.payload.time) {
          state.pdfArray[index].ImageArr = action.payload.ImageArr;
        }
      }
    },
    deleteCollection: (state, action) => {
      state.pdfArray.splice(action.payload, 1);
    },

    deleteCollectionPdf: (state, action) => {
      state.pdfDocumentArr.splice(action.payload, 1);
    },
    pdfDocumentSet: (state, action) => {
      if(state.pdfDocumentArr?.length === 0 || state.pdfDocumentArr?.length === undefined || state.pdfDocumentArr?.length ===null){
        state.pdfDocumentArr = [];
        state.pdfDocumentArr.push(action.payload);
        console.log("created")
      }else{
        state.pdfDocumentArr.push(action.payload);
      }
     
    },
  },
  extraReducers: {},
});

export const {setNewPdf,deleteCollectionPdf, addImageToDocumentList, deleteCollection , pdfDocumentSet} =
  Slice.actions;
export default Slice.reducer;
