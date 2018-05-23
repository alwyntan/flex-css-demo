import React, { Component } from 'react';
import './App.css';
import FlexComponent from './components/flexComponent';
import FlexControls from './components/flexControls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      style: { display: 'flex' },
      height: '100%'
    };
  }

  componentDidMount() {
    this.setState({ height: window.innerHeight }, () => {
      window.dispatchEvent(new Event('resize'));
    });
    window.onresize = () => {
      if (this.state.height !== window.innerHeight) {
        this.setState({ height: window.innerHeight }, () => {
          window.dispatchEvent(new Event('resize'));
        });
      }
    };
  }

  render() {
    // create the style
    const { camelCaseStyle, snakeCaseStyle } = this.createStyle();
    return (
      <div className="App" style={{ height: this.state.height }}>
        <FlexControls
          style={snakeCaseStyle}
          onStyleChange={style => {
            this.setState({ style: { display: 'flex', ...style } });
          }}
        />
        <FlexComponent style={camelCaseStyle} />
      </div>
    );
  }

  createStyle() {
    let camelCaseStyle = {};
    let snakeCaseStyle = {};
    console.log(this.state.style);
    for (const key in this.state.style) {
      const val = this.state.style[key];
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
