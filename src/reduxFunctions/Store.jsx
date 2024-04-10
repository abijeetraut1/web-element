// store.js
import { configureStore } from '@reduxjs/toolkit';
import combineReducers from './combineReducers/combineReducers';

const store = configureStore({
  reducer: combineReducers,
});

export default store;
