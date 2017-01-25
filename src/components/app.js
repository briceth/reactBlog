import React, { Component } from 'react';
import Navbar from './navbar';
import PostsIndex from './postsIndex';
import SideBar from './sideBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='col-sm-2'>
          <SideBar />
        </div>
        {this.props.children}
      </div>
    );
  }
}
