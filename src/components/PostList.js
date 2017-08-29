import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostList } from '../actions/post_actions.js';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PostSummaryComponent  from './PostSummary.js'


class ListPostsComponent extends Component {
  state = {
    postList: {},
  }

  componentWillMount() {
    this.props.postListFetch();
  }

  render(){
    const { postList } = this.props

    const postArray = Array.from(postList)
    return(
      <div>
        <div>Sort by stuff</div>
        <div>Add new post</div>
        <ListGroup>
          {postArray.map((post) => (
            <ListGroupItem key={post.id}>
              <PostSummaryComponent
                postID={post.id}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )
  }
}
function mapStateToProps (state, ownProps) {
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
