import { combineReducers } from 'redux';
import comment from './comment_reducer';
import post from './post_reducer';

const rootReducer = combineReducers({
  food,
  calendar,
});

export default rootReducer;
