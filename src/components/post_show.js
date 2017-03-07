import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick = () => {
    this.props.deletePost(this.props.params.id).then(() =>
    browserHistory.push('/'),
    );
  }

  render() {
    const { currentPost } = this.props;
    if (!currentPost) { return <div>Loading...</div>; }

    return (
      <div>
        <h3>{currentPost.title}</h3>
        <h6>Categories: {currentPost.categories}</h6>
        <p>{currentPost.content}</p>
        <Link to="/" className="btn btn-primary">Back to Index</Link>
        <button className="btn btn-danger left-spacing" onClick={this.onDeleteClick}>
          Delete Post
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentPost: state.posts.currentPost };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
