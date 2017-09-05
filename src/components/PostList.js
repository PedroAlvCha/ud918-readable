import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import  {
          fetchPostList
          ,postListChangeSort_Variable
          ,postListChangeSort_AscDesc
          ,newPostModalOpen
          ,newPostModalClose
        } from '../actions/post_actions.js';
import {
          ListGroup
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
    isNewPostModalOpen: 0,
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
            , isNewPostModalOpen
            , newPostModalSetOpen
            , newPostModalSetClosed
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
            <Button
              bsStyle="primary"
              onClick={(event) => {
                newPostModalSetOpen(event);
              }}
            > Add New Post + </Button>
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
        <Modal
          isOpen={isNewPostModalOpen}
          onRequestClose={(event) => {
            newPostModalSetClosed(event);
          }}
          contentLabel='Add New Post'
        >
          <div >
            <p>Hola Mundo Modal.</p>
          </div>
          <Button onClick={(event) => {
            newPostModalSetClosed(event);
          }}>Cancel</Button>
        </Modal>
      </div>
    )
  }
}
function mapStateToProps (state, ownProps) {
  return {
      postList: state.postManager.postList,
      postListOrderBy: state.postManager.postListOrderBy,
      postListOrderAscDesc: state.postManager.postListOrderAscDesc,
      isNewPostModalOpen: state.postManager.isNewPostModalOpen,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postListFetch: (data) =>dispatch(fetchPostList(data)),
    postListSortVariableChange: (data)=>dispatch(postListChangeSort_Variable(data)),
    postListSortAscDescChange: (data)=>dispatch(postListChangeSort_AscDesc(data)),
    newPostModalSetOpen: (data)=>dispatch(newPostModalOpen(data)),
    newPostModalSetClosed: (data)=>dispatch(newPostModalClose(data)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPostsComponent)
