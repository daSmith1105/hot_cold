import React from 'react';
import './form.css'
import Modal from './modal';

export default class Form extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
      modalShow = () => {
        this.setState({
          showModal: true
        })
      }

      modalHide= () => {
        this.setState({
          showModal: false
        })
      }

      handleSubmit(event) {
        event.preventDefault();
        const guess = this.guess.value.trim();

        if(this.props.guessArray.includes(guess)) {
          this.modalShow({
            showModal: true
          })
        } else if (guess && this.props.onGuess) {
              this.props.onGuess(guess);
          }
        this.guess.value = '';
      }

    render() {
      if (this.state.showModal) {
          return (
              <Modal onClick={this.modalHide} />
          );
      }
    return (
        <form onSubmit={this.handleSubmit}>
        <h1>Hot or Cold</h1>
        <div className="feedback-display">
          <h2 className="status">{this.props.feedback}</h2>
        </div>
          <fieldset>
            <legend htmlFor="guess-input">Make a Guess!</legend>
            <input type="number" className="guess-input" name="guess-input" min="1" max="100" ref={(input) => this.guess = input} autocomplete="off" />
            <button type="submit" className="submit-btn">GUESS</button>
            <div className="guess-num">Guess # <span className="count">{this.props.guessLength}</span>!</div>
            <div class="guess-array">{this.props.guessArray}</div>
          </fieldset>
        </form>
      )
    }
  }
