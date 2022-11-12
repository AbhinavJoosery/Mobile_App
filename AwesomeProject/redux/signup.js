import {createSlice} from '@reduxjs/toolkit';

export const registerSlice = createSlice({
  name: 'register',
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
export const {signInAction, signUpAction} = registerSlice.actions;

export default registerSlice.reducer;
