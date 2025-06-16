
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PixScreen from './screens/PixScreen';
import InvestSuggestionScreen from './screens/InvestSuggestionScreen';
import InvestmentDetailsScreen from './screens/InvestmentDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pix" component={PixScreen} />
        <Stack.Screen name="Suggest" component={InvestSuggestionScreen} />
        <Stack.Screen name="InvestDetails" component={InvestmentDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
