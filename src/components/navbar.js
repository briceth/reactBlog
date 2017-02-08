import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { search } from '../actions/index';

class Navbar extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     searchTerm: '',
  //     currentlyDisplayed: ''
  //   }
  // }

  componentDidMount() {
    this.props.search()
  }
  renderLinks() {
  if (this.props.authenticated) {
    //show a link to sign out
    //we dont want a div between the ul and the li
  return <div className=''>
      <Link className='' to='/signout'>Sign Out</Link>
    </div>
  } else {
    //show a link to sign out or sign up
    return [ //react feature for render multiple
      <div className='' key='signin'>
        <Link className='' to='/signin'>Sign In</Link>
      </div>,
      <div className='' key='signup'>
        <Link className='' to='/signup'>Sign Up</Link>
      </div>
    ];
  }
}
  render(){

    const { search, jobSearched } = this.props;

    return (
      <nav className="pt-navbar pt-dark">
        <div className="pt-navbar-group pt-align-left">
          <Link to='/'>
          <div className="pt-navbar-heading">React blog</div>
        </Link>
        <input
          onChange={(e) => search(e.target.value)}
          value=''
          className="pt-input"
          placeholder="Search files..."
          type="text" />
        </div>
        <div className="pt-navbar-group pt-align-right">
          {this.renderLinks()}
          <button className="pt-button pt-minimal pt-icon-home">Home</button>
          <button className="pt-button pt-minimal pt-icon-document">Files</button>
          <span className="pt-navbar-divider"></span>
          <button className="pt-button pt-minimal pt-icon-user"></button>
          <button className="pt-button pt-minimal pt-icon-notifications"></button>
          <button className="pt-button pt-minimal pt-icon-cog"></button>
        </div>
      </nav>
    )
  }
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ search }, dispatch)
//  }
 function mapStateToProps(state) {
   return {
     jobSearched: state.posts.jobSearched,
     authenticated: state.auth.authenticated
    }
 }

export default connect(mapStateToProps, { search })(Navbar)
