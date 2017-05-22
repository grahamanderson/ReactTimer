import React from 'react';
import PropTypes from 'prop-types';


const WeatherMessage = ({temp,location}) => {

    return (
        <h3>Its it {temp} in {location}.</h3>
    )
}

WeatherMessage.propTypes = {
    temp: PropTypes.number,
    location: PropTypes.string
  };


export default WeatherMessage;



// WeatherMessage.defaultProps = {
//     location: 'Hell',
//     temp: 100000
//   };
