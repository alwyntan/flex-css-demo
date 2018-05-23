import React, { Component } from 'react';

export default class FlexChild extends Component {
  render() {
    return (
      <div
        style={{
          height: this.props.size,
          width: this.props.size,
          backgroundColor: 'turquoise',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '1px 1px 3px rgba(0,0,0,0.4)',
          userSelect: 'none',
          margin: '2px'
        }}
      >
        {this.props.index}
      </div>
    );
  }
}
