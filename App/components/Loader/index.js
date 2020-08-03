import React, {useEffect, useRef} from 'react';
import {Container, Line, SlashedView, SlashedViewsContainer} from './styled';
import {Animated} from 'react-native';
import {times} from 'lodash';

const AnimatedLine = Animated.createAnimatedComponent(Line);

const Loader = () => {
  const progress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(progress, {
          toValue: 0,
          duration: 1,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1,
      },
    ).start();
  }, [progress]);
  return (
    <Container>
      {times(3, (index) => {
        const size = 1 / 4;
        const opacity = progress.interpolate({
          inputRange: [index * size, (index + 1) * size],
          outputRange: [0.3, 0.9],
          extrapolate: 'clamp',
        });
        return <AnimatedLine style={{opacity}} />;
      })}
      <SlashedViewsContainer>
        <SlashedView />
        <SlashedView />
      </SlashedViewsContainer>
    </Container>
  );
};

export default Loader;
