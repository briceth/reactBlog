import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, submissionError } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

class PostNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    console.log(props)
    this.props.createPost(props)
    .then(() => { this.context.router.push('/')
    })
  }
  render() {
    const { fields: { first_name, last_name, avatar }, handleSubmit } = this.props;

    return (
      <div className='col-xs-12 col-sm-6 col-sm-offset-3 form'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <h3>Create a new post</h3>

          <div className='form-group'>
            <label>title</label>
            <input {...first_name} type="text" className="pt-input pt-large form-control" placeholder="title..." />
          </div>

          <div className='form-group'>
            <label>categories</label>
            <input {...last_name} type="text" className="pt-input pt-large form-control" placeholder="categories..." />
          </div>

          <div className='form-group'>
            <label>content</label>
            <textarea {...avatar} className="pt-input pt-large form-control" dir="auto" placeholder="content..." />
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
  fields: ['first_name', 'last_name', 'avatar'] //watch for these inputs
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
