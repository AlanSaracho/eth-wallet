import {applyMiddleware} from 'redux';
import {createStore as createChilloutStore} from 'redux-chillout';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createChilloutStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export {createStore};
