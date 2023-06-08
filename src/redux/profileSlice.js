import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locale: 'uk',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeLang(state, action) {
      state.locale = action.payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { changeLang } = profileSlice.actions;
