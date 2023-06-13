import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksSlice';
import { filtersReducer } from './filters/filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
