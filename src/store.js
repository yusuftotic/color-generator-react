import { configureStore } from "@reduxjs/toolkit";

import colorReducer from './slices/colorSlice';

const store = configureStore({
  reducer: {
    color: colorReducer
  },
  devTools: true
});

export default store;