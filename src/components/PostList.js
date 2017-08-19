import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postListSet, fetchPostList } from '../actions/post_actions.js';
import keyIndex from 'react-key-index';


class ListPostsComponent extends Component {
  state = {
    postList: [],
  }

  componentWillMount() {
    this.props.postListFetch();
  }

  render(){
    const { postList } = this.props

    return(
      <div>
        hello
      </div>
    )
  }
}
function mapStateToProps (state, props) {
  return {
      postList: state.categoryManager.postList,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postListFetch: (data) =>dispatch(fetchPostList(data)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPostsComponent)
