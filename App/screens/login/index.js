import React, {useEffect, useRef, useState} from 'react';
import {View, Dimensions, Animated, Keyboard} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {toUpper, toLower} from 'lodash';
import ethers from 'ethers';

import {WalletActions} from '../../store/wallet';
import {SlashedView, LoadingLogo, Button} from '../../components';
import {timeout} from '../../utils';
import {
  Container,
  LogoContainer,
  LoginContainer,
  Input,
  LoginContent,
  InvalidAddress,
} from './styled';

const AnimatedLoginContainer = Animated.createAnimatedComponent(LoginContainer);
const AnimatedLogoContainer = Animated.createAnimatedComponent(LogoContainer);

const screenSize = Dimensions.get('screen');
const visibleLoginHeight = 160 + 64;

const Login = () => {
  const navigation = useNavigation();
  const initialPosition = screenSize.height - visibleLoginHeight;
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(true);
  const {address, validatingAddress} = useSelector((state) => state.wallet);
  const [loginAddress, setLoginAddress] = useState(address);
  const loading = showLoadingAnimation || validatingAddress;
  const validAddress = ethers.utils.isAddress(toLower(loginAddress));

  const startLogin = () => {
    Keyboard.dismiss();
    WalletActions.setAddress(toLower(loginAddress));
    WalletActions.validateAddress();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setShowLoadingAnimation(true);
      await timeout(2500);
      setShowLoadingAnimation(false);
    });

    return unsubscribe;
  }, [navigation]);

  const progress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(progress, {
      toValue: loading ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [loading, progress]);

  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
    extrapolate: 'clamp',
  });

  const translateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [initialPosition, 0],
    extrapolate: 'clamp',
  });

  const opacity = progress.interpolate({
    inputRange: [0.5, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const errorMessageStyle = {opacity: validAddress ? 0 : 1};

  return (
    <Container>
      <AnimatedLogoContainer style={{transform: [{scale}]}}>
        <SharedElement id="logo">
          <LoadingLogo loading={loading} tintColor="white" />
        </SharedElement>
      </AnimatedLogoContainer>
      <AnimatedLoginContainer style={{transform: [{translateY}]}}>
        <SlashedView />
        <LoginContent>
          <LoadingLogo tintColor="white" size={32} style={{opacity}} />
          <View>
            <Input
              placeholder="Type your wallet"
              placeholderTextColor="#FFFFFF66"
              onChangeText={(newAddress) =>
                setLoginAddress(toUpper(newAddress))
              }
              value={loginAddress}
            />
            <InvalidAddress style={errorMessageStyle}>
              Please, enter a valid address
            </InvalidAddress>
          </View>
          <Button onPress={startLogin} disabled={!validAddress}>
            go
          </Button>
          <View />
        </LoginContent>
      </AnimatedLoginContainer>
    </Container>
  );
};

export default Login;
