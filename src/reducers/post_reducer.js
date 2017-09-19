import  {
          POST_DELETE,
          POST_VOTE_UP,
          POST_VOTE_DOWN,
          POST_EDIT,
          POST_LIST_SET,
          POST_LIST_CHANGE_SORT_ASCDESC,
          POST_LIST_CHANGE_SORT_VARIABLE,
          NEW_POST_MODAL_OPEN,
          NEW_POST_MODAL_CLOSE,
          POST_LIST_SET_AND_NEW_POST_MODAL_CLOSE,
        } from '../actions/post_actions.js'
import _values from 'lodash.values';

const initialPostListState = {
    postList: [],
    postListOrderBy: 'timestamp',
    postListOrderAscDesc: 'desc',
    isNewPostModalOpen: false,
}

export function postManager (state = initialPostListState, action) {

  const postListPointer = 'postList'
  const voteScorePointer = 'voteScore'
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
    case NEW_POST_MODAL_OPEN :
      return {
          ...state,
          isNewPostModalOpen:true,
      }
    case NEW_POST_MODAL_CLOSE :
      return {
          ...state,
          isNewPostModalOpen:false,
        }
    case POST_LIST_SET_AND_NEW_POST_MODAL_CLOSE:
      const newPost = action.post
      return {
        ...state,
        [postListPointer]: _values({
          ...state.postList,
          [newPost.id]: newPost,
        }),
        isNewPostModalOpen:false,
      }
    case POST_EDIT :
      return state
    case POST_DELETE :
      return state
    case POST_VOTE_UP :
      postIds = action.payload
      postPositionInArray = state.postList.findIndex(x => x.id === postIds)
      return {
        ...state,
        [postListPointer]: _values({
          ...state[postListPointer],
          [postPositionInArray]:{
            ...state[postListPointer][postPositionInArray],
            [voteScorePointer]:state[postListPointer][postPositionInArray][voteScorePointer]+1,
          },
        })
      }
    case POST_VOTE_DOWN :
      postIds = action.payload
      postPositionInArray = state.postList.findIndex(x => x.id === postIds)
      return {
        ...state,
        [postListPointer]: _values({
          ...state[postListPointer],
          [postPositionInArray]:{
            ...state[postListPointer][postPositionInArray],
            [voteScorePointer]:state[postListPointer][postPositionInArray][voteScorePointer]-1,
          },
        })
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
