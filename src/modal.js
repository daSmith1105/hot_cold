import React from 'react'
import './modal.css';

export default function Modal(props) {
return(
  <div className="modal">
  <div className="message">
    <p>That number has already been guessed. Please try another number.</p>
    </div>
    <button className="close-modal" onClick={props.onClick}>Back to the Game</button>
  </div>
  )
}
