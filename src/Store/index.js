import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import authReducer from './auth';
import homeReducer from './home';
import popupReducer from './popup';
import pdfCreatReducer from './pdfCreat';
import couponReducer from './coupon'
import message from './message'
import subscriptionReducer from './subscription'

const middlewareState = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  popup: popupReducer,
  pdfCreat: pdfCreatReducer,
  coupon:couponReducer,
  message :message,
  subscription:subscriptionReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth',"pdfCreat" ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  //middlewareState,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

let persistor = persistStore(store);

export default store;
export {persistor};
