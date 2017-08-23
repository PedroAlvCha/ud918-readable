import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import NavBarInstance  from './NavigationHeader.js';
import ListPostsComponent from './PostList.js'

class App extends Component {
  render() {
    return (
      <div >
        <Route render={() => (
          <div >
            <NavBarInstance />
            <ListPostsComponent />
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
