import React from 'react';

class WeatherForm extends React.Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(e) {
    e.preventDefault();
    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
}

module.exports = WeatherForm;


// // WORKING
// import createReactClass from 'create-react-class'
// var WeatherForm = createReactClass({
//
//   onFormSubmit: function(e) {
//
//     e.preventDefault();
//     var location = this.refs.location.value;
//
//     if(location.length > 0) {
//       this.refs.location.value = '';
//       this.props.onSearch(location);
//     }
//   },
//   render: function () {
//     return (
//       <div>
//         <form onSubmit={this.onFormSubmit}>
//           <input type="text" ref="location"/>
//           <button>Get Weather</button>
//         </form>
//       </div>
//     );
//   }
// });
//
// export default WeatherForm;
