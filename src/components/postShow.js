import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost, fetchComment } from '../actions/index';
import { Link } from 'react-router';
import Comments  from './Comments';

class PostShow extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
    this.props.fetchComment()
  }
  onDeletePost(){
    this.props.deletePost(this.props.params.id)
    this.context.router.push('/')
  }


  render(){
    const { post, comments } = this.props;

    const commentsForEachPost = comments.filter(comment => comment._post ===
      this.props.params.id)

    if(!post) {
      return <div>Loading...</div>
    }
    return(
        <div className='col-xs-12 col-sm-6 col-sm-offset-1 postShow'>
          <Link to='/' className='pt-button'>Back to posts</Link>
        <h3>{post.title}</h3>
        <h6>categories: {post.categories}</h6>
        <p>{post.content}</p>
        <button className='pt-button pt-intent-danger' onClick={this.onDeletePost.bind(this)}>Delete post</button>
        <Comments {...this.props} commentsForEachPost={commentsForEachPost} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return { post: state.posts.post, comments: state.comment.comment }
}
export default connect(mapStateToProps, { fetchPost, deletePost, fetchComment })(PostShow)
