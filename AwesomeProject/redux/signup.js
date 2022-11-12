import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    firstName: ['admin'],
    lastName: ['default'],
    userName: ['admin'],
    email: ['admin@gmail.com'],
    password: ['123'],
    user_id: -1,
  },

  reducers: {
    signInAction: (state, action) => {
      state.user_id = action.payload;
    },

    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value.push(1);
    // },
    // decrement: state => {
    //   state.value.push(-1);
    // },
    signUpAction: (state, action) => {
      state.firstName.push(action.payload[0]);
      state.lastName.push(action.payload[1]);
      state.userName.push(action.payload[2]);
      state.email.push(action.payload[3]);
      state.password.push(action.payload[4]);
    },
  },
});

// Action creators are generated for each case reducer function
export const {signInAction, signUpAction} = counterSlice.actions;

export default counterSlice.reducer;
