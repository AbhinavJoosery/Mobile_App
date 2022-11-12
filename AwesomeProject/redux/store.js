import {configureStore} from '@reduxjs/toolkit';
import registerReducer from '../redux/signup';

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});
