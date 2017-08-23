import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { Router, Link } from 'react-router-dom';
import { dateToStringYYYY_MM_DD_HH_MM } from '../utils/helpers.js';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

let localDebug =1;
let localDebugContext = 'PostSummary.js'

class PostSummaryComponent extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    votePostUp: PropTypes.func.isRequired,
    votePostDown:PropTypes.func.isRequired
  }


  render(){
    const { post, votePostUp, votePostDown } = this.props
    let postURL = '/'+post.category+'/'+post.id
    let postDate = new Date(post.timestamp)
    let postDateString = dateToStringYYYY_MM_DD_HH_MM(postDate);

    if(localDebug === 1){
      console.log('postURL at ' + localDebugContext, postURL)
      console.log('postDateString at ' + localDebugContext, postDateString)
    }

    return(
      <div id={post.id}>
        <Link to={postURL}>{post.title}</Link>
        <div>{'Posted on '+ postDateString +' by '+ post.author}</div>
        <div>
          <Badge>{'Votes: '+ post.voteScore}</Badge>
          <Button
            bsSize="xsmall"
            onClick={(event) => {
              votePostUp(post.id);
            }}
          >
            <FaThumbsOUp size={30}/>
          </Button>
          <Button
            bsSize="xsmall"
            onClick={(event) => {
            votePostDown(post.id);
          }}
          >
            <FaThumbsODown size={30}/>
          </Button>
        </div>
      </div>
    )
  }
}

export default PostSummaryComponent
