import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, increment } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }
  increment(data) {
  }

  renderPosts() {
    //const table = this.props.postsgrid
    //console.log(this.props.postsgrid)
    return this.props.postsgrid.map((post, index) => {
      return (
        <div key={index} className="pt-card pt-elevation-0 pt-interactive">
          <Link to={'post/' + post._id }>
              { post.title }
          </Link>
          <div className='pull-xs-right'>
            <button onClick={this.props.increment.bind(null, post._id)}>&hearts;</button>
            {/* <a><i className="fa fa-heart"></i></a> */}
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className='col-xs-12 col-sm-6 col-sm-offset-1'>
        <div className='card-posts'>
          <div className="docs-card-example">


            <h3>Posts</h3>

            {this.renderPosts()}

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { postsgrid: state.posts.all }
}
export default connect(mapStateToProps, { fetchPosts, increment })(PostsIndex)

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
