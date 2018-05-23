import React, { Component } from 'react';
import './style.css';
import ButtonToolTip from '../buttonToolTip';

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      showToolTip: false
    };
  }

  render() {
    return (
      <div className="button" onClick={this._handleOnClick}>
        {this.props.text && <p>{this.props.text}</p>}
        {this.props.img && <img src={this.props.img} alt={this.props.alt} />}
        {this.state.showToolTip &&
          this.props.toolTipText && (
            <ButtonToolTip
              text={this.props.toolTipText}
              removeToolTip={() => {
                this.setState({ showToolTip: false });
              }}
            />
          )}
      </div>
    );
  }

  _handleOnClick = () => {
    this.setState({ showToolTip: true });
    this.props.onClick();
  };
}
