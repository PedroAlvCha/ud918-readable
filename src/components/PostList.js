import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postListSet, fetchPostList } from '../actions/post_actions.js';
import keyIndex from 'react-key-index';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PostSummaryComponent  from './PostSummary.js'


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
      <ListGroup>
        {postList.map((post) => (
          <ListGroupItem>
            <PostSummaryComponent
              post={post}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    )
  }
}
function mapStateToProps (state, props) {
  return {
      postList: state.postManager.postList,
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
