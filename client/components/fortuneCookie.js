import React from 'react';

export default class FortuneCookie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cookieInfo = (<div className="hidden"></div>);
    if (this.props.wasButtonClicked) {
      if (this.props.displayFront) {
        cookieInfo = (
          <>
            <div className="top left corner"></div>
            <div className="bottom left corner"></div>
            <div className="proverb">&quot; {this.props.cookie.proverb} &quot;</div>
            <div className="top right corner"></div>
            <div className="bottom right corner"></div>
          </>
        );
      } else {
        cookieInfo = (
          <>
            <div className="top left corner"></div>
            <div className="bottom left corner"></div>
            <div className="fortune-inside">
              <div className="lottery"><b>Lucky Numbers:</b> {this.props.cookie.lotteryNumbers.join(', ')}</div>
              <div className="lesson-english"><b>Learn Chinese</b> - {this.props.cookie.lesson.english}</div>
              <div className="lesson-chinese">{this.props.cookie.lesson.chinese} ({this.props.cookie.lesson.pinyin})</div>
            </div>
            <div className="top right corner"></div>
            <div className="bottom right corner"></div>
          </>
        );
      }
    }
    return (
      <div>
        <img className="cookie-cracking" src="http://localhost:3099/images/cookie-cracking-gif.gif" />
        <div className="fortune-text hidden">
          {cookieInfo}
        </div>
      </div>
    );
  }
}
