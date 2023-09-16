import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/Store';
const App = () => {

  // const Stack = createStackNavigator();
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>

  )
}

export default App

const styles = StyleSheet.create({})