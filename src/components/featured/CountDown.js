import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';

class CountDown extends Component {
  state = {

    deadline: 'Aug, 6, 2019',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  }

  getCountDown (deadline) {
    const time_left = Date.parse(deadline) - Date.parse(new Date())

    if (time_left < 0){
      return this.state;
    } else {

      const seconds = Math.floor((time_left/1000)%60);
      const minutes = Math.floor((time_left/1000/60)%60);
      const hours = Math.floor((time_left/(1000*60*60))%24);
      const days = Math.floor(time_left/(1000*60*60*24));

      this.setState({
        days,
        hours,
        minutes,
        seconds
      })

    }

  }

  componentDidMount() {
    setInterval (() => this.getCountDown(this.state.deadline), 1000)
  }


  render() {
    return (
      <Bounce left delay={500}>
        <div className="countdown_wrapper">
          <div className="countdown_top">
            Event starts in...
          </div>
          <div className="countdown_bottom">
            <div className="countdown_item">
            <div className="countdown_time">
              {this.state.days}
            </div>
            <div className="countdown_tag">
              Days
            </div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">
              {this.state.hours}
              </div>
              <div className="countdown_tag">
                Hrs
              </div>
            </div>
            <div className="countdown_item">
            <div className="countdown_time">
            {this.state.minutes}
            </div>
            <div className="countdown_tag">
              Mins
            </div>
            </div>
            <div className="countdown_item">
            <div className="countdown_time">
            {this.state.seconds}
            </div>
            <div className="countdown_tag">
              Secs
            </div>
            </div>
          </div>
        </div>
      </Bounce>
    );
  }
}

export default CountDown;