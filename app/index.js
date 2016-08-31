import React from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App'
import MainViewContainer from './components/MainViewContainer/MainViewContainer';

const history = browserHistory;

const routes =
  <Route component={App}>
    <Route path="/" component={MainViewContainer}/>
  </Route>

ReactDOM.render(
    <Router history={history}>{routes}</Router>,
  document.getElementById('app')
)
