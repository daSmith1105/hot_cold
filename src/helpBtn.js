import React from 'react';
import './helpBtn.css';

export default function HelpBtn(props) {

    return (
      <button onClick={props.onClick} className="help-btn">HOW TO PLAY</button>
    );
}
