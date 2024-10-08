import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'
import { Provider } from 'react-redux'
import Store from './src/Redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})