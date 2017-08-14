import { combineReducers } from 'redux';
import commentManager from './comment_reducer';
import postManager from './post_reducer';
import categryManager from './categories_reducer';

const rootReducer = combineReducers({
  postManager,
  commentManager,
  categryManager,
});

export default rootReducer;
