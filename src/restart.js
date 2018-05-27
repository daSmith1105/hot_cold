import React from 'react';


export default function RestartBtn(props) {

  return (
    <button className="new-game" onClick={props.newGame}>+ NEW GAME</button>
  );
}
