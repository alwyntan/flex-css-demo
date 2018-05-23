import React, { Component } from 'react';
import './style.css';
import FlexChild from '../flexChild';
import AddMinusButton from '../button';

export default class FlexComponent extends Component {
  constructor() {
    super();
    this.state = {
      size: null,
      childs: 1
    };
  }

  render() {
    return (
      <div
        style={{
          padding: 10,
          boxSizing: ' border-box',
          position: 'relative'
        }}
      >
        <div
          ref={ref => {
            this.container = ref;
          }}
          className="flexComponent"
          style={this.props.style}
        >
          {this.createFlexChilds()}
          <div className="flexComponent-buttons">
            <AddMinusButton text={'+'} onClick={this._handlePlusClicked} />
            <AddMinusButton text={'-'} onClick={this._handleMinusClicked} />
          </div>
        </div>
      </div>
    );
  }

  _handlePlusClicked = () => {
    if (this.state.childs < 8) {
      this.setState({ childs: this.state.childs + 1 });
    }
  };

  _handleMinusClicked = () => {
    if (this.state.childs > 1) {
      this.setState({ childs: this.state.childs - 1 });
    }
  };

  createFlexChilds = () => {
    let flexChilds = [];
    for (let i = 0; i < this.state.childs; i++) {
      flexChilds.push(<FlexChild key={i} size={this.state.size} index={i} />);
    }
    return flexChilds;
  };

  componentDidMount() {
    this.setState({
      size:
        this.container.clientHeight > this.container.clientWidth
          ? this.container.clientWidth * 0.4
          : this.container.clientHeight * 0.4
    });
  }
}
