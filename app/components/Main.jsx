import React from 'react';
import Navigation from 'Navigation';
import PropTypes from 'prop-types';

import $ from 'jquery'
import '!style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

const Main = (props) => {
    return (
      <div>
        <Navigation/>
        <div className="large-10 columns large-centered">
          <div className="row">
            <div className="columns medium-6 large-4 small-centered">
              {props.children}
            </div>
          </div>
        </div>
      </div>
          )
  }

Main.propTypes = { children: PropTypes.element.isRequired }

export default Main;
