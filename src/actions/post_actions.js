import * as contentAPIutil from '../utils/contentAPI.js';
import keyIndex from 'react-key-index';

export const POST_EDIT = 'POST_EDIT'
export const POST_DELETE = 'POST_DELETE'
export const POST_CREATE = 'POST_CREATE'
export const POST_VOTE = 'POST_VOTE'
export const POST_LIST_SET = 'POST_LIST_SET';


export function postCreate ({ id, timestamp, title, body, author, category }) {
  return {
    type: POST_CREATE,
    id,
    timestamp,
    title,
    body,
    author,
    category,
  }
}

export function postDelete ({ id }) {
  return {
    type: POST_DELETE,
    id,
  }
}

export function postVote ({ id, voteType }) {
  return {
    type: POST_VOTE,
    id,
    voteType,
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
const postListSet = postListToSet => ({
  type:POST_LIST_SET,
  postListToSet,
});

export function fetchPostList(){
  const request = contentAPIutil.postsGet();
  return (dispatch) => {
    request.then(function(result) {
      if(result == null){
        let emptyArray = []
        dispatch({type: 'POST_LIST_SET', payload: emptyArray })
      } else {
        dispatch({type: 'POST_LIST_SET', payload: keyIndex(result,1) })
      }
    });
  }
};
