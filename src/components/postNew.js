import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, submissionError } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

class PostNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  handleSubmit = (props) => {
    this.props.createPost(props)
    .then(() => { this.context.router.push('/')
      })
    }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <div className='col-xs-12 col-sm-6 col-sm-offset-2 form'>
        <form onSubmit={this.handleSubmit}>

          <h3>Create a new post</h3>

          <div className='form-group'>
            <Field name="title" type="text" component="input" label="title" className="pt-input pt-large form-control" placeholder="title..."/>
          </div>

          <div className='form-group'>
            <Field name="categories" type="text" component="input" label="categories" className="pt-input pt-large form-control" placeholder="categories..."/>
          </div>

          <div className='form-group'>
            <Field name="content" type="text" component="input" label="content" className="pt-input pt-large form-control" dir="auto" placeholder="content..."/>
          </div>

          <button type="submit" className="pt-button pt-icon-add pt-large">Submit</button>
        </form>
      </div>
    );
  }
}
//connect: fist argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

// Decorate the form component
const formData = ({
  form: 'PostNewForm', // a unique name for this form
  fields: ['title', 'categories', 'content'] //watch for these inputs
})

export default connect(null, {createPost})(reduxForm(formData)(PostNew));

//export default PostNew;

//user types something in ... record it on application state
// state === {
//   form: {
//     PostNewForm: {
//       title: '...',
//       categories: '...',
//       content: '...'
//     }
//   }
// }
