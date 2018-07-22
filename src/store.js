import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import sagas from './sagas'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const enhancers = [];
  const initialState = {};

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(sagaMiddleware),
    ...enhancers
  );

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  )

  sagaMiddleware.run(sagas);

  return store;
}
