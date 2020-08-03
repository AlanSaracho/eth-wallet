import React, {useEffect, useRef} from 'react';
import {FlatList, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {SharedElement} from 'react-navigation-shared-element';
import {toUpper} from 'lodash';
import EthVal from 'ethval';
import {SlashedView, LoadingLogo, Loader} from '../../components';
import Transaction from './transaction';
import colors from '../../theme/colors';
import {WalletActions} from '../../store/wallet';
import {
  Container,
  HeaderContainer,
  HeaderInfoContainer,
  WalletName,
  Balance,
  LoaderContainer,
  NoTransactions,
} from './styled';

const AnimatedHeaderInfoContainer = Animated.createAnimatedComponent(
  HeaderInfoContainer,
);
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Home = () => {
  const {address, balance, transactions, loadingTransactions} = useSelector(
    (state) => state.wallet,
  );
  const ethBalance = new EthVal(balance).toEth().toFixed(2);
  const offset = useRef(new Animated.Value(0)).current;

  const reloadTransactions = () => {
    WalletActions.getBalance();
    WalletActions.getTransactions();
  };

  const maxOffset = 250;

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

  useEffect(() => {
    reloadTransactions();
  }, []);

  return (
    <Container>
      <AnimatedFlatList
        data={loadingTransactions ? [] : transactions}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: offset}}}],
          {useNativeDriver: true},
        )}
        ListFooterComponent={<SlashedView color={colors.secondary} inverted />}
        onRefresh={() => reloadTransactions()}
        refreshing={false}
        keyExtractor={(item) => `${item.hash}`}
        ListHeaderComponent={
          <HeaderContainer>
            <AnimatedHeaderInfoContainer
              style={{opacity, transform: [{scale}, {translateY: offset}]}}>
              <SharedElement id="logo">
                <LoadingLogo tintColor={colors.paper} size={42} />
              </SharedElement>
              <Balance>{`${ethBalance} ETH`}</Balance>
              <WalletName>{toUpper(address)}</WalletName>
            </AnimatedHeaderInfoContainer>
            <SlashedView />
          </HeaderContainer>
        }
        ListEmptyComponent={() => (
          <LoaderContainer>
            {loadingTransactions ? (
              <Loader />
            ) : (
              <NoTransactions>=(</NoTransactions>
            )}
          </LoaderContainer>
        )}
        renderItem={({item: transaction}) => <Transaction {...transaction} />}
      />
    </Container>
  );
};

export default Home;
