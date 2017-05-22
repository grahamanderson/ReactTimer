import React from 'react'
import Navigation from 'Navigation'
import PropTypes from 'prop-types'

import $ from 'jquery'
import '!style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

const Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <p>Main.js Rendered</p>

          {props.children}
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.element.isRequired
}

export default Main;
