import * as contentAPIutil from '../utils/contentAPI.js';

export const COMMENT_EDIT = 'COMMENT_EDIT'
export const COMMENT_DELETE = 'COMMENT_DELETE'
export const COMMENT_CREATE = 'COMMENT_CREATE'
export const COMMENT_VOTE = 'COMMENT_VOTE'
export const COMMENT_LIST_SET = 'COMMENT_LIST_SET'

export function commentCreate ({ id, timestamp, body, author, parentId }) {
  return {
    type: COMMENT_CREATE,
    id,
    timestamp,
    body,
    author,
    parentId,
  }
}

export function fetchCommentList(postID){
  const request = contentAPIutil.commentsGetForPost(postID);

  return (dispatch) => {
    request.then(function(result) {
      if(result == null){
        let emptyCommentList = {}
        dispatch({type: 'COMMENT_LIST_SET', payload: emptyCommentList })
      } else {
        dispatch({type: 'COMMENT_LIST_SET', payload: result })
      }
    });
  }
};

export function commentDelete ({ id }) {
  return {
    type: COMMENT_DELETE,
    id,
  }
}

export function commentVote ({ id, voteType }) {
  return {
    type: COMMENT_VOTE,
    id,
    voteType,
  }
}

export function commentEdit ({ id, timestamp, body, author, parentId }) {
  return {
    type: COMMENT_EDIT,
    id,
    timestamp,
    body,
    author,
    parentId,
  }
}
