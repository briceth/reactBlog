import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { signinUser } from '../../actions/auth/index';
import { connect } from 'react-redux';

class Signin extends Component {
  onSubmit({ email, password }) {
    //console.log(email, password);
    //call action creator
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>OOps!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }
  render() {

    const { handleSubmit, fields: { email, password } } = this.props;

    //console.log(this.props.signinUser)

    return (
      <div className='col-xs-12 col-sm-6 col-sm-offset-2 form'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <label>Email:</label>
            <input {...email} className="pt-input pt-large form-control"/>
            <label>Password:</label>
            <input {...password} type='password' className="pt-input pt-large form-control"/>
          {this.renderAlert()}
          <button action='submit' className='pt-button pt-intent-success pt-large'>Sign in</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}
Signin = reduxForm({
  form: 'signin',
  fields: [ 'email', 'password' ]
})(Signin);

export default connect(mapStateToProps, { signinUser })(Signin);
