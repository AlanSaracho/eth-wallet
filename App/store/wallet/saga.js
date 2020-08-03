import {takeLatest, call, delay, select} from 'redux-saga/effects';
import {
  getAddressBalance,
  getAddressTransactions,
  getLastBlock,
  getEtherUsdPrice,
} from '../../services/wallet';
import {WalletTypes, WalletActions} from './index';
import {navigation} from '../..';

function* validateAddress() {
  WalletActions.setValidatingAddress(true);
  WalletActions.setTransactions([]);
  WalletActions.setBalance(0);
  // only for animation fun :3
  yield delay(1500);
  WalletActions.setValidatingAddress(false);
  navigation.current.navigate('Home');
}

function* getBalance() {
  WalletActions.setLoadingBalance(true);
  try {
    const {address} = yield select((state) => state.wallet);
    const waiBalance = yield call(getAddressBalance, address);
    WalletActions.setBalance(waiBalance);
  } catch (e) {
    console.error(e);
  } finally {
    WalletActions.setLoadingBalance(false);
  }
}

function* getTransactions() {
  WalletActions.setLoadingTransactions(true);
  try {
    const {address} = yield select((state) => state.wallet);
    const lastBlock = yield call(getLastBlock);
    const transactions = yield call(getAddressTransactions, address, lastBlock);
    WalletActions.setTransactions(transactions);
  } catch (e) {
    console.error(e);
  } finally {
    WalletActions.setLoadingTransactions(false);
  }
}

function* getEtherPrice() {
  WalletActions.setLoadingEtherPrice(true);
  try {
    const etherPrice = yield call(getEtherUsdPrice);
    WalletActions.setEtherPrice(etherPrice);
  } catch (e) {
    console.error(e);
  } finally {
    WalletActions.setLoadingEtherPrice(false);
  }
}

export default [
  takeLatest(WalletTypes.VALIDATE_ADDRESS, validateAddress),
  takeLatest(WalletTypes.GET_BALANCE, getBalance),
  takeLatest(WalletTypes.GET_TRANSACTIONS, getTransactions),
  takeLatest(WalletTypes.GET_ETHER_PRICE, getEtherPrice),
];
