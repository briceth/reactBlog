import React, { Component } from 'react';

export default class PostShow extends Component {
  render(){
    return(
        <div>
        {this.props.params.id}
      </div>
    )
  }
}
