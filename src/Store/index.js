import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from './auth';
import homeReducer from './home';
import popupReducer from './popup';

const middlewareState = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  popup: popupReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth']
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
export { persistor };