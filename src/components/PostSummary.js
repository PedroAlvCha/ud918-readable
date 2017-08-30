import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postVoteDown, postVoteUp } from '../actions/post_actions.js';
import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { Router, Link } from 'react-router-dom';
import { dateToStringYYYY_MM_DD_HH_MM } from '../utils/helpers.js';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import _filter from 'lodash.filter';


class PostSummaryComponent extends Component {
  state = {
    post: {},
  }

  static propTypes = {
    postID: PropTypes.string.isRequired
  }


  render(){
    const { post, voteDownPost, voteUpPost } = this.props
    let postObject = post[0]
    let postURL = '/'+postObject.category+'/'+postObject.id
    let postDate = new Date(postObject.timestamp)
    let postDateString = dateToStringYYYY_MM_DD_HH_MM(postDate);


    return(
      <div id={postObject.id}>
        <Link to={postURL}>{postObject.title}</Link>
        <div>{'Posted on '+ postDateString +' by '+ postObject.author}</div>
        <div>
          <Badge>{'Votes: '+ postObject.voteScore}</Badge>
          <Button
            bsSize="xsmall"
            onClick={(event) => {
              voteUpPost(postObject.id);
            }}
          >
            <FaThumbsOUp size={30}/>
          </Button>
          <Button
            bsSize="xsmall"
            onClick={(event) => {
            voteDownPost(postObject.id);
          }}
          >
            <FaThumbsODown size={30}/>
          </Button>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
      post: _filter(state.postManager.postList, {'id': ownProps.postID}),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    voteDownPost: (data)=>dispatch(postVoteDown(data)),
    voteUpPost: (data)=>dispatch(postVoteUp(data)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSummaryComponent)
