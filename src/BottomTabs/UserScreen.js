import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f72a4b',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold'
        }}>Only Categories Screen Available </Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({})