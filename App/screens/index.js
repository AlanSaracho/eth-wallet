import React from 'react';
import Home from './home';
import Login from './login';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
const options = {
  headerShown: false,
};

const transitionConfig = {config: {duration: 600}};

export default () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      transitionSpec: {
        close: transitionConfig,
        open: transitionConfig,
      },
    }}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={options}
      sharedElements={() => ['logo']}
    />
    <Stack.Screen name="Home" component={Home} options={options} />
  </Stack.Navigator>
);
