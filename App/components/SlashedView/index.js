import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  slash: {
    transform: [],
  },
});

const SlashedView = ({color, inverted}) => {
  const rotate = inverted ? '-187deg' : '-7deg';
  return (
    <View style={styles.container}>
      <View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            height: 64,
            backgroundColor: color,
            transform: [{rotate}, {scaleX: 1.5}, {translateY: 32}],
          },
        ]}
      />
    </View>
  );
};

SlashedView.defaultProps = {
  color: colors.secondary,
  inverted: false,
};

SlashedView.propTypes = {
  color: PropTypes.string,
  inverted: PropTypes.bool,
};

export default SlashedView;
