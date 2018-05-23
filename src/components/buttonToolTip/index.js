import React, { Component } from 'react';
import './style.css';

export default class ButtonToolTip extends Component {
  constructor() {
    super();
    this.state = {
      style: {}
    };
  }

  render() {
    return (
      <div className="buttonToolTip" style={this.state.style}>
        <p>{this.props.text}</p>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ style: { opacity: 1 } });
    setTimeout(() => {
      // fade out and remove tool tip
      this.setState({ style: { opacity: 0 } });
      setTimeout(() => {
        this.props.removeToolTip();
      }, 500);
    }, 2000);
  }
}
