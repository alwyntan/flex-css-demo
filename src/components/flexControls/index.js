import React, { Component } from 'react';
import ControlItem from '../controlItem';
import ShowCSS from '../showCSS';
import './style.css';

const justifyContentOptions = [
  '-- none --',
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch'
];

const alignItemOptions = [
  '-- none --',
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'stretch'
];

const flexDirectionOptions = [
  '-- none --',
  'row',
  'row-reverse',
  'column',
  'column-reverse'
];

const flexWrapOptions = ['-- none --', 'nowrap', 'wrap', 'wrap-reverse'];

const alignContentOptions = [
  '-- none --',
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'stretch'
];

// flex-flow
// not needed since just a shorthand for "flex-direction || flex-wrap"

export default class FlexControls extends Component {
  render() {
    return (
      <div className="flexControls">
        <h1 style={{ marginBottom: 0 }}>CSS Flex Demo</h1>
        <h4 style={{ marginTop: 5, marginBottom: 0 }}>
          Simple demo for the flex parent element
        </h4>
        <div className="flexControls-ui-title">
          <div>
            <p>Properties</p>
          </div>
          <div>
            <p>CSS</p>
          </div>
        </div>
        <div className="flexControls-ui-container">
          <div className="flexControls-ui">
            <ControlItem
              styleType="justify-content"
              onStyleChange={this.props.onStyleChange}
              options={justifyContentOptions}
            />
            <ControlItem
              styleType="align-items"
              onStyleChange={this.props.onStyleChange}
              options={alignItemOptions}
            />
            <ControlItem
              styleType="flex-direction"
              onStyleChange={this.props.onStyleChange}
              options={flexDirectionOptions}
            />
            <ControlItem
              styleType="flex-wrap"
              onStyleChange={this.props.onStyleChange}
              options={flexWrapOptions}
            />
            <ControlItem
              styleType="align-content"
              onStyleChange={this.props.onStyleChange}
              options={alignContentOptions}
            />
          </div>
          <div className="flexControls-ui">
            <ShowCSS style={this.props.style} />
          </div>
        </div>
      </div>
    );
  }
}
