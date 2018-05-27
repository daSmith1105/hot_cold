import React from 'react';
import './App.css';
import Form from './form';
import RestartBtn from './restart';
import HelpBtn from './helpBtn';
import Help from './help';

let secretNumber = Math.floor(Math.random() * 101);
let status = '';
console.log(secretNumber);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.initState = {
      active: false,
      guess: []
    };
    this.state = this.initState;
    }
          toggleOn = () => {
              this.setState({
                active: true
              });
          }

          toggleOff = () => {
              this.setState({
                active: false
              });
          }

          reset = () => {
            this.setState(this.initState);
            status = '';
            secretNumber = Math.floor(Math.random() * 101);
            console.log(secretNumber);
          }

          setGuess = (guess) => {
            this.setState({guess: [...this.state.guess, guess]});
            const proximity = Math.abs(secretNumber - guess);

            if (proximity  >= 50) {
              status = 'Super Cold.';
            } else if (proximity  >= 40) {
              status = 'Very Cold.';
            } else if (proximity  >= 30) {
              status = 'Cold.';
            } else if (proximity  >= 20) {
              status = 'Warmer.';
            } else if (proximity  >= 15) {
              status = 'Warm.';
            } else if (proximity  >= 10) {
                status = 'Almost Hot.';
            } else if (proximity  >= 5) {
              status = 'Hot.';
            } else if (proximity  >= 1) {
              status = 'Super Hot!';
            } else {
              status = 'You got it! Click NEW GAME to play again';
            }
          }

    render() {
      if (this.state.active) {
          return (
              <Help active={this.state.active} onClick={this.toggleOff} />
          );
    } else {
          return  (
            <div>
              <RestartBtn newGame={this.reset} />
              <HelpBtn active={this.state.active} onClick={this.toggleOn} />
              <Form onGuess={this.setGuess} guessLength={this.state.guess.length} guessArray={this.state.guess.join(' ')} secret={secretNumber} feedback={status}/>
            </div>
      )
    }
}
}
