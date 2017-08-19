import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBarInstance  from './NavigationHeader.js';
import ListPostsComponent from './PostList.js'

class App extends Component {
  render() {
    return (
      <div >
        <NavBarInstance />
        <ListPostsComponent />
      </div>
    );
  }
}

export default App;
