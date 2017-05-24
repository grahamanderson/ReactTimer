import React from 'react'
import PropTypes from 'prop-types'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm';


import $ from 'jquery'
import '!style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

export default class Countdown extends React.Component{

  constructor(props) {
    super(props);
    this.handleSetCountdown = this.handleSetCountdown.bind(this)
    this.state = {count:23}
  }

  handleSetCountdown(seconds) {
    this.setState({ count: seconds })
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
}

Countdown.defaultProps = {count: 40}
Countdown.propTypes = {count: PropTypes.number}
