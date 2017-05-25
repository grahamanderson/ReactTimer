import React from 'react';
import PropTypes from 'prop-types'
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';


export default class Countdown extends React.Component{

  constructor(props) {
    super(props);
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.renderControlArea = this.renderControlArea.bind(this);

    this.state = ({
      count: 0,
      countdownStatus: 'stopped'
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  }

  handleSetCountdown(seconds) {

    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
    console.log('did I get called?')
    console.log(this.state.count + this.state.countdownStatus)
  }

  handleStatusChange(newStatus){
    this.setState({countdownStatus: newStatus})
  }

  renderControlArea() {
    var  {countdownStatus} = this.state
    // console.log('countdown status is ' + countdownStatus)
    if(countdownStatus !== 'stopped'){
      return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
    }else{
      return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
    }
  }



    render() {
      var {count} = this.state


      // console.log('count  is ' + count)
      return (
        <div>
          <Clock totalSeconds={count}/>
          {this.renderControlArea()}
        </div>
      )
    }
}

// Countdown.defaultProps = {
//     count: 0,
//     countdownStatus: 'stopped'
//   };
//
// Countdown.propTypes = {
//     count: PropTypes.number,
//     countdownStatus: PropTypes.string
//   };
