import React from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import PropTypes from 'prop-types'
import openWeatherMap from 'openWeatherMap'

class Weather extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      // location: 'Miami',
      // temp: 88
      isLoading: false
    }
    this.handleSearch= this.handleSearch.bind(this)
    // this.setState= this.setState.bind(this);
  }

  handleSearch(location) {
    var that=this;

    this.setState({isLoading: true})

    openWeatherMap.getTemp(location).then( (temp) => {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage){

        that.setState({isLoading: false})
        alert(errorMessage)
    })
  }

  render(){

    let {isLoading, temp, location} = this.state;

     let renderMessage = () => {
      if(isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return(
      <div>
        
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}

      </div>
    );
  }
}

Weather.defaultProps = {
  location: 'Miami',
  temp: 88
}

Weather.propTypes = {
  location: PropTypes.string,
  temp: PropTypes.number
}

export default Weather;
