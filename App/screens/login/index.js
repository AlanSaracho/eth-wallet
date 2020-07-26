import React, {useEffect, useRef, useState} from 'react';
import {View, Dimensions, Animated, Keyboard} from 'react-native';
import {toUpper} from 'lodash';
import {SlashedView, LoadingLogo, Button} from '../../components';
import {
  Container,
  LogoContainer,
  LoginContainer,
  Input,
  LoginContent,
} from './styled';

const AnimatedLoginContainer = Animated.createAnimatedComponent(LoginContainer);
const AnimatedLogoContainer = Animated.createAnimatedComponent(LogoContainer);

const screenSize = Dimensions.get('screen');
const visibleLoginHeight = 160 + 64;

const Login = () => {
  const initialPosition = screenSize.height - visibleLoginHeight;
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');
  const startLogin = () => {
    Keyboard.dismiss();
    setLoading(true);
  };

  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

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

  return (
    <Container>
      <AnimatedLogoContainer style={{transform: [{scale}]}}>
        <LoadingLogo loading={loading} />
      </AnimatedLogoContainer>
      <AnimatedLoginContainer style={{transform: [{translateY}]}}>
        <SlashedView />
        <LoginContent>
          <LoadingLogo tintColor="white" size={32} style={{opacity}} />
          <Input
            placeholder="Type your wallet"
            placeholderTextColor="#FFFFFF66"
            onChangeText={(newAddress) => setAddress(toUpper(newAddress))}
          />
          <Button onPress={startLogin}>go</Button>
          <View />
        </LoginContent>
      </AnimatedLoginContainer>
    </Container>
  );
};

export default Login;
