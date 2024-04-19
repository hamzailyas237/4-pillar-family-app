// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import authReducer from "../slices";

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['userInfo', 'token']
// };
// const persistedReducer = persistReducer(persistConfig, authReducer);
// export const store = configureStore({
//   reducer: persistedReducer,
// });
// export const persistor = persistStore(store);

import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from '../slices';
import pointsReducer from '../slices/PointsAndStreaksSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userInfo', 'token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    points: pointsReducer,
  },
});
export const persistor = persistStore(store);
