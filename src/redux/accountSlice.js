import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 100,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const accountReducer = accountSlice.reducer;
export const { deposit, withdraw } = accountSlice.actions;
