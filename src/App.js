import React, { Component } from 'react';
import './App.css';
import FlexComponent from './components/flexComponent';
import FlexControls from './components/flexControls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: 'flex',
      'justify-content': ''
    };
  }

  render() {
    // create the style
    const { camelCaseStyle, snakeCaseStyle } = this.createStyle();
    return (
      <div className="App">
        <FlexControls
          style={snakeCaseStyle}
          onStyleChange={style => {
            this.setState({ ...style });
          }}
        />
        <FlexComponent style={camelCaseStyle} />
      </div>
    );
  }

  createStyle() {
    let camelCaseStyle = {};
    let snakeCaseStyle = {};
    for (const key in this.state) {
      const val = this.state[key];
      if (val === '-- none --') continue;
      camelCaseStyle[this.snakeToCamel(key)] = val;
      snakeCaseStyle[key] = val;
    }
    return { camelCaseStyle, snakeCaseStyle };
  }

  snakeToCamel(s) {
    return s.replace(/(-\w)/g, function(m) {
      return m[1].toUpperCase();
    });
  }
}

export default App;
