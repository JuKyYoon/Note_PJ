import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './containers/Home';
import View from './containers/View';
import List from './containers/List';
import Account from './containers/Account';
import Setting from './containers/Setting';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="account" component={Account}/>
      <Route path="setting" component={Setting}/>
      <Route path="view" component={View}>
        <Route path=":id" component={List}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
