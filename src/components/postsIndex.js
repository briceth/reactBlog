import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
//import * as actionCreators from '../actions/index';
import { Link } from 'react-router';
import Post from './Post';
import fetch from 'isomorphic-fetch';


class PostsIndex extends Component {
  componentWillMount() {
    //this.props.fetchPosts()
    //console.log = 'hi';
  }
  //renderPosts() {
    // return this.props.PostsGrid.map((post, index) => {
    //   return (
    //     <li>
    //       {post.title}
    //     </li>
    //   )
    // })
  //}
  render() {
    return (
      <div className='col-xs-12 col-sm-6 col-sm-offset-1'>
        <div className='card-posts'>
          <div className="docs-card-example">

              <h3>Posts</h3>
            {/* {this.props.PostsGrid.CSS.map((post, index) =>
              <Post {...this.props} key={index} post={post}/>)} */}
              {/* {this.renderPosts()} */}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { PostsGrid: state.PostsGrid }
  console.log(state)
}
export default connect(mapStateToProps, mapStateToProps)(PostsIndex)

//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch)//actioncreators
// }                    //mapDispatchToProps
// export default connect(null, mapDispatchToProps)(PostsIndex)


//export default connect(null, { fetchPosts })(PostsIndex)
// we replace null by mapStateToProps when we need to fetch the data in the store
//when we need to fetch the state as props
//export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch)
// }
// export default connect(null, mapDispatchToProps)(PostsIndex)
