import React from 'react'
import PropTypes from 'prop-types'

export default class CountdownForm extends React.Component{

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault()
    var strSeconds = this.seconds.value

    if (strSeconds.match(/^[0-9]*$/)) {
      this.seconds.value=''
      this.props.onSetCountdown(parseInt(strSeconds, 10))
    }
  }

render(){
    return (
      <div>
        <form ref={(ref) => this.form = ref}
          onSubmit={this.onSubmit}
          className="countdown-form"
        >
          <input type="text"
            ref={(input) => this.seconds = input}
            placeholder="Enter time in seconds"
          />
          <div className="text-center larger small-centered">
            <button className="button">Start</button>
          </div>

        </form>
      </div>
    )
  }
}
