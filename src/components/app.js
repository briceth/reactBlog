import React, { Component } from 'react';
import Navbar from './navbar';
import PostsIndex from './postsIndex';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
