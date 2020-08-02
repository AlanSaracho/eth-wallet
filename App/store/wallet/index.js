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
  },
  {
    address: Config.DEFAULT_WALLET,
  },
);

export {WalletActions, WalletTypes};
export default reducer;
