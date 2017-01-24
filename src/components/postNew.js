import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h3>Create a new post</h3>

        <div className='form-group'>
          <label htmlFor="title">title</label>
          <input {...title} type="text" className="pt-input pt-large form-control" placeholder="title..." />
        </div>

        <div className='form-group'>
          <label htmlFor="categories">categories</label>
          <input {...categories} type="text" className="pt-input pt-large form-control" placeholder="categories..." />
        </div>

        <div className='form-group'>
          <label htmlFor="content">content</label>
          <textarea {...content} className="pt-input pt-large form-control" dir="auto" placeholder="content..." />
          {/* <Field name="content" component="input" type="email"/> */}
        </div>

        <button type="submit" className="pt-button pt-icon-add pt-large">Submit</button>
      </form>
    );
  }
}
// Decorate the form component
PostNew = reduxForm({
  form: 'PostNewForm', // a unique name for this form
  fields: ['title', 'categories', 'content'] //watch for these inputs
})(PostNew);

export default PostNew;

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
