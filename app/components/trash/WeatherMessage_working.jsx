import React from 'react';
import createReactClass from 'create-react-class';

var WeatherMessage = createReactClass({
  render: function () {
    var {temp, location} = this.props;

    return (
      <h3>Its it {temp} in {location}.</h3>
        )
    }
});

module.exports = WeatherMessage;
// export default WeatherMessage;

// import PropTypes from 'prop-types';

// const WeatherMessage = () => {
//     let {temp, location} = this.props;
//
//     return (
//         <h3> Its {temp}℉ in {location}</h3>
//     )
//   }

// WeatherMessage.defaultProps = {
//     location: 'Hell',
//     temp: 100000
//   };
//
// WeatherMessage.propTypes = {
//     location: PropTypes.string,
//     temp: PropTypes.number
//   };
