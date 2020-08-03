import ethers from 'ethers';
import Config from 'react-native-config';

const infuraProvider = new ethers.providers.InfuraProvider(Config.NETWORK);
const etherscanProvider = new ethers.providers.EtherscanProvider(
  Config.NETWORK,
  Config.ETHERSCAN_API_KEY,
);

export {etherscanProvider};
export {infuraProvider};
