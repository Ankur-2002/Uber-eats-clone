import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../Screen/About';
import Home from '../Screen/Home';
import OrderComplete from '../Screen/OrderComplete';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="OrderComplete" component={OrderComplete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
