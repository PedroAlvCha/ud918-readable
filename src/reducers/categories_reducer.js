import  {
          CATEGORY_CREATE,
          CATEGORY_LIST_SET,
        } from '../actions/category_actions.js'


const initialCategoryListState = {
    categoryList: [],
}

export function categoryManager (state = initialCategoryListState, action) {

  switch (action.type) {
    case CATEGORY_CREATE :
      return state
    case CATEGORY_LIST_SET :
      const categoryListToOverWrite = action.payload
      return {
        ...state,
        categoryList:categoryListToOverWrite,
      }
    default :
      return state
  }
}
