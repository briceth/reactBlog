import React, { Component } from 'react'

export default class Post extends Component {
  render(){
    const title = this.props.post.title;
    return(
        <div className="pt-card pt-elevation-0 pt-interactive">
        {this.props.post.title}
      </div>

    )
  }
}
