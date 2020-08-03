import {generateChillout} from 'redux-chillout';
import Config from 'react-native-config';

const [WalletActions, reducer, WalletTypes] = generateChillout(
  {
    setAddress: ['address'],
    setValidatingAddress: ['validatingAddress'],
    validateAddress: null,

    setLoadingBalance: ['loadingBalance'],
    setBalance: ['balance'],
    getBalance: null,

    setLoadingTransactions: ['loadingTransactions'],
    getTransactions: null,
    setTransactions: ['transactions'],

    setLoadingEtherPrice: ['loadingEtherPrice'],
    getEtherPrice: null,
    setEtherPrice: ['etherPrice'],
  },
  {
    address: Config.DEFAULT_WALLET,
    balance: 0,
  },
);

export {WalletActions, WalletTypes};
export default reducer;
