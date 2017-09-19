import * as contentAPIutil from '../utils/contentAPI.js';
import uuidv4 from 'uuid/v4';

export const POST_EDIT = 'POST_EDIT'
export const POST_DELETE = 'POST_DELETE'
export const POST_VOTE_UP = 'POST_VOTE_UP'
export const POST_VOTE_DOWN = 'POST_VOTE_DOWN'
export const POST_LIST_SET = 'POST_LIST_SET'
export const POST_LIST_SET_AND_NEW_POST_MODAL_CLOSE = 'POST_LIST_SET_AND_NEW_POST_MODAL_CLOSE'
export const POST_LIST_CHANGE_SORT_VARIABLE = 'POST_LIST_CHANGE_SORT_VARIABLE'
export const POST_LIST_CHANGE_SORT_ASCDESC = 'POST_LIST_CHANGE_SORT_ASCDESC';
export const NEW_POST_MODAL_OPEN = 'NEW_POST_MODAL_OPEN'
export const NEW_POST_MODAL_CLOSE = 'NEW_POST_MODAL_CLOSE'

export function newPostFormSubmit(values){
  const post = {...values}
  post.timestamp = Date.now()
  post.id = uuidv4()
  post.voteScore = 0

  const request = contentAPIutil.postAddNew(post);
  return (dispatch) => {
    request.then(function(result) {
      dispatch({type: 'POST_LIST_SET_AND_NEW_POST_MODAL_CLOSE', post: post })
    });
  }
}

export function postDelete ({ id }) {
  return {
    type: POST_DELETE,
    id,
  }
}
export function newPostModalOpen () {
  return {
    type: NEW_POST_MODAL_OPEN,
  }
}
export function newPostModalClose () {
  return {
    type: NEW_POST_MODAL_CLOSE,
  }
}

export function postEdit ({ id, timestamp, title, body, author, category }) {
  return {
    type: POST_EDIT,
    id,
    timestamp,
    title,
    body,
    author,
    category,
  }
}
export function postListSet(postListToSet){
  return{
    type:POST_LIST_SET,
    postListToSet,
  }
};

export function fetchPostList(){
  const request = contentAPIutil.postsGet();

  return (dispatch) => {
    request.then(function(result) {
      if(result == null){
        let emptyPostList = {}
        dispatch({type: 'POST_LIST_SET', payload: emptyPostList })
      } else {
        dispatch({type: 'POST_LIST_SET', payload: result })
      }
    });
  }
};

export function postVoteDown ( id ) {
  const request = contentAPIutil.postVoteDown(id);

  return (dispatch) => {
    request.then(function(result) {
      dispatch({type: 'POST_VOTE_DOWN', payload: id })
    });
  }
};



export function postVoteUp ( id ) {
  const request = contentAPIutil.postVoteUp(id);
  return (dispatch) => {
    request.then(function(result) {
      dispatch({type: 'POST_VOTE_UP', payload: id })
    });
  }
};

export function postListChangeSort_AscDesc ( sortDirection ) {
  return {
    type: POST_LIST_CHANGE_SORT_ASCDESC,
    sortDirection,
  }
};

export function postListChangeSort_Variable ( sortVariable ) {
  return {
    type: POST_LIST_CHANGE_SORT_VARIABLE,
    sortVariable,
  }
};
