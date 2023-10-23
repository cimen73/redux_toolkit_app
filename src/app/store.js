import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import crudReducer from './crudSlice';

export const store = configureStore({
  reducer: {
// we will define reducers
    counterReducer,
    crudReducer,
  },
});

// 1 - Define an object as a configurestore parameter and a reducers object inside it