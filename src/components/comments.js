import React, { Component } from 'react'
import { reduxForm, connect } from 'redux-form'
import { createComment } from '../actions/index'

class CommentForm extends Component {
  onSubmit(props) {
    this.createComment(props)
  }
  render() {
    const { fields: { content }, handleSubmit } = this.props;
    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h4>Poster un commentaire</h4>
          <textarea className="pt-input pt-large form-control" placeholder="commentaires..." {...content} />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'commentForm',
  fields: ['content']
}, null, { createComment })(CommentForm)
