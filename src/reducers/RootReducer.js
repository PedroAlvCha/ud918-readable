import { combineReducers } from 'redux';
import { commentManager } from './comment_reducer.js';
import { postManager } from './post_reducer.js';
import { categoryManager } from './categories_reducer.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  postManager,
  commentManager,
  categoryManager,
  formReducer,
});

export {rootReducer};
