import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import CounterReducer from './counter.reducer';


export default combineReducers({
  CounterReducer,
  routing:routerReducer
});
