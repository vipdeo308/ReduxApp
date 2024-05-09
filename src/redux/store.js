// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const store = configureStore({
  reducer: rootReducer,
  // Add any other middleware or enhancers here
});

export default store;
