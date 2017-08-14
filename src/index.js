require('dotenv').config()

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import makeStore from './store/store.js';
import { startServer } from './utils/InAppServer';



export const store = makeStore();
startInAppServer(store);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
