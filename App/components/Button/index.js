import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import colors from '../../theme/colors';

const styles = {
  container: {
    padding: 16,
    alignSelf: 'center',
  },
  text: {
    fontSize: 24,
    color: colors.paper,
    fontFamily: 'SourceCodePro-Black',
  },
};

const Button = ({onPress, children, style}) => {
  return (
    <TouchableHighlight onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
};

export default Button;
