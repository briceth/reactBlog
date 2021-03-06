import React, { Component } from 'react';
import Navbar from './navbar';
import PostsIndex from './postsIndex';
import SideBar from './sideBar';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SideBar />
        {/* only one job show children component */}
        {/* {this.props.children} */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
