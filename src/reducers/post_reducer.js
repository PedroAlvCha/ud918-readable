import  {
          POST_DELETE,
          POST_CREATE,
          POST_VOTE_UP,
          POST_VOTE_DOWN,
          POST_EDIT,
          POST_LIST_SET,
          POST_LIST_CHANGE_SORT_ASCDESC,
          POST_LIST_CHANGE_SORT_VARIABLE,
        } from '../actions/post_actions.js'


const initialPostListState = {
    postList: {},
    postListOrderBy: 'timestamp',
    postListOrderAscDesc: 'desc',
}

export function postManager (state = initialPostListState, action) {

  const postManagerPointer = 'postManager'
  const postListPointer = 'postList'
  const voteScorePointer = 'voteScore'
  const postListOrderAscDescPointer = 'postListOrderAscDesc'
  var postIds
  var postPositionInArray

  switch (action.type) {
    case POST_LIST_CHANGE_SORT_VARIABLE :
      return {
          ...state,
          postListOrderBy:action.sortVariable,
      }
    case POST_LIST_CHANGE_SORT_ASCDESC :
      return {
          ...state,
          postListOrderAscDesc:action.sortDirection,
      }
    case POST_EDIT :
      return state
    case POST_DELETE :
      return state
    case POST_CREATE :
      return state
    case POST_VOTE_UP :
      postIds = action.payload
      postPositionInArray = state.postList.findIndex(x => x.id === postIds)
      return {
        ...state,
        [postListPointer]: {
          ...state[postListPointer],
          [postPositionInArray]:{
            ...state[postListPointer][postPositionInArray],
            [voteScorePointer]:state[postListPointer][postPositionInArray][voteScorePointer]+1,
          },
        }
      }
    case POST_VOTE_DOWN :
      postIds = action.payload
      postPositionInArray = state.postList.findIndex(x => x.id === postIds)
      return {
        ...state,
        [postListPointer]: {
          ...state[postListPointer],
          [postPositionInArray]:{
            ...state[postListPointer][postPositionInArray],
            [voteScorePointer]:state[postListPointer][postPositionInArray][voteScorePointer]-1,
          },
        }
      }
    case POST_LIST_SET :
      const postListToOverWrite = action.payload
      return {
        ...state,
        postList:postListToOverWrite,
      }
    default :
      return state
  }
}
