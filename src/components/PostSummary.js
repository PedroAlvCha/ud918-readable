import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

class PostSummaryComponent extends Component {
  state = {
    post: PropTypes.object.isRequired
  }

  render(){
    const { post } = this.props
    return(
      <div key={post.id}>
        <div>{post.title}</div>
        <div>{post.author}</div>
        <Badge>{post.voteScore}</Badge>
        <div><div>Up</div><div>Down</div></div>
      </div>
    )
  }
}

export default PostSummaryComponent
