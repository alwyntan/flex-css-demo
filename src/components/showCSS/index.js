import React, { Component } from 'react';
import Button from '../button';
import './style.css';
import copyIcon from '../../assets/copy.svg';

export default class ShowCSS extends Component {
  constructor() {
    super();
    this.style = '';
  }

  render() {
    return (
      <div className="showCSS">
        {this.renderStyle()}
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <Button
            img={copyIcon}
            alt="copy icon"
            toolTipText="style copied"
            onClick={this._handleCopyCSSStyle}
          />
        </div>
      </div>
    );
  }

  renderStyle() {
    this.style = '';
    return Object.keys(this.props.style).map((key, i) => {
      this.style =
        this.style +
        key +
        ': ' +
        this.props.style[key] +
        ';' +
        (i === Object.keys(this.props.style).length - 1 ? '' : '\n');

      return (
        <p key={key} style={{ marginTop: 0, marginBottom: 5 }}>
          {key + ': ' + this.props.style[key] + ';'}
        </p>
      );
    });
  }

  _handleCopyCSSStyle = e => {
    if (!navigator.clipboard) {
      this.fallbackCopyTextToClipboard(this.style);
      return;
    }

    navigator.clipboard.writeText(this.style).then(
      function() {
        console.log('Async: Copying to clipboard was successful!');
      },
      function(err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
  };

  fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement('textarea');
    textArea.style.cssText = 'position:fixed';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }
}
