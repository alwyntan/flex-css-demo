import React, { Component } from 'react';
import './style.css';
// proptype options is required

export default class ControlItem extends Component {
  render() {
    return (
      <div className="controlItem">
        <p style={{ margin: 0 }}>{this.props.styleType}</p>
        <div>
          <select
            className="controlItem-option"
            onChange={this._handleSelectChange}
          >
            {this.createOptions()}
          </select>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const obj = {};
    obj[this.props.styleType] = this.props.options[0];
    this.props.onStyleChange && this.props.onStyleChange(obj);
  }

  _handleSelectChange = e => {
    const obj = {};
    obj[this.props.styleType] = e.target.value;
    this.props.onStyleChange && this.props.onStyleChange(obj);
  };

  createOptions = () => {
    return this.props.options.map((item, i) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  };
}
