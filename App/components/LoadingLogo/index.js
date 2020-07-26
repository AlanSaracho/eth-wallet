import React, {useRef, useEffect} from 'react';
import {Image, Animated} from 'react-native';
import PropTypes from 'prop-types';

import center from './infura_logo_center.png';
import leftHand from './infura_logo_left_hand.png';
import rightHand from './infura_logo_right_hand.png';
import colors from '../../theme/colors';

const styles = {
  image: {
    position: 'absolute',
  },
};

const LoadingLogo = ({loading, size, tintColor, style}) => {
  const progress = useRef(new Animated.Value(0)).current;
  const color = {tintColor};
  const sizes = {width: size, height: size};
  const flutter = [
    Animated.delay(50),
    Animated.timing(progress, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }),
    Animated.timing(progress, {
      toValue: -1,
      duration: 150,
      useNativeDriver: true,
    }),
    Animated.timing(progress, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }),
  ];

  const flutterLoop = Animated.loop(
    Animated.sequence([...flutter, ...flutter, Animated.delay(500)]),
    {
      iterations: -1,
    },
  );

  useEffect(() => {
    if (loading) {
      flutterLoop.start();
    } else {
      flutterLoop.stop();
    }
  }, [loading, flutterLoop]);

  const rotateLeft = progress.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-10deg', '0deg', '25deg'],
    extrapolate: 'clamp',
  });

  const rotateRight = progress.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['10deg', '0deg', '-25deg'],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[sizes, style]}>
      <Image source={center} style={[styles.image, sizes, color]} />
      <Animated.Image
        source={leftHand}
        style={[
          styles.image,
          sizes,
          color,
          {transform: [{rotate: rotateLeft}]},
        ]}
      />
      <Animated.Image
        source={rightHand}
        style={[
          styles.image,
          sizes,
          color,
          {transform: [{rotate: rotateRight}]},
        ]}
      />
    </Animated.View>
  );
};

LoadingLogo.defaultProps = {
  loading: false,
  size: 160,
  tintColor: colors.secondary,
};

LoadingLogo.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  tintColor: PropTypes.string,
};

export default LoadingLogo;
