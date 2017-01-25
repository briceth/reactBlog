import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import PostNew from './postNew';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }
  render() {
    return (
      <div className='col-xs-12 col-sm-6 col-sm-offset-1'>
        <div className='card-posts'>
          <div className="docs-card-example">
            <div className="pt-card pt-elevation-0 pt-interactive">
              <h5><a>Trader Profile</a></h5>
              <p>Overview of employee activity, including risk model, scores and scenario alert history.</p>
            </div>
          </div>
        </div>
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
