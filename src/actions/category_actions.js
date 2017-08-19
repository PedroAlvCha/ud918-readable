import * as contentAPIutil from '../utils/contentAPI.js';
import keyIndex from 'react-key-index';

export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_LIST_SET = 'CATEGORY_LIST_SET';


export function categoryCreate ({ name, path }) {
  return {
    type: CATEGORY_CREATE,
    name,
    path,
  }
}

const categoryListSet = categoryListToSet => ({
  type:CATEGORY_LIST_SET,
  categoryListToSet,
});

export function fetchCategoryList(){
  const request = contentAPIutil.categoriesGet();

  return (dispatch) => {
    request.then(function(result) {
      //console.log('result',result)
      dispatch({type: 'CATEGORY_LIST_SET', payload: keyIndex(result,1) })
    });
  }
};
