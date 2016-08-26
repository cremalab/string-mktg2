import React from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import configureStore from './stores/configureStore'

import App from './components/App'
import MainViewContainer from './components/MainViewContainer/MainViewContainer';
import Counter from './components/Counter/Counter'




const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

const routes =
  <Route component={App}>
    <Route path="/" component={MainViewContainer}/>
  </Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
