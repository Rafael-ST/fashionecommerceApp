import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen'


const Tab = createBottomTabNavigator()

function Home(){
  return(
    <View></View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#e96e6e'}}>
        <Tab.Screen name='HOME' component={HomeScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name='REORDER' component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="reorder" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name='CART' component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name='ACCOUNT' component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

