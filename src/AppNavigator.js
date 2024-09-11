import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountDetails from './Screens/AccountDetails'
import VerifyScreen from './Screens/VerifyScreen'
import CategoriesScreen from './BottomTabs/CategoriesScreen'
import { moderateScale } from 'react-native-size-matters'
import UserScreen from './BottomTabs/UserScreen'
import Messages from './BottomTabs/Messages'
import YourItems from './Components/YourItems'

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  const header = { headerShown: false }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={header}>
        <Stack.Screen
          name='AccountDetails'
          component={AccountDetails} />
        <Stack.Screen
          name='VerifyScreen'
          component={VerifyScreen} />
        <Stack.Screen
          name='BottomTabs'
          component={BottomTabs} />
        <Stack.Screen
          name='YourItems'
          component={YourItems} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator


function BottomTabs() {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: moderateScale(70)
        },
        tabBarHideOnKeyboard: true
      }}>
      <Tab.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate("CategoriesScreen")}>
              <View style={styles.tabItem}>
                <Image source={require("./assets/Images/cart.png")}
                  style={[
                    styles.tabIcon,
                    { tintColor: focused ? '#f72a4b' : '#9c9c9c' }
                  ]} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
              <View style={styles.tabItem}>
                <Image source={require("./assets/Images/message.png")}
                  style={[
                    styles.tabIcon,
                    { tintColor: focused ? '#f72a4b' : '#9c9c9c' }
                  ]} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate("UserScreen")}>
              <View style={styles.tabItem}>
                <Image source={require("./assets/Images/user.png")}
                  style={[
                    styles.tabIcon,
                    { tintColor: focused ? '#f72a4b' : '#9c9c9c' }
                  ]} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: moderateScale(45),
    height: moderateScale(45),
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})