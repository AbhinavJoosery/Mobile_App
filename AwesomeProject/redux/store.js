import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/signup';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
