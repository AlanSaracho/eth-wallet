import {infuraProvider, etherscanProvider} from '../api';
import {reverse} from 'lodash';

export const getLastBlock = async () => {
  const lastBlockNumber = await infuraProvider.getBlockNumber();
  return lastBlockNumber;
};

export const getAddressBalance = async (address) => {
  const balance = await infuraProvider.getBalance(address);
  const gweiBalance = parseInt(balance, 10);
  return gweiBalance;
};

export const getAddressTransactions = async (address) => {
  const transactions = await etherscanProvider.getHistory(address);
  return reverse(transactions);
};

export const getEtherPrice = async () => {
  const price = await etherscanProvider.getEtherPrice();
  console.log({price});
  return price;
};
