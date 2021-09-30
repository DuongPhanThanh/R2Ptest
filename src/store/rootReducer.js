import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/slice';

export const rootReducer = combineReducers({
  userReducer,
});
