import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }
  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/post/new' className='pt-button pt-minimal pt-icon-add pt-intent-success'>Add a post</Link>
        </div>
        <p>Blog posts!</p>
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostsIndex)

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch)
// }
//
// export default connect(null, mapDispatchToProps)(PostsIndex)
