import {all} from 'redux-saga/effects';
import wallet from './wallet/saga';

export default function* root() {
  yield all([...wallet]);
}
