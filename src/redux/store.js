import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { songsReducer } from './songs';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
