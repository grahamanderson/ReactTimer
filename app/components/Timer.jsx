import React from 'react'
// import PropTypes from 'prop-types'

import $ from 'jquery'
import '!style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

const Timer = () => {
  return (
          <p>Timer.js Rendered</p>
  )
}

// Main.propTypes = {
//   children: PropTypes.element.isRequired
// }

export default Timer;
