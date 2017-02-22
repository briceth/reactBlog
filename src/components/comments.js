import React, { Component } from 'react'
import { reduxForm, connect } from 'redux-form'
import { createComment } from '../actions/index'

class CommentForm extends Component {
  onSubmit(props) {
    const postId = this.props.params.id
    this.props.createComment(props, postId)
    this.refs.commentForm.reset()
  }

  renderComments(comment, index) {
    return(
      <div key={index}>
        <p>
          {comment.content}
        </p>
      </div>
    )
  }

  render() {
  // const postId = this.props.params.id
//   const comments = this.props.comment
// console.log(comments)
  //
  // function commentsForPost(postId, comments) {
  //     return comments.filter(function(comment) {
  //       return comment._post === postId
  //     })
  //   }
  // console.log(commentsForPost(postId, comments))

    const index = this.props.comment.filter((comment) => comment._post ===
    this.props.params.id)
  console.log(index)

    const { fields: { content }, handleSubmit } = this.props;
    return(
      <div>
        <form ref='commentForm' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h4>Poster un commentaire</h4>
          <textarea className="pt-input pt-large form-control" ref='content' placeholder="commentaires..." {...content} />
          <button type="submit" className="pt-button pt-icon-add">Submit</button>
        </form>
        <div>
          { this.props.comment.map(this.renderComments.bind(this)) }
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'commentForm',
  fields: ['content']
}, null, { createComment })(CommentForm)
