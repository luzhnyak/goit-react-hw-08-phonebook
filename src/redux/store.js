import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';

import { persistedReducer } from './authSlice';
import { api } from './api';
import { modalReducer } from './modalSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    filter: filterReducer,
    openModal: modalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
