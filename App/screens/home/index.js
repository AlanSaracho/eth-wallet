import React, {useEffect, useRef} from 'react';
import {View, FlatList, Animated} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {toUpper} from 'lodash';
import {SlashedView, LoadingLogo} from '../../components';
import Transaction from './transaction';
import colors from '../../theme/colors';
import {
  Container,
  HeaderContainer,
  HeaderInfoContainer,
  WalletName,
  Balance,
} from './styled';

const AnimatedHeaderInfoContainer = Animated.createAnimatedComponent(
  HeaderInfoContainer,
);
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Home = () => {
  const balance = '1000 RSK';
  const wallet = '0x34B348F0E';
  const offset = useRef(new Animated.Value(0)).current;

  const reloadTransactions = () => {};

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
        data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: offset}}}],
          {useNativeDriver: true},
        )}
        ListFooterComponent={<SlashedView color={colors.secondary} inverted />}
        ListHeaderComponent={
          <HeaderContainer>
            <AnimatedHeaderInfoContainer
              style={{opacity, transform: [{scale}, {translateY: offset}]}}>
              <SharedElement id="logo">
                <LoadingLogo tintColor={colors.paper} size={42} />
              </SharedElement>
              <Balance>{balance}</Balance>
              <WalletName>{toUpper(wallet)}</WalletName>
            </AnimatedHeaderInfoContainer>
            <SlashedView />
          </HeaderContainer>
        }
        renderItem={({item}) => <Transaction />}
      />
    </Container>
  );
};

export default Home;
