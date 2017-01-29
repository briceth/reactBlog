import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'
import PostNew from './postNew'

import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'


class PostsIndex extends Component {
  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li>
          {post.name}
        </li>
      )
    })
  }
  render() {
    return (
      <div className='col-xs-12 col-sm-6 col-sm-offset-1'>
        <div className='card-posts'>
          <div className="docs-card-example">
            <div className="pt-card pt-elevation-0 pt-interactive">

              <h3>Posts</h3>
              <ul>
                {this.renderPosts()}
              </ul>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
   return { posts: state.posts.all }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)


//export default connect(null, { fetchPosts })(PostsIndex)
// we replace null by mapStateToProps when we need to fetch the data in the store
//when we need to fetch the state as props
//export default connect(mapStateToProps, {fetchPosts})(PostsIndex)

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch)
// }
//export default connect(null, mapDispatchToProps)(PostsIndex)
