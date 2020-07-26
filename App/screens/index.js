import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import Login from './login';

const Stack = createStackNavigator();
const options = {
  headerShown: false,
};

export default () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Login" component={Login} options={options} />
    <Stack.Screen name="Home" component={Home} options={options} />
  </Stack.Navigator>
);
