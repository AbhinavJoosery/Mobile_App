import {createSlice} from '@reduxjs/toolkit';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user_login: '',
  },

  reducers: {
    signInAction: (state, action) => {
      state.user_login = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {signInAction} = registerSlice.actions;

export default registerSlice.reducer;
