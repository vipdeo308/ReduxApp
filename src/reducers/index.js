// src/reducers/index.js
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  // Other reducers...
});

export default rootReducer;
