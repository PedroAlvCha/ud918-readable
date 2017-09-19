import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import { capitalize, renderField, validateRequired } from '../utils/helpers'
import  { newPostFormSubmit, newPostModalClose  } from '../actions/post_actions.js';
import {  Button  } from 'react-bootstrap';

class PostAddComponent extends Component {
  state = {
    categoryList: [],
    isNewPostModalOpen: 0,
  }


  onSubmit = values => {
    this.props.handleNewPostSubmit(values);
  }

  render(){
    const { categoryList,  newPostModalSetClosed, value } = this.props


    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <label>Category</label>
          <div>
            <Field
              name="category"
              component="select"
              value={value}
            >
              <option value="null" key="-1">Select a Category</option>
              {categoryList.map((category,index) => (
                <option value={category.name} key={index}>
                  {capitalize(category.name)}
                </option>
              ))}
            </Field>
          </div>
        </div>
        <div>
          <label>Title</label>
          <div>
            <Field  name="title"
                  component={renderField}
                  type="text"
                  placeholder="Title"
                  validate={validateRequired}
                  value={value}
                />
          </div>
        </div>
        <div>
          <label>Body</label>
          <Field  name="body"
                  component={renderField}
                  type="textarea"
                  placeholder="Post body here..."
                  validate={validateRequired}
                  value={value}
          />
        </div>
        <div>
          <label>Author</label>
          <Field  name="author"
                  component={renderField}
                  type="text"
                  placeholder="Author"
                  validate={validateRequired}
                  value={value}
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
          <Button onClick={newPostModalSetClosed}>Cancel</Button>
        </div>
      </form>
    )
  }
};

function mapStateToProps (state, ownProps) {
  return {
      categoryList: state.categoryManager.categoryList,
      isNewPostModalOpen: state.postManager.isNewPostModalOpen,
  }
};

function mapDispatchToProps (dispatch) {
  return {
        newPostModalSetClosed: (data)=>dispatch(newPostModalClose(data)),
        handleNewPostSubmit: data =>dispatch(newPostFormSubmit(data)),
  }
};


PostAddComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAddComponent)

// Decorate the form component
export default reduxForm({
  form: 'NewPost' // a unique name for this form
})(PostAddComponent);
