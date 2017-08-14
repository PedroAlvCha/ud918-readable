import  {
          POST_DELETE,
          POST_CREATE,
          POST_VOTE,
          POST_EDIT,
        } from '../actions/post_actions.js'


const initialPostListState = {
    postList: [],
}

export function postManager (state = initialPostListState, action) {

  switch (action.type) {
    case POST_EDIT :
      return state
    case POST_DELETE :
      return state
    case POST_CREATE :
      return state
    case POST_VOTE :
      return state
    default :
      return state
  }
}
