import  {
          POST_DELETE,
          POST_CREATE,
          POST_VOTE_UP,
          POST_VOTE_DOWN,
          POST_EDIT,
          POST_LIST_SET,
        } from '../actions/post_actions.js'


const initialPostListState = {
    postList: [],
}

export function postManager (state = initialPostListState, action) {

  const postListPointer = 'postList'

  switch (action.type) {
    case POST_EDIT :
      return state
    case POST_DELETE :
      return state
    case POST_CREATE :
      return state
    case POST_VOTE_UP :
      const postIds = action.payload
      console.log('postIds',postIds)
      console.log('state',state)
      console.log('state.postList',state.postList.filter((post) => (post.id === postIds)))
      return {
        ...state,
        [postListPointer]:{
        ...state.[postListPointer][postIds],
        [voteScore]:  state.postList[postIds][voteScore]+1
        }
      }
    case POST_VOTE_DOWN :
      const postId = action.payload
      console.log('postId',postId)
      console.log('state',state)
      return {
        state
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
