import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import makeStore from './store/store.js';
import { BrowserRouter } from 'react-router-dom';
//import { startInAppServer } from './utils/InAppServer';

require('dotenv').config()

export const store = makeStore();
//startInAppServer(store);

//console.log('store.getState()',store.getState());


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
