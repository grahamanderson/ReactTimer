import React from 'react'
import PropTypes from 'prop-types'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm';

// import $ from 'jQuery'
// import '!style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
// $(document).foundation();

export default class Countdown extends React.Component{

  constructor(props) {
    super(props)
    this.handleSetCountdown = this.handleSetCountdown.bind(this)
    this.startTimer = this.startTimer.bind(this)

    this.state = ({
      count:23,
      countdownStatus: 'stopped'
    })

  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1
      this.setState({
        count: newCount >=0 ? newCount : 0
      })
    }, 1000)
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  }

  render() {
    var {count} = this.state

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
}

Countdown.defaultProps = {
  count: 40,
  countdownStatus: 'stopped'
}

Countdown.propTypes = {
  count: PropTypes.number,
  countdownStatus: PropTypes.string
}
