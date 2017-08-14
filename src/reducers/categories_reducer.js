import {* } from '../actions/category_actions.js'

const initialCategoryListState = {
    categoryList: [],
}

export function categoryManager (state = initialCategoryListState, action) {

  switch (action.type) {
    case CATEGORY_CREATE :
      return state
    default :
      return state
  }
}
