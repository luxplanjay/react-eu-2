import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountSlice';
import { profileReducer } from './profileSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    profile: profileReducer,
  },
});
