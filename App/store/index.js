import {combineReducers} from 'redux';
import {createStore as createChilloutStore} from 'redux-chillout';
import session from './session';

const createStore = () => {
  const rootReducer = combineReducers({
    session,
  });

  return createChilloutStore(rootReducer);
};

export {createStore};
