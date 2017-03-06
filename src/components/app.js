import React, { Component } from 'react';

export default class App extends Component {

  render() {
    return (
      <div>
        At App Component
        {this.props.children}
      </div>
    );
  }
}
