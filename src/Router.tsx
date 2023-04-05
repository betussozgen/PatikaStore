/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Products from './components/Products/Products';
// import products_data from './components/products_data.json'
// import SearchBox from './components/SearchBox/SearchBox';
// import Header from './components/Header/Header';

import ProductScreen from '../src/pages/ProductScreen';
import WelcomeScreen from '../src/pages/WelcomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}/>
        <Stack.Screen 
        name='ProductScreen'
        component={ProductScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
