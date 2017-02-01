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
   return { jobSearched: state.posts.jobSearched }
 }

export default connect(mapStateToProps, { search })(Navbar)
