import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  slash: {
    transform: [{rotate: '-7deg'}, {scaleX: 1.5}, {translateY: 32}],
    height: 64,
  },
});

const SlashedView = ({color}) => (
  <View style={styles.container}>
    <View style={[styles.slash, {backgroundColor: color}]} />
  </View>
);

SlashedView.defaultProps = {
  color: colors.secondary,
};

SlashedView.propTypes = {
  color: PropTypes.string,
};

export default SlashedView;
