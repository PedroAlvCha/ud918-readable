require('dotenv').config()

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import makeStore from './store/store.js';
import { startServer } from './utils/InAppServer';
import { Provider } from 'react-redux'


export const store = makeStore();
startInAppServer(store);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
