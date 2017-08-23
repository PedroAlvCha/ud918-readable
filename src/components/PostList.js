import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostList, postVoteDown, postVoteUp } from '../actions/post_actions.js';
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
    const { postList, voteDownPost, voteUpPost } = this.props

    return(
      <div>
        <div>Sort by stuff</div>
        <div>Add new post</div>
        <ListGroup>
          {postList.map((post) => (
            <ListGroupItem key={post.id}>
              <PostSummaryComponent
                post={post}
                votePostUp={voteUpPost}
                votePostDown={voteDownPost}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
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
    voteDownPost: (data)=>dispatch(postVoteDown(data)),
    voteUpPost: (data)=>dispatch(postVoteUp(data)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPostsComponent)
