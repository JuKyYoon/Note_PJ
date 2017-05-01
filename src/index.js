import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './containers/Home';
import View from './containers/View';
import Search from './containers/Search';
import Calender from './containers/Calender';
import Setting from './containers/Setting';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="search" component={Search}/>
      <Route path="setting" component={Setting}/>
      <Route path="view" component={View}/>
      <Route path="calender" component={Calender}/>
      
    </Route>
  </Router>,
  document.getElementById('root')
);
