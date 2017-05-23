import React from 'react'
import Clock from 'Clock'
// import PropTypes from 'prop-types'

import $ from 'jquery'
import '!style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

const Countdown = () => {
  return (
      <Clock totalSeconds={129}/>
  )
}

// Main.propTypes = {
//   children: PropTypes.element.isRequired
// }

export default Countdown;
