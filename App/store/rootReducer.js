import {combineReducers} from 'redux';
import wallet from './wallet';

const rootReducer = combineReducers({
  wallet,
});

export default rootReducer;
