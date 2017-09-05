import  {
          COMMENT_EDIT,
          COMMENT_CREATE,
          COMMENT_VOTE,
          COMMENT_DELETE,
          COMMENT_LIST_SET,
        } from '../actions/comment_actions.js'

const initialCommentListState = {
  commentList: [],
  commentListOrderBy: 'timestamp',
  commentListOrderAscDesc: 'desc',
}

export function commentManager (state = initialCommentListState, action) {

  switch (action.type) {
    case COMMENT_EDIT :
      return state
    case COMMENT_DELETE :
      return state
    case COMMENT_CREATE :
      return state
    case COMMENT_VOTE :
      return state
  case COMMENT_LIST_SET :
    const commentListToOverWrite = action.payload
    return {
      ...state,
      postList:commentListToOverWrite,
    }
    default :
      return state
  }
}
