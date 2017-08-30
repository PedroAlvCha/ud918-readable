import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {
          fetchPostList
          ,postListChangeSort_Variable
          ,postListChangeSort_AscDesc
        } from '../actions/post_actions.js';
import {  ListGroup
          , ListGroupItem
          , ButtonToolbar
          , ToggleButtonGroup
          , ToggleButton
          , DropdownButton
          , MenuItem
          , Button
        } from 'react-bootstrap';
import PostSummaryComponent  from './PostSummary.js';
import _map from 'lodash.map';
import _orderBy from 'lodash.orderby';

class ListPostsComponent extends Component {
  state = {
    postList: [],
    postListOrderBy: '',
    postListOrderAscDesc:'',
  }

  componentWillMount() {
    this.props.postListFetch();
  }

  render(){
    const {   postList
            , postListOrderBy
            , postListOrderAscDesc
            , postListSortAscDescChange
            , postListSortVariableChange
          } = this.props

    const orderedPostList = _orderBy(postList, postListOrderBy, postListOrderAscDesc)

    return(
      <div>
        <div>
          <ButtonToolbar>
            <DropdownButton
                title="Sort By"
                id="bg-nested-dropdown"
                onSelect={(event) => {
                  postListSortVariableChange(event);
                }}
            >
              <MenuItem eventKey="author">Author</MenuItem>
              <MenuItem eventKey="timestamp">Post Date</MenuItem>
              <MenuItem eventKey="title">Title</MenuItem>
              <MenuItem eventKey="voteScore">Vote Score</MenuItem>
            </DropdownButton>
            <ToggleButtonGroup
                type="radio"
                name="postListSortAscDesc"
                defaultValue={postListOrderAscDesc}
                onChange={(event) => {
                  postListSortAscDescChange(event);
                }}
              >
              <ToggleButton value="asc">Ascending</ToggleButton>
              <ToggleButton value="desc">Descending</ToggleButton>
            </ToggleButtonGroup>
            <Button bsStyle="primary"> Add New Post + </Button>
          </ButtonToolbar>
        </div>
        <ListGroup>
          {_map(orderedPostList, post =>
            <ListGroupItem key={post.id}>
              <PostSummaryComponent
                postID={post.id}
              />
            </ListGroupItem>
          )}
        </ListGroup>
      </div>
    )
  }
}
function mapStateToProps (state, ownProps) {
  return {
      postList: state.postManager.postList,
      postListOrderBy: state.postManager.postListOrderBy,
      postListOrderAscDesc: state.postManager.postListOrderAscDesc,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postListFetch: (data) =>dispatch(fetchPostList(data)),
    postListSortVariableChange: (data)=>dispatch(postListChangeSort_Variable(data)),
    postListSortAscDescChange: (data)=>dispatch(postListChangeSort_AscDesc(data))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPostsComponent)
