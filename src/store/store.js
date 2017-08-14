import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers/RootReducer.js';


const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export default function makeStore() {
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(logger)
    )
  )
}
