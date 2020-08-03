import React, {useEffect, useRef} from 'react';
import {FlatList, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {SlashedView, Loader} from '../../components';
import Transaction from './transaction';
import Header from './header';
import colors from '../../theme/colors';
import {WalletActions} from '../../store/wallet';
import {Container, LoaderContainer, NoTransactions} from './styled';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Home = () => {
  const {transactions, loadingTransactions} = useSelector(
    (state) => state.wallet,
  );
  const offset = useRef(new Animated.Value(0)).current;

  const reloadTransactions = () => {
    WalletActions.getBalance();
    WalletActions.getTransactions();
    WalletActions.getEtherPrice();
  };

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
        ListHeaderComponent={<Header offset={offset} />}
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
