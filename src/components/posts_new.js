import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { createPost } from '../actions/index';

// user defined "component" for Field objects
// If input is touched and has validation errors, add 'has-danger' to styling
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
    <label htmlFor={label}>{label}</label>
    <input {...input} className="form-control" type={type} />
    {touched && (error && <div className="text-danger">{error}</div>)}
  </div>
);

const renderTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
    <label htmlFor={label}>{label}</label>
    <textarea {...input} className="form-control" type={type} />
    {touched && (error && <div className="text-danger">{error}</div>)}
  </div>
);

function validate(values) {
  const errors = {};
  if (!values.title) { errors.title = 'Title cannot be empty'; }
  if (!values.categories) { errors.categories = 'Categories cannot be empty'; }
  if (!values.content) { errors.content = 'Content cannot be empty'; }
  return errors; // if object has a key that matches a field "name" property
}

class PostsNew extends Component {
// action-creator creates a promise, and if fulfilled we will go back to index
  onHandleSubmit = (formValues) => {
    this.props.createPost(formValues).then(() => { browserHistory.push('/'); });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onHandleSubmit)}>
        <h3>Create A New Post</h3>
        <Field label="Title" name="title" type="text" component={renderField} />
        <Field label="Categories" name="categories" type="text" component={renderField} />
        <Field label="Content" name="content" type="text" component={renderTextArea} />
        <button type="submit" className="btn btn-primary" disabled={this.props.invalid}> Submit</button>
        <Link to="/" className="btn btn-danger left-spacing">Cancel</Link>
      </form>
    );
  }
}

export default connect(null, { createPost })(reduxForm({
  form: 'PostsNewForm',
  validate,
})(PostsNew));
