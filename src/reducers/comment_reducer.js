import { * } from '../actions/comment_actions.js'

const initialCommentListState = {
  commentList: [],
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
    default :
      return state
  }
}
