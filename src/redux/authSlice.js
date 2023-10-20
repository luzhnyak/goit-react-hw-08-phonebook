import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const authInitialState = {
  isLoggedIn: false,
  isRefreshing: true,
  token: '',
  name: '',
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setCredentials(state, action) {
      return (state = { ...state, ...action.payload });
    },
  },
});

const authReducer = authSlice.reducer;

export const persistedReducer = persistReducer(persistConfig, authReducer);
export const { setCredentials } = authSlice.actions;
