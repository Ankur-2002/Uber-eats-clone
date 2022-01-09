import { combineReducers } from 'redux';
import { Reducer } from './Cart';

export const Reducers = combineReducers({
  cart: Reducer,
});
