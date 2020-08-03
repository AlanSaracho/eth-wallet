import React from 'react';
import {Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {SharedElement} from 'react-navigation-shared-element';
import {toUpper} from 'lodash';
import EthVal from 'ethval';
import currency from 'currency.js';
import {SlashedView, LoadingLogo} from '../../../components';
import colors from '../../../theme/colors';
import {
  HeaderContainer,
  HeaderInfoContainer,
  WalletName,
  Balance,
} from './styled';

const AnimatedHeaderInfoContainer = Animated.createAnimatedComponent(
  HeaderInfoContainer,
);

const Header = ({offset}) => {
  const maxOffset = 250;
  const {address, balance, etherPrice} = useSelector((state) => state.wallet);
  const ethBalance = new EthVal(balance).toEth().toFixed(2);
  const usdBalance = new EthVal(balance).toEth() * etherPrice;

  const opacity = offset.interpolate({
    inputRange: [0, maxOffset],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const scale = offset.interpolate({
    inputRange: [0, maxOffset],
    outputRange: [1, 0.5],
    extrapolate: 'clamp',
  });

  return (
    <HeaderContainer>
      <AnimatedHeaderInfoContainer
        style={{opacity, transform: [{scale}, {translateY: offset}]}}>
        <SharedElement id="logo">
          <LoadingLogo tintColor={colors.paper} size={42} />
        </SharedElement>
        <Balance>{`${ethBalance} ETH`}</Balance>
        <WalletName>
          {`(${currency(usdBalance).format()})\n\n${toUpper(address)}`}
        </WalletName>
      </AnimatedHeaderInfoContainer>
      <SlashedView />
    </HeaderContainer>
  );
};

export default Header;
