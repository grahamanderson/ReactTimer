import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, hashHistory, Route, Switch } from 'react-router-dom'

import Main from 'Main'
import Countdown from 'Countdown'
import Timer from 'Timer'
import Navigation from 'Navigation'

//Load Foundation
import $ from 'jquery'
import '!style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

// //App scss
import '!style-loader!css-loader!sass-loader!applicationStyles'

ReactDOM.render(
    <Router history={hashHistory}>
      <div className='container'>
        <Route  path='/' component={Main}/>
        <Route  path='/timer' component={Timer}/>
        <Route path='/countdown' component={Countdown}/>
      </div>
    </Router>,

    document.getElementById('app')

);
