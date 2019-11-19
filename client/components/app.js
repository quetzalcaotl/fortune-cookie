import React from 'react';
import FortuneCookie from './fortuneCookie';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasButtonClicked: false,
      displayFront: true,
      currentCookie: [],
    };
    this.showFortuneCookie = this.showFortuneCookie.bind(this);
    this.getNewCookie = this.getNewCookie.bind(this);
    this.flipFortuneCookie = this.flipFortuneCookie.bind(this);
  }

  showFortuneCookie() {
    if (!this.state.wasButtonClicked) {
      this.setState({ wasButtonClicked: true });
    }
    document.getElementsByClassName('fortune-text')[0].classList.remove('hidden');
    document.getElementsByClassName('flip-button')[0].classList.remove('hidden');
  }
  getNewCookie() {
    axios.get(`http://localhost:3099/fortune`)
      .then(response => {
        this.setState({ currentCookie: response.data[0] }, this.showFortuneCookie);
      })
      .catch(error => {
        console.log(error);
      });
  }
  flipFortuneCookie() {
    const fortuneTextElement = document.getElementsByClassName('fortune-text')[0];
    fortuneTextElement.classList.add('flipped');
    setTimeout(() => {
      this.setState(state => ({ displayFront: !state.displayFront }), () => {
        fortuneTextElement.classList.remove('flipped');
      });
    }, 400);
  }

  render() {
    return (
      <>
        <div className="title">What's Your Fortune?</div>
        <FortuneCookie wasButtonClicked={this.state.wasButtonClicked} cookie={this.state.currentCookie} displayFront={this.state.displayFront} />
        <div className="flip-button hidden" onClick={this.flipFortuneCookie}>Flip Me Over!</div>
        <br />
        <button className="button" type="button" onClick={this.getNewCookie}>New Fortune</button>
        <footer className="attributions">
          <div className="fortune-cookie-favicon">Favicon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a></div>
          <div className="fortune-cookie-gif">Gif made by <a href="https://www.wokbox.ca" title="WokBox">WokBox</a> from <a href="https://wokbox.ca/wp-content/uploads/2017/01/thankyou-cracking-cookie-01.gif" title="thank-you-cracking-cookie-01">wokbox.ca</a></div>
          <div className="fortune-cookie-data">Data provided by <a href="https://github.com/larryprice" title="Larry-Price">Larry Price</a> via <a href="https://github.com/larryprice/fortune-cookie-api" title="fortune-cookie-api">fortune-cookie-api.git</a></div>
        </footer>
      </>
    );
  }
}
