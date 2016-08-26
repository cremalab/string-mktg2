import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare  from 'redux-thunk';
import createLogger from 'redux-logger';

import Reducer from '../reducers/index.reducer';

// const loggerMiddleware = createLogger();


export default function configureStore(initialState){
  return createStore(
    Reducer,
    initialState,
    applyMiddleware(
      thunkMiddleWare
      // loggerMiddleware
    )
  )
}
