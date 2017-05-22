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
  <BrowserRouter history={hashHistory}>
    <div>
      <Route  path='/' component={Main} />
      {/* <Route  path='/' component={Weather} />
        <Route  path='/about' component={About} />
      <Route  path='/examples' component={Examples} /> */}
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
