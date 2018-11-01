import React, { Component, Fragment } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.handleSearch}>search</button>
    );
  }
}