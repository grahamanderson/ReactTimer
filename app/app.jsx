import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, hashHistory } from 'react-router-dom';

import Main from 'Main';

//Load Foundation
import $ from 'jquery'
import '!style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

//App scss
import '!style-loader!css-loader!sass-loader!applicationStyles'


ReactDOM.render(
  <div>
    <p>Did this work</p>
    <BrowserRouter history={hashHistory}>
      <div>
        <Route  path='/' component={Main} />
      </div>
    </BrowserRouter>
  </div>,
    document.getElementById('app')

);
