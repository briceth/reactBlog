import React, { Component } from 'react'

export default class Post extends Component {
  render(){
    return(
        <div className="pt-card pt-elevation-0 pt-interactive">
        {this.props.post.title}
      </div>

    )
  }
}
