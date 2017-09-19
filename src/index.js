import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './components/App.js';
import PostDetail from './components/PostDetail.js';
import registerServiceWorker from './registerServiceWorker';
import makeStore from './store/store.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


require('dotenv').config()

export const store = makeStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/:category/:post_id" component={PostDetail} />
        <Route key="category" path="/:category" component={App} />
        <Route key="no-category" path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
