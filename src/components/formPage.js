import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Message } from 'semantic-ui-react';
import { Link } from 'react-router';

class FormPage extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  onSubmit(props) {
    this.props.createPost(props)
    this.context.router.push('/')
   //blog post has been created, navigate the user to the index
   // we navigate by calling this.context.router.push with the new path to navigate to
  }
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      //<ContactForm onSubmit={this.handleSubmit} />
      <div className='col-xs-12 col-sm-6 col-sm-offset-2 form'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Create a new post</h3>
          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <input type='text' className="pt-input pt-large form-control" placeholder="title..." {...title}/>
            <div className='text-help'>{title.touched ? title.error : ''}</div>
            {/* <Field name="title" type="text" component="input" label="title" className="pt-input pt-large form-control" placeholder="title..."/> */}
          </div>

          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <input type='text' className="pt-input pt-large form-control" placeholder="categories..." {...categories}/>
            <div className='text-help'>{categories.touched ? categories.error : ''}</div>
            {/* <Field name="categories" type="text" component="input" label="categories" className="pt-input pt-large form-control" placeholder="categories..."/> */}
          </div>

          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <textarea className="pt-input pt-large form-control" placeholder="content..." {...content}/>
            <div className='text-help'>{content.touched ? content.error : ''}</div>
            {/* <Field name="content" type="text" component="input" label="content" className="pt-input pt-large form-control" dir="auto" placeholder="content..."/> */}
          </div>

          <button type="submit" className="pt-button pt-icon-add pt-large">Submit</button>
          <Link to='/' className='pt-button pt-large pt-intent-danger'>Cancel</Link>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {}

  if(!values.title) {
    errors.title = 'Enter a username'
  }
  if(!values.categories) {
    errors.categories = 'Enter a category'
  }
  if(!values.content) {
    errors.content = 'Enter some content'
  }

  return errors
}
//connect: fist argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'FormPageNew',
  fields: ['title', 'categories', 'content' ],
  validate
}, null, { createPost })(FormPage);



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
