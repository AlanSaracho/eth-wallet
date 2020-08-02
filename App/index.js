import React, {createRef} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStore} from './store';
import Screens from './screens';
import colors from './theme/colors';

const store = createStore();
const navigation = createRef();

const App = () => (
  <NavigationContainer ref={navigation}>
    <Provider store={store}>
      <Screens />
    </Provider>
    <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
  </NavigationContainer>
);

export default App;
export {navigation};
