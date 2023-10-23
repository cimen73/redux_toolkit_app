
/*
! both reducers
! both actions
! Instead of creating actitonTypes in different files, we will create them in the slice file.

? > Slice Installation:
? > 1- import the createSlice method
? > > Define an object inside:
? > > name : slice name
? > > initialState : initial state
? > > reducers{}: we will define the actions and the effect they will have on the store.

*/
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    // TODO Here we can create multiple reducer functions
    increase: (state, action) => {
      state.counter += 1;
    },
    decrease: (state, action) => {
      state.counter -= 1;
    },
  // has payload value
    setCount: (state, action) => {
      state.counter = action.payload;
    },
  },
});

// Step 2: Exporting the actions in the conterSlice object
export const { increase, decrease, setCount } = counterSlice.actions;

// Step 3: Export the reducer in the counterSlice object
export default counterSlice.reducer;

