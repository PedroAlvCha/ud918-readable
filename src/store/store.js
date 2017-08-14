import {createStore} from 'redux';
import RootReducer from '../reducers/RootReducer.js';

export default function makeStore() {
  return createStore(RootReducer);
}
