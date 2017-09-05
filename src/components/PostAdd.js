import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostAddComponent extends Component {
  state = {
    postList: [],
  }

  render(){
    return(
      <div> ADD POST HERE</div>
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
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAddComponent)
