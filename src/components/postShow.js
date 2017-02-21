import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';
import CommentForm  from './Comments';

class PostShow extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  componentDidMount() {
    this.props.fetchPost(this.props.params.id)
  }
  onDeletePost(){
    this.props.deletePost(this.props.params.id)
    this.context.router.push('/')
  }
  render(){
    const { post } = this.props;
    // console.log(post)
  //if we dont have a post
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
        <CommentForm />
      </div>
    )
  }
}

function mapStateToProps(state){
  return { post: state.posts.post }
}
export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow)
